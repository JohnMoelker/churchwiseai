import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, MessageSquare, Shield } from "lucide-react";

interface DenominationData {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  features: {
    icon: "phone" | "chat" | "shield";
    title: string;
    description: string;
  }[];
}

const denominations: Record<string, DenominationData> = {
  baptist: {
    slug: "baptist",
    name: "Baptist Churches",
    headline: "AI Ministry Tools for Baptist Churches",
    subheadline:
      "Built to respect the autonomy and doctrinal distinctives of your Baptist congregation. Every response reflects your church's beliefs and values.",
    features: [
      {
        icon: "phone",
        title: "A Voice Agent That Knows Baptist Life",
        description:
          "Your AI receptionist understands Baptist church structure — from deacon boards to Wednesday night prayer meetings. It handles questions about believer's baptism, revival schedules, Vacation Bible School, and potluck suppers with the same warmth your church office would.",
      },
      {
        icon: "chat",
        title: "Website Chatbot for Your Congregation",
        description:
          "Embed a chatbot on your church website that answers questions using your church's actual information. Whether someone asks about Sunday School classes, the plan of salvation, or how to join, the AI responds with biblically grounded, Baptist-appropriate language.",
      },
      {
        icon: "shield",
        title: "Doctrinally Consistent Responses",
        description:
          "ChurchWiseAI supports Baptist theological distinctives — the authority of Scripture, soul competency, priesthood of all believers, and congregational governance. Your AI will never give a response that contradicts your church's doctrinal statement.",
      },
    ],
  },
  methodist: {
    slug: "methodist",
    name: "Methodist Churches",
    headline: "AI Ministry Tools for Methodist Churches",
    subheadline:
      "Designed for the Wesleyan tradition. Your AI understands connectional polity, the means of grace, and the distinctive rhythm of Methodist ministry.",
    features: [
      {
        icon: "phone",
        title: "A Voice Agent for the Methodist Connection",
        description:
          "Your AI receptionist knows Methodist structure — from district superintendents to charge conferences. It handles questions about itinerant appointments, Wesley's means of grace, communion practices, and annual conference schedules naturally.",
      },
      {
        icon: "chat",
        title: "Chatbot for Your Church Website",
        description:
          "A website chatbot that understands Methodist vocabulary and ministry rhythms. Whether visitors ask about membership classes, mission trips, or the Wesleyan Quadrilateral, the AI responds thoughtfully with your church's specific information.",
      },
      {
        icon: "shield",
        title: "Grounded in the Wesleyan Tradition",
        description:
          "ChurchWiseAI respects Methodist theology — prevenient grace, sanctification, social holiness, and the quadrilateral of Scripture, tradition, reason, and experience. Responses are consistent with your conference's teachings and your congregation's values.",
      },
    ],
  },
  presbyterian: {
    slug: "presbyterian",
    name: "Presbyterian Congregations",
    headline: "AI Ministry Tools for Presbyterian Congregations",
    subheadline:
      "Built for the Reformed tradition. Your AI understands session governance, Reformed theology, and the decency and order that define Presbyterian life.",
    features: [
      {
        icon: "phone",
        title: "A Voice Agent That Understands Presbyterianism",
        description:
          "Your AI receptionist knows Presbyterian polity — sessions, presbyteries, synods, and general assemblies. It handles questions about elder governance, commissioned ruling elders, communion schedules, and congregational meetings with proper Presbyterian terminology.",
      },
      {
        icon: "chat",
        title: "Chatbot for Your Congregation's Website",
        description:
          "A chatbot that speaks the language of the Reformed tradition. Whether inquirers ask about infant baptism, the Westminster Standards, or how the session governs the congregation, the AI responds with theological precision and pastoral warmth.",
      },
      {
        icon: "shield",
        title: "Reformed Theology, Faithfully Represented",
        description:
          "ChurchWiseAI supports Reformed distinctives — the sovereignty of God, covenant theology, the regulative principle of worship, and the confessional standards of your denomination. Your AI represents your tradition accurately.",
      },
    ],
  },
  lutheran: {
    slug: "lutheran",
    name: "Lutheran Congregations",
    headline: "AI Ministry Tools for Lutheran Congregations",
    subheadline:
      "Crafted for the Lutheran tradition. Your AI understands Law and Gospel, the liturgical calendar, and the sacramental life of your congregation.",
    features: [
      {
        icon: "phone",
        title: "A Voice Agent for Lutheran Ministry",
        description:
          "Your AI receptionist understands Lutheran church life — from call committees to voters' assemblies, Reformation Sunday to Lenten midweek services. It handles questions about catechism classes, communion preparation, and the church year with the reverence your congregation expects.",
      },
      {
        icon: "chat",
        title: "Chatbot for Your Congregation's Website",
        description:
          "A website chatbot that speaks Lutheran fluently. Whether visitors ask about confirmation, the Small Catechism, or when your congregation celebrates the Lord's Supper, the AI responds with theologically sound, pastorally sensitive answers.",
      },
      {
        icon: "shield",
        title: "Faithful to the Lutheran Confessions",
        description:
          "ChurchWiseAI understands the distinction between Law and Gospel, the real presence in the Sacrament, baptismal theology, and the Book of Concord. Your AI will never confuse Lutheran teaching with generic Protestant theology.",
      },
    ],
  },
  pentecostal: {
    slug: "pentecostal",
    name: "Pentecostal Churches",
    headline: "AI Ministry Tools for Pentecostal Churches",
    subheadline:
      "Built for Spirit-filled ministry. Your AI understands the energy, warmth, and spiritual vitality of the Pentecostal tradition.",
    features: [
      {
        icon: "phone",
        title: "A Voice Agent with Pentecostal Heart",
        description:
          "Your AI receptionist captures the warmth and enthusiasm of Pentecostal ministry. It handles questions about altar call services, prayer meetings, youth revivals, missions conferences, and special worship nights with genuine spiritual warmth — never cold or scripted.",
      },
      {
        icon: "chat",
        title: "Chatbot for Your Church Website",
        description:
          "A chatbot that reflects the vibrant, welcoming spirit of your church. Whether visitors ask about being filled with the Holy Spirit, midweek Bible study, or how to receive prayer, the AI responds with faith and encouragement using your church's own information.",
      },
      {
        icon: "shield",
        title: "Respecting Pentecostal Distinctives",
        description:
          "ChurchWiseAI understands Pentecostal theology — the baptism of the Holy Spirit, spiritual gifts, divine healing, and the urgency of evangelism. Your AI will never water down the Spirit-filled emphasis that defines your congregation.",
      },
    ],
  },
  catholic: {
    slug: "catholic",
    name: "Catholic Parishes",
    headline: "AI Ministry Tools for Catholic Parishes",
    subheadline:
      "Designed for the Catholic tradition. Your AI understands parish life, sacramental theology, and the liturgical rhythms of the Church year.",
    features: [
      {
        icon: "phone",
        title: "A Voice Agent for Parish Life",
        description:
          "Your AI receptionist knows Catholic parish operations — Mass schedules, confession times, RCIA inquiries, sacramental preparation, holy days of obligation, and parish festival details. It handles calls with the reverence and hospitality your parishioners expect.",
      },
      {
        icon: "chat",
        title: "Chatbot for Your Parish Website",
        description:
          "A chatbot that understands Catholic vocabulary and parish needs. Whether visitors ask about becoming Catholic, registering for a parish, scheduling a baptism, or finding confession times, the AI responds with accurate, pastoral guidance.",
      },
      {
        icon: "shield",
        title: "Faithful to Catholic Teaching",
        description:
          "ChurchWiseAI respects the Magisterium, sacramental theology, Marian devotion, and the fullness of Catholic tradition. Your parish AI will never give a response inconsistent with Church teaching or direct people away from the sacraments.",
      },
    ],
  },
  nondenominational: {
    slug: "nondenominational",
    name: "Non-Denominational Churches",
    headline: "AI Ministry Tools for Non-Denominational Churches",
    subheadline:
      "Flexible and adaptable to your church's unique identity. No denominational assumptions — just your church's beliefs and values.",
    features: [
      {
        icon: "phone",
        title: "A Voice Agent Tailored to Your Church",
        description:
          "Every non-denominational church is unique. Your AI receptionist is trained on your specific beliefs, programs, and culture — whether your church is contemporary or traditional, seeker-sensitive or expository. It handles calls about life groups, worship experiences, next steps classes, and outreach events in your church's own voice.",
      },
      {
        icon: "chat",
        title: "Chatbot That Reflects Your Identity",
        description:
          "A website chatbot with no denominational baggage. It uses the language and tone your church has chosen — whether that means 'small groups' or 'life groups,' 'worship service' or 'experience.' The AI adapts to your church's culture, not the other way around.",
      },
      {
        icon: "shield",
        title: "Your Theology, Your Way",
        description:
          "ChurchWiseAI does not impose a theological framework. It learns from your doctrinal statement, your sermon archive, and your staff's guidance to represent your church's beliefs accurately — without the assumptions that come with denominational labels.",
      },
    ],
  },
  episcopal: {
    slug: "episcopal",
    name: "Episcopal Parishes",
    headline: "AI Ministry Tools for Episcopal Parishes",
    subheadline:
      "Crafted for the Anglican tradition. Your AI understands the Book of Common Prayer, liturgical seasons, and the via media of Episcopalian life.",
    features: [
      {
        icon: "phone",
        title: "A Voice Agent for Episcopal Ministry",
        description:
          "Your AI receptionist knows Episcopal parish life — Rite I and Rite II services, Eucharistic practices, the Daily Office, vestry governance, and the rhythms of the church year from Advent through Ordinary Time. It handles questions with the measured dignity your parish expects.",
      },
      {
        icon: "chat",
        title: "Chatbot for Your Parish Website",
        description:
          "A chatbot fluent in Episcopal tradition. Whether visitors ask about the inquirers' class, children's chapel, altar guild, or how to transfer membership, the AI responds with warmth, theological depth, and accurate parish information.",
      },
      {
        icon: "shield",
        title: "Honoring the Anglican Tradition",
        description:
          "ChurchWiseAI understands the via media — the balance of Scripture, tradition, and reason. It respects the sacramental theology, liturgical worship, and inclusive spirit of the Episcopal Church while representing your specific parish's character.",
      },
    ],
  },
  reformed: {
    slug: "reformed",
    name: "Reformed Churches",
    headline: "AI Ministry Tools for Reformed Churches",
    subheadline:
      "Built on the doctrines of grace. Your AI understands covenant theology, confessional standards, and the God-centered worship of the Reformed tradition.",
    features: [
      {
        icon: "phone",
        title: "A Voice Agent for Reformed Ministry",
        description:
          "Your AI receptionist understands Reformed church life — consistory meetings, catechism preaching, covenant renewal services, and the priority of expository proclamation. It handles questions about membership vows, children's catechism, and diaconal ministry with theological precision.",
      },
      {
        icon: "chat",
        title: "Chatbot for Your Church Website",
        description:
          "A chatbot that speaks the language of the Reformed tradition. Whether inquirers ask about the doctrines of grace, covenant baptism, or how church discipline works, the AI responds with confessional fidelity and genuine pastoral care.",
      },
      {
        icon: "shield",
        title: "Confessionally Grounded",
        description:
          "ChurchWiseAI supports Reformed confessional standards — the Three Forms of Unity, the Westminster Standards, or the 1689 London Baptist Confession. Your AI represents your church's confessional commitments without compromise or confusion.",
      },
    ],
  },
  evangelical: {
    slug: "evangelical",
    name: "Evangelical Churches",
    headline: "AI Ministry Tools for Evangelical Churches",
    subheadline:
      "Focused on the Gospel. Your AI understands the evangelistic mission, biblical authority, and relational warmth that define evangelical ministry.",
    features: [
      {
        icon: "phone",
        title: "A Voice Agent for Gospel-Centered Churches",
        description:
          "Your AI receptionist reflects the evangelistic heart of your church. It handles questions about salvation, baptism, small groups, missions, and youth ministry with the personal warmth and Gospel clarity that visitors expect when they call an evangelical church.",
      },
      {
        icon: "chat",
        title: "Chatbot That Shares the Gospel",
        description:
          "A website chatbot ready to share hope. Whether visitors ask about starting a relationship with Christ, finding a Bible study, or serving in missions, the AI responds with Gospel clarity, biblical grounding, and an invitation to go deeper.",
      },
      {
        icon: "shield",
        title: "Committed to Biblical Authority",
        description:
          "ChurchWiseAI upholds the authority and sufficiency of Scripture, the centrality of the cross, the necessity of conversion, and the urgency of evangelism. Your AI will never dilute the Gospel message your church exists to proclaim.",
      },
    ],
  },
};

const iconMap = {
  phone: Phone,
  chat: MessageSquare,
  shield: Shield,
};

function getDenominationData(slug: string): DenominationData | null {
  return denominations[slug] ?? null;
}

export function generateStaticParams() {
  return Object.keys(denominations).map((denomination) => ({ denomination }));
}

export function generateMetadata({
  params,
}: {
  params: { denomination: string };
}): Metadata {
  const data = getDenominationData(params.denomination);
  if (!data) return {};
  return {
    title: `AI for ${data.name}`,
    description: `AI-powered ministry tools built for ${data.name}. Voice agent, chatbot, and digital tools that respect your theological tradition.`,
  };
}

export default function DenominationPage({
  params,
}: {
  params: { denomination: string };
}) {
  const data = getDenominationData(params.denomination);
  if (!data) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 to-stone-800 pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(212,175,55,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {data.headline}
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-stone-300 leading-relaxed mb-8">
            {data.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/pricing"
              className="btn-gold w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-semibold inline-flex items-center justify-center gap-2"
            >
              See Pricing
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-semibold border-2 border-white/30 text-white hover:border-white/60 transition-colors inline-flex items-center justify-center gap-2"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.features.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={feature.title}
                  className="group relative bg-white rounded-xl border border-stone-200 p-6 sm:p-8"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r from-[#D4AF37] to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-amber-600 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-stone-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="bg-stone-50 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
            Affordable AI for Every {data.name.replace(/s$/, "")}
          </h2>
          <p className="text-stone-500 text-base sm:text-lg mb-2">
            Plans start at
          </p>
          <p className="text-4xl sm:text-5xl font-bold text-[#D4AF37] mb-2">
            $29.95
            <span className="text-lg font-normal text-stone-400">/mo</span>
          </p>
          <p className="text-stone-500 text-sm mb-8">
            No per-seat pricing. No long-term contracts. Cancel anytime.
          </p>
          <Link
            href="/pricing"
            className="btn-gold px-8 py-3.5 rounded-lg text-base font-semibold inline-flex items-center justify-center gap-2"
          >
            View All Plans
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="relative bg-stone-900 rounded-2xl shadow-lg overflow-hidden px-6 py-12 sm:px-12 sm:py-16 text-center">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4AF37] via-amber-500 to-[#D4AF37]" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-5">
              Ready to Serve Your {data.name.replace(/s$/, "")} Better?
            </h2>
            <p className="text-stone-400 text-base sm:text-lg mb-8 max-w-xl mx-auto">
              See how ChurchWiseAI can transform communication at your{" "}
              {data.slug === "catholic" || data.slug === "episcopal"
                ? "parish"
                : "church"}
              . Book a free demo and we&apos;ll show you exactly how it works
              for {data.name.toLowerCase()}.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/pricing"
                className="btn-gold w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-semibold inline-flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-semibold border-2 border-white/30 text-white hover:border-white/60 transition-colors inline-flex items-center justify-center gap-2"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
