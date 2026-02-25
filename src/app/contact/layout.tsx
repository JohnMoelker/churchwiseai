import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ChurchWiseAI. Send us a message, call us, or book a free 30-minute demo to see our AI voice agent and chatbot in action.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
