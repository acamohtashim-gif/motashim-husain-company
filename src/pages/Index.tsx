import { motion } from "motion/react";
import {
  ArrowUpRight,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  Globe2,
  Landmark,
  Link2,
  Mail,
  MapPin,
  PieChart,
  ReceiptText,
  Settings2,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Section from "./_components/section.tsx";
import SiteFooter from "./_components/site-footer.tsx";
import SiteHeader from "./_components/site-header.tsx";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/ca-motashim-badshah-580121120/";

const PORTRAIT_URL = "/portrait.jpg";

const stats = [
  { value: "13+", label: "Years across practice, banking, and industry" },
  { value: "70%", label: "Faster GST return filing" },
  { value: "60%", label: "Faster monthly close and reporting" },
  { value: "3", label: "Regions served: India, US, Middle East" },
];

const services = [
  {
    icon: ClipboardCheck,
    title: "Outsourced bookkeeping & reconciliation",
    description:
      "Backlogs brought current, every account reconciled, and a monthly close calendar that holds — run as an ongoing engagement, not a one-off filing.",
  },
  {
    icon: Building2,
    title: "Construction & project accounting",
    description:
      "Job costing, WIP schedules, and project accounting built for how contractors actually work — by site, by stage, by margin.",
  },
  {
    icon: Landmark,
    title: "Receivables & payables management",
    description:
      "Invoicing, collections follow-up, and vendor payment cycles kept current, so cash position is never a guess.",
  },
  {
    icon: Settings2,
    title: "ERP & automation (QuickBooks / NetSuite)",
    description:
      "Setup, migration, and automated workflows that take manual re-entry off your team's plate instead of adding to it.",
  },
  {
    icon: PieChart,
    title: "MIS & management reporting",
    description:
      "Monthly MIS packs built around the decisions you actually make — margin, cash runway, and budget-to-actual, not just a trial balance.",
  },
  {
    icon: Globe2,
    title: "IAS / IFRS financial reporting",
    description:
      "Financial statements prepared to international standards, ready for boards, investors, and auditors.",
  },
  {
    icon: ReceiptText,
    title: "Tax & GST audit support",
    description:
      "Income tax and GST audits for proprietors and partnerships, handled end to end. You sign; I handle the rest.",
  },
  {
    icon: TrendingUp,
    title: "Budgeting & funding readiness",
    description:
      "Budgets, forecasts, and working capital proposals built to survive bank scrutiny — written by someone who spent eight years on the lending side.",
  },
];

const whyUs = [
  {
    icon: Zap,
    title: "Automation, not more manual entry",
    description:
      "Reconciliations, GST filings, and reporting run on documented workflows in QuickBooks and NetSuite — which is how filing turnaround got cut by 70%, not by working longer hours.",
  },
  {
    icon: CalendarCheck,
    title: "A close calendar that holds",
    description:
      "Books closed on a fixed monthly rhythm, so reporting arrives before decisions are due, not weeks after.",
  },
  {
    icon: ShieldCheck,
    title: "Audit-ready by default",
    description:
      "Every account reconciled and documented, so tax and statutory audits stop being a scramble.",
  },
  {
    icon: Users,
    title: "Owner-level attention, without agency overhead",
    description:
      "Direct access to a Chartered Accountant for every engagement — not a rotating queue of junior staff, and not the layers of a large outsourcing firm.",
  },
];

const process = [
  {
    step: "01",
    title: "Diagnostic call",
    description:
      "Tell me where things stand — no prepared numbers required. We scope the clean-up and the timeline.",
  },
  {
    step: "02",
    title: "Clean-up",
    description:
      "Backlogs brought current, accounts reconciled, and the opening position agreed and documented.",
  },
  {
    step: "03",
    title: "Close calendar",
    description:
      "A fixed monthly close with clear cut-offs, so books land on the same date every month.",
  },
  {
    step: "04",
    title: "Reporting you use",
    description:
      "MIS packs and statements under IAS/IFRS, built around the decisions you actually make.",
  },
];

const experience = [
  {
    period: "2020 — Present",
    role: "Owner & Partner, Accounts & Finance",
    company: "Motashim Husain & Company",
    description:
      "Accounting, finalisation, tax and GST audits, budgeting and forecasting for business owners. Cut monthly GST filing turnaround by 70% through automation and disciplined reconciliation.",
  },
  {
    period: "2022 — 2023",
    role: "Senior Manager, Entity Controller",
    company: "Verve Advisory Pvt. Ltd",
    description:
      "Led a team serving a diverse client portfolio across India and the US. Brought monthly reporting turnaround down by 60% within two months.",
  },
  {
    period: "2017 — 2020",
    role: "Manager, Working Capital Management",
    company: "Kotak Mahindra Bank",
    description:
      "Top-3 performer for three consecutive quarters, exceeding working capital targets by an average of 130%.",
  },
  {
    period: "2016 — 2017",
    role: "Executive, Accounts & Finance (Treasury)",
    company: "Emirates Hospitals Group, Dubai",
    description:
      "Built the group fund position, revenue reporting, and bank reconciliation across six entities, holding cash reporting at 90% accuracy.",
  },
  {
    period: "2014 — 2016",
    role: "Assistant Manager, Project Accounting",
    company: "Jyoti Structures Limited, UAE",
    description:
      "Led project accounting and Record to Report for the Ministry of Electricity & Water, Kuwait.",
  },
  {
    period: "2012 — 2014",
    role: "Deputy Manager, Working Capital Management",
    company: "Axis Bank",
    description:
      "Managed a working capital portfolio covering credit renewals, compliance, and cross-sell of banking products.",
  },
];

const credentials = [
  {
    title: "Chartered Accountant",
    issuer: "The Institute of Chartered Accountants of India",
    year: "2012",
  },
  {
    title: "Dip IFR — International Financial Reporting",
    issuer: "ACCA, London",
    year: "2015",
  },
  {
    title: "Bachelor of Business Administration, Accounting",
    issuer: "University of Pune",
    year: "2008",
  },
  {
    title: "Power BI Data Modeling with DAX",
    issuer: "LinkedIn Learning",
    year: "2023",
  },
];

const tools = ["QuickBooks", "NetSuite", "IAS / IFRS", "GST", "Power BI", "Tally"];

export default function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
            >
              Chartered Accountant
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-6xl"
            >
              Precise books. Delivered on schedule, every month.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              Contractors and growing businesses outsource their books to me
              so they can stay focused on running the business, not
              reconciling it. I bring the automation and reporting discipline
              of a larger firm, minus the overhead — so the numbers are
              accurate, current, and something you actually use to decide.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm text-background transition-opacity hover:opacity-90 cursor-pointer"
              >
                Book a consultation
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm transition-colors hover:bg-foreground hover:text-background cursor-pointer"
              >
                See services
              </a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              className="mt-8 flex items-center gap-2 text-sm text-muted-foreground"
            >
              <MapPin className="size-4" />
              Serving clients across India, the US, and the Middle East
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-first md:order-none"
          >
            <img
              src={PORTRAIT_URL}
              alt="Portrait of CA Motashim Badshah"
              className="aspect-square w-40 rounded-full object-cover grayscale md:w-full md:rounded-sm"
            />
            <p className="mt-4 hidden font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:block">
              CA Motashim Badshah &middot; Founder
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stat strip */}
      <section className="border-b border-border/60 bg-secondary/40">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-serif text-4xl tracking-tight">{stat.value}</dt>
              <dd className="mt-2 text-sm leading-snug text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <main className="mx-auto max-w-6xl px-6">
        {/* About */}
        <Section
          id="about"
          eyebrow="About"
          title="Thirteen years on most sides of the numbers"
        >
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Public practice, corporate finance, treasury in Dubai, and
                project accounting for a Kuwait government contract. That range
                is the point — I have seen how books break, and I know what a
                clean set looks like when it is done right.
              </p>
              <p>
                Today I run Motashim Husain &amp; Company. My clients are
                owners who need their numbers to be accurate, timely, and
                useful — not a file that arrives three weeks late and raises
                more questions than it answers.
              </p>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Most of what makes books unreliable is process, not people —
                so every engagement is built around automation and a
                documented monthly rhythm, not manual re-entry. I work
                hands-on in QuickBooks and NetSuite, report under IAS and
                IFRS, and serve US and international clients alongside Indian
                businesses.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border px-3 py-1 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Services */}
        <Section
          id="services"
          eyebrow="Our services"
          title="What I do for clients"
          intro="Ongoing, outsourced engagements built on automation and a documented process — each one designed to leave your books in better shape than a one-off filing ever could."
          className="border-t border-border/60"
        >
          <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="bg-background p-7">
                <service.icon className="size-5 text-accent" />
                <h3 className="mt-5 font-serif text-xl tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Why us */}
        <Section
          eyebrow="Why work with me"
          title="More than another filing service"
          className="border-t border-border/60"
        >
          <div className="grid gap-10 sm:grid-cols-2">
            {whyUs.map((item) => (
              <div key={item.title} className="flex gap-4">
                <item.icon className="mt-1 size-5 shrink-0 text-accent" />
                <div>
                  <h3 className="font-serif text-xl tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Process */}
        <Section
          eyebrow="How it works"
          title="From messy books to a close you can plan around"
          className="border-t border-border/60"
        >
          <ol className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <li key={item.step} className="bg-background p-7">
                <span className="font-mono text-xs tracking-[0.25em] text-accent">
                  {item.step}
                </span>
                <h3 className="mt-4 font-serif text-xl tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Experience */}
        <Section
          id="experience"
          eyebrow="Experience"
          title="Where the experience comes from"
          className="border-t border-border/60"
        >
          <ul>
            {experience.map((item) => (
              <li
                key={item.company}
                className="border-b border-border/60 py-7 first:border-t first:border-border/60"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-serif text-2xl tracking-tight">
                    {item.role}
                  </h3>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.company}
                </p>
                <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Credentials */}
        <Section eyebrow="Credentials" title="Qualifications" className="border-t border-border/60">
          <ul className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {credentials.map((item) => (
              <li
                key={item.title}
                className="flex items-baseline justify-between gap-6 bg-background p-7"
              >
                <div>
                  <p className="font-serif text-lg tracking-tight">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.issuer}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {item.year}
                </span>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      {/* Contact */}
      <section id="contact" className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Contact
          </span>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight tracking-tight text-balance sm:text-5xl">
            Late reports and messy books are fixable. Let&apos;s start there.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Tell me where things stand — no prepared numbers required. A short
            call is usually enough to see what the clean-up involves and how
            quickly we can get you current.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="mailto:aca.mohtashim@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm text-background transition-opacity hover:opacity-90 cursor-pointer"
            >
              <Mail className="size-4" />
              Email me
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              <Link2 className="size-4" />
              LinkedIn
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4" />
              Maharashtra, India
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <SiteFooter />
      </div>
    </div>
  );
}
