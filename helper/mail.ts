import nodemailer from 'nodemailer'

export const sendMail = async ({ 
    location,
    pickUpDate,
    dropOffDate,
    pickUpTime,
    dropOffTime,
    userName,
    userEmail,
}: any) => {
    try {
        const transporter = nodemailer.createTransport({
            pool: true,
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
            maxConnections: 1,
        })


        const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Booking Confirmation</title>
        <style>
            body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            padding: 20px;
            }
            .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h2 {
            color: #007bff;
            }
            p {
            margin-bottom: 20px;
            }
            .booking-details {
            margin-top: 30px;
            }
            .booking-details p {
            margin: 8px 0;
            }
        </style>
        </head>
        <body>
        <div class="container">
            <h2>Booking Confirmation</h2>
            <p>Dear ${userName},</p>
            <p>We are pleased to confirm your booking with us. Below are the details of your reservation:</p>
            <div class="booking-details">
            <p><strong>Pickup Date:</strong> ${pickUpDate}</p>
            <p><strong>Pickup Time:</strong> ${pickUpTime}</p>
            <p><strong>Drop-off Date:</strong> ${dropOffDate}</p>
            <p><strong>Drop-off Time:</strong> ${dropOffTime}</p>
            <p><strong>Location:</strong> ${location}</p>
           
            </div>
            <p>Thank you for choosing our car rental service. We look forward to serving you!</p>
            <p>Best regards,<br>The Car Rental Team</p>
        </div>
        </body>
        </html>`

        const mailOptions = {
            from: '"Car Rental Service 🚗" <rentalcar@gmail.com>', // sender address
            to: userEmail, // list of receivers
            subject: 'Confirmation of Your Rental Car Booking', // Subject line
            html: htmlContent // html body
        }

        const mailResponse = await transporter.sendMail(mailOptions)
        return mailResponse
    } catch (error) {
        console.log('Error in nodemailer' + error)
    }
}
