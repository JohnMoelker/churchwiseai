import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "ChurchWiseAI terms of service — the agreement governing your use of our AI-powered ministry tools.",
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6">
      <article className="max-w-3xl mx-auto">
        <h1
          className="text-3xl sm:text-4xl font-bold text-stone-900 mb-2"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Terms of Service
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
              Acceptance of Terms
            </h2>
            <p>
              By accessing or using ChurchWiseAI services, including our AI
              voice agent, chatbot, and related tools (collectively, the
              &ldquo;Service&rdquo;), you agree to be bound by these Terms of
              Service (&ldquo;Terms&rdquo;). If you are using the Service on
              behalf of a church or organization, you represent that you have the
              authority to bind that organization to these Terms. If you do not
              agree, you may not use the Service.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold text-stone-900 mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Service Description
            </h2>
            <p>
              ChurchWiseAI provides AI-powered communication tools designed for
              churches and faith-based organizations. The Service includes AI
              voice agents that handle phone calls, AI chatbots that engage
              website visitors, congregation care features, and related
              analytics and management dashboards. The specific features
              available depend on your subscription plan.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold text-stone-900 mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Acceptable Use
            </h2>
            <p className="mb-3">
              You agree to use the Service only for lawful purposes related to
              the operations of a church, ministry, or faith-based organization.
              You may not:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                Use the Service for any unlawful, fraudulent, or harmful
                purpose.
              </li>
              <li>
                Use the AI voice agent or chatbot to send unsolicited messages
                or spam.
              </li>
              <li>
                Attempt to reverse engineer, decompile, or extract the source
                code of our AI models or proprietary systems.
              </li>
              <li>
                Share your account credentials with unauthorized third parties.
              </li>
              <li>
                Use the Service in a way that could damage, disable, or impair
                our infrastructure.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-xl font-semibold text-stone-900 mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Billing and Cancellation
            </h2>
            <p className="mb-3">
              Subscriptions are billed monthly. You may cancel your subscription
              at any time through your admin dashboard. Upon cancellation:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                Your service will remain active until the end of the current
                billing period.
              </li>
              <li>
                No refunds are issued for the remaining portion of a billing
                period.
              </li>
              <li>
                You may export your data (call logs, transcripts) before your
                service ends.
              </li>
              <li>
                After the billing period ends, your AI voice agent and chatbot
                will be deactivated.
              </li>
            </ul>
            <p className="mt-3">
              We reserve the right to change pricing with 30 days&apos; written
              notice. Price changes will take effect at the start of your next
              billing cycle.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold text-stone-900 mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Intellectual Property
            </h2>
            <p>
              All content, software, and technology provided through the Service
              is owned by ChurchWiseAI LTD or its licensors and is protected by
              copyright, trademark, and other intellectual property laws. Your
              church&apos;s content (knowledge base entries, custom responses,
              uploaded materials) remains your property. By uploading content,
              you grant us a limited license to use it solely to provide the
              Service to you.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold text-stone-900 mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, ChurchWiseAI
              LTD shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits or
              revenue, whether incurred directly or indirectly, or any loss of
              data, use, or goodwill. Our total liability for any claim arising
              from the Service shall not exceed the amount you paid us in the
              twelve (12) months preceding the claim.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold text-stone-900 mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the Province of Ontario, Canada, without regard to its
              conflict of law provisions. Any disputes arising from these Terms
              or your use of the Service shall be subject to the exclusive
              jurisdiction of the courts of Ontario, Canada.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold text-stone-900 mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. If we make material
              changes, we will notify you via email or through the Service at
              least 30 days before the changes take effect. Your continued use
              of the Service after the effective date constitutes acceptance of
              the updated Terms.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-semibold text-stone-900 mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Contact
            </h2>
            <p>
              For questions about these Terms, please contact us at{" "}
              <a
                href="mailto:legal@churchwiseai.com"
                className="text-[#D4AF37] hover:text-[#a07d1c] underline"
              >
                legal@churchwiseai.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
