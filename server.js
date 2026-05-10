import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(express.json());

let transporter;

// Initialize Ethereal test account
nodemailer.createTestAccount((err, account) => {
    if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        return process.exit(1);
    }
    
    console.log('Credentials obtained for Ethereal test account.');

    transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
            user: account.user,
            pass: account.pass
        }
    });
});

app.post('/api/contact', async (req, res) => {
    const { name, email, organization, service, message } = req.body;

    if (!transporter) {
        return res.status(500).json({ error: 'Mail transporter not ready' });
    }

    try {
        // 1. Send Notification to Business
        let info1 = await transporter.sendMail({
            from: '"Proxima Care Forms" <no-reply@proxima.care>',
            to: 'john.y.wick28@gmail.com', // Business email
            subject: `New Inquiry from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Organization:</strong> ${organization}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Message:</strong><br/>${message}</p>
            `
        });

        // 2. Send Auto-Responder to Client
        let info2 = await transporter.sendMail({
            from: '"Proxima Care Partners" <partners@proxima.care>',
            to: email, // Client email
            subject: 'We have received your inquiry',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #030d1a; color: white; padding: 20px; border-radius: 10px;">
                    <h2 style="color: #2dd4bf;">Thank you for contacting Proxima Care Partners, ${name}.</h2>
                    <p style="color: #cbd5e1;">We have received your inquiry regarding <strong>${service}</strong>.</p>
                    <p style="color: #cbd5e1;">Our team will review your request and get back to you within 24 hours.</p>
                    <br/>
                    <p style="color: #94a3b8; font-size: 12px;">This is an automated message. Please do not reply directly to this email.</p>
                </div>
            `
        });

        res.json({ 
            success: true, 
            businessPreviewUrl: nodemailer.getTestMessageUrl(info1),
            clientPreviewUrl: nodemailer.getTestMessageUrl(info2)
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send test emails' });
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Test Mail Server running on http://localhost:${PORT}`);
    console.log(`When a form is submitted, test email URLs will be returned to the frontend.`);
});
