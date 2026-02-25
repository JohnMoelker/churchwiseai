import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "ChurchWiseAI privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6">
      <article className="max-w-3xl mx-auto">
        <h1
          className="text-3xl sm:text-4xl font-bold text-stone-900 mb-2"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm text-stone-500 mb-10">
          Last Updated: February 2026
        </p>

        <div className="space-y-10 text-stone-700 leading-relaxed">
          <section>
            <h2
              className="text-xl font-semibold text-stone-900 mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Data Collection
            </h2>
            <p className="mb-3">
              ChurchWiseAI LTD (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
              &ldquo;ChurchWiseAI&rdquo;) collects information necessary to
              provide our AI voice agent and chatbot services to churches and
              ministries. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                <strong>Call logs and transcripts:</strong> Phone calls handled
                by your AI voice agent, including caller phone numbers, call
                duration, and AI-generated transcripts.
              </li>
              <li>
                <strong>Chat transcripts:</strong> Conversations between your
                website visitors and your AI chatbot.
              </li>
              <li>
                <strong>Account information:</strong> Name, email address,
                church name, and billing details provided during registration.
              </li>
              <li>
                <strong>Usage data:</strong> Service usage metrics, feature
                interactions, and performance data used to improve our platform.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-xl font-semibold text-stone-900 mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              How We Use Data
            </h2>
            <p className="mb-3">We use collected data to:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                Provide and maintain our AI voice agent and chatbot services.
              </li>
              <li>
                Improve AI response quality and accuracy for your specific
                church context.
              </li>
              <li>
                Process billing and subscription management through our payment
                provider.
              </li>
              <li>
                Send service-related communications such as usage reports and
                important updates.
              </li>
              <li>
                Detect, prevent, and address technical issues or abuse of the
                platform.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-xl font-semibold text-stone-900 mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Data Sharing
            </h2>
            <p className="mb-3">
              We do not sell, rent, or trade your data to third parties. We share
              data only with the following trusted service providers necessary to
              operate our platform:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                <strong>Stripe:</strong> Payment processing and subscription
                management.
              </li>
              <li>
                <strong>Supabase:</strong> Database hosting and authentication
                services.
              </li>
              <li>
                <strong>Twilio:</strong> Voice call routing and telephony
                infrastructure.
              </li>
              <li>
                <strong>ElevenLabs:</strong> AI voice synthesis for voice agent
                responses.
              </li>
            </ul>
            <p className="mt-3">
              Each provider is contractually obligated to protect your data and
              use it only to provide their services to us.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold text-stone-900 mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Data Retention
            </h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                <strong>Call logs:</strong> Retained for 90 days, then
                automatically deleted.
              </li>
              <li>
                <strong>Chat and call transcripts:</strong> Retained for 1 year
                to support service improvement, then deleted.
              </li>
              <li>
                <strong>Account data:</strong> Retained until you delete your
                account or request data removal.
              </li>
              <li>
                <strong>Billing records:</strong> Retained as required by law
                (typically 7 years for financial records).
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-xl font-semibold text-stone-900 mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Security
            </h2>
            <p>
              We take the security of your data seriously. All data is encrypted
              at rest and in transit using industry-standard TLS 1.3 encryption.
              Our infrastructure is hosted on SOC 2-compliant providers, and we
              follow security best practices including regular vulnerability
              assessments, access controls, and audit logging. We are actively
              working toward our own SOC 2 Type II certification.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold text-stone-900 mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Your Rights
            </h2>
            <p className="mb-3">
              You have the right to access, correct, or delete your personal
              data at any time. Specifically, you may:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                <strong>Access:</strong> Request a copy of all personal data we
                hold about you or your church.
              </li>
              <li>
                <strong>Deletion:</strong> Request that we delete your account
                and all associated data.
              </li>
              <li>
                <strong>Portability:</strong> Request an export of your data in a
                standard machine-readable format.
              </li>
              <li>
                <strong>Correction:</strong> Request correction of any
                inaccurate personal data.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-xl font-semibold text-stone-900 mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Contact
            </h2>
            <p>
              For any privacy-related questions or to exercise your data rights,
              please contact us at{" "}
              <a
                href="mailto:privacy@churchwiseai.com"
                className="text-[#D4AF37] hover:text-[#a07d1c] underline"
              >
                privacy@churchwiseai.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
