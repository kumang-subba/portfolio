import React from "react";
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type CreateEmailProps = {
  message: string;
  senderEmail: string;
  company?: string;
};

export default function CreateEmail({ message, senderEmail, company }: CreateEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">You received the following message from the contact form</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>
                The sender&apos;s email is: {senderEmail}
                {company && ` and the sender&apos;s company is: ${company}`}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
