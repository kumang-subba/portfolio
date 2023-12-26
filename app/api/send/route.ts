import CreateEmail from "@/components/Email";
import { EmailValidator } from "@/lib/emailValidator";
import { NextResponse } from "next/server";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, companyName, message } = EmailValidator.parse(body);

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["kumangsubba@gmail.com"],
      subject: `Mail from portfolio by : ${name}`,
      reply_to: email,
      react: React.createElement(CreateEmail, {
        message: message,
        senderEmail: email,
        company: companyName,
      }),
    });
    return NextResponse.json(data);
  } catch {
    return new NextResponse("Error", { status: 500 });
  }
}
