import { sendMail } from "@/helper/mail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
       
        const reqBody = await request.json();
        const { 
            location,
            pickUpDate,
            dropOffDate,
            pickUpTime,
            dropOffTime,
            userName,
            userEmail,
        } = reqBody;

        console.log("Request Body", reqBody);

        const response = await sendMail({ 
            location,
            pickUpDate,
            dropOffDate,
            pickUpTime,
            dropOffTime,
            userName,
            userEmail,
        });

        if(!response)
        {
            return NextResponse.json({
                message: "Failed to Send Mail!❌",
            }, { status: 400 })            
        }

        return NextResponse.json({
            message: "Mail Sent Successfully!✅",
        }, { status: 200 })

    } catch (error) {
        console.log("Error occurred while sending mail", error);
    }
}