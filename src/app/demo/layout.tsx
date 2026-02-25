import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo",
  description:
    "Try ChurchWiseAI before you buy. Experience our AI chatbot and voice agent live — see how different theological traditions respond, and hear a sample phone call.",
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
