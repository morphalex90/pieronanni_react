import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');
        const { name, email, message } = req.body;

        const msg = {
            to: 'piero.nanni@gmail.com',
            from: name + ' <info@pieronanni.com>', // Use the email address or domain you verified above
            replyTo: email,
            subject: 'New contact from ' + name + ' <' + email + '>',
            text: message,
            html: message,
        };

        (async () => {
            try {
                await sgMail.send(msg);
            } catch (error: any) {
                console.error(error);

                if (error.response) {
                    console.error(error.response.body)
                }
            }
        })();

        // await sendEmail({ name, email });
        return res.status(200).end();
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            messgae: "The requested endpoint was not found or doesn't support this method."
        }
    });
}

export default sendEmail;
