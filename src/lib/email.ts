import sendgrid from "@sendgrid/mail";

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(data: EmailData) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

  const { name, email, subject, message } = data;

  const emailContent = {
    to: process.env.EMAIL_TO!,
    from: process.env.EMAIL_FROM!,
    subject: `[OWL Contact] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `
      <div>
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="margin-top: 20px;">
          <strong>Message:</strong><br/>
          ${message.replace(/\n/g, "<br/>")}
        </div>
      </div>
    `,
  };

  try {
    await sendgrid.send(emailContent);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
