import { motion } from "motion/react";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  Calculator,
  ClipboardCheck,
  Globe2,
  Landmark,
  LineChart,
  Link2,
  ListChecks,
  Mail,
  MapPin,
  NotebookText,
  PieChart,
  ReceiptText,
  Settings2,
  ShieldCheck,
  TrendingUp,
  Workflow,
} from "lucide-react";
import AnimatedStat from "./_components/animated-stat.tsx";
import BackToTop from "./_components/back-to-top.tsx";
import CustomCursor from "./_components/custom-cursor.tsx";
import DoodleUnderline from "./_components/doodle-underline.tsx";
import FilmGrain from "./_components/film-grain.tsx";
import IntroSplash from "./_components/intro-splash.tsx";
import KineticText from "./_components/kinetic-text.tsx";
import Magnetic from "./_components/magnetic.tsx";
import ScrollProgress from "./_components/scroll-progress.tsx";
import SiteFooter from "./_components/site-footer.tsx";
import SiteHeader from "./_components/site-header.tsx";
import Sparkle from "./_components/sparkle.tsx";
import Ticker from "./_components/ticker.tsx";
import ToolCard from "./_components/tool-card.tsx";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/ca-motashim-badshah-580121120/";

const PORTRAIT_URL = "/portrait.jpg";

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const tickerItems = [
  "Bookkeeping & Reconciliation",
  "Financial Modelling",
  "Finance Operations",
  "MIS & Reporting",
  "Process Design",
  "Automation",
  "Tax & GST Audit",
];

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
    icon: Workflow,
    title: "Finance operations management",
    description:
      "Day-to-day ownership of the finance function — cash flow monitoring, banking relationships, and vendor coordination — so nothing falls through the cracks between the accountant and the bank.",
  },
  {
    icon: LineChart,
    title: "Financial modelling & forecasting",
    description:
      "Revenue, cash flow, and scenario models built to support real decisions — pricing, hiring, or the next round of funding — not static spreadsheets nobody opens again.",
  },
  {
    icon: Settings2,
    title: "ERP & workflow automation (QuickBooks / NetSuite)",
    description:
      "Setup, migration, and automated workflows — from ERP configuration to Power BI dashboards — that take manual re-entry off your team's plate instead of adding to it.",
  },
  {
    icon: PieChart,
    title: "MIS & management reporting",
    description:
      "Monthly MIS packs built around the decisions you actually make — margin, cash runway, and budget-to-actual, not just a trial balance.",
  },
  {
    icon: ListChecks,
    title: "Process design & documentation",
    description:
      "Close calendars, approval workflows, and controls documented and built once — so the process holds whether or not I'm the one running it that month.",
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

const toolGroups = [
  {
    icon: Landmark,
    title: "Accounting Software",
    items: "QuickBooks · NetSuite",
  },
  {
    icon: NotebookText,
    title: "Bookkeeping",
    items: "Tally",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Reporting",
    items: "IAS / IFRS · GST",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    items: "Power BI dashboards & data modelling",
  },
  {
    icon: Calculator,
    title: "Financial Modelling",
    items: "Scenario, forecast & working-capital models",
  },
  {
    icon: Workflow,
    title: "Process & Automation",
    items: "Documented close calendars, automated workflows",
  },
];

export default function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <IntroSplash />
      <FilmGrain />
      <ScrollProgress />
      <CustomCursor />
      <SiteHeader />

      {/* Hero */}
      <section className="rd-hero">
        <div className="wrap hero-grid">
          <div className="hero-text">
            <Sparkle style={{ width: 22, height: 22, top: -34, left: 1 }} />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rd-eyebrow"
            >
              Chartered Accountant
            </motion.p>
            <KineticText as="h1" className="hero-h1">
              {"The complete "}
              <span className="mark">
                <em>finance function</em>
                <DoodleUnderline />
              </span>
              {" for growing businesses."}
            </KineticText>
            <p className="hero-lead">
              From bookkeeping and financial reporting to modelling, MIS, and
              process design, the work stays end to end and automated
              wherever it should be — so your decisions run on{" "}
              <b>numbers you can actually trust</b>.
            </p>
            <div className="hero-actions">
              <Magnetic href="#contact" className="rd-btn">
                Book a consultation
                <ArrowUpRight aria-hidden="true" size={16} />
              </Magnetic>
              <Magnetic href="#about" className="rd-btn ghost">
                Read more
              </Magnetic>
            </div>
          </div>

          <figure className="hero-photo">
            <img
              src={PORTRAIT_URL}
              alt="Portrait of CA Motashim Badshah"
              width={640}
              height={640}
              fetchPriority="high"
            />
            <span className="sheen" aria-hidden="true" />
            <div className="tagchip">
              CA <b>Motashim Badshah</b> · Founder
            </div>
          </figure>
        </div>
      </section>

      <Ticker items={tickerItems} />

      {/* About */}
      <section id="about" className="rd-sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">01</span>
            <span className="label">About</span>
            <span className="line" />
          </div>
          <div className="about-grid">
            <div>
              <p className="about-lead">
                <span className="dropcap">T</span>hirteen years across public
                practice, corporate finance, treasury in Dubai, and project
                accounting for a Kuwait government contract. That range is
                the point — I have seen how books break, and I know what a
                clean set looks like when it is done right.
              </p>
              <p className="about-body">
                Today I run Motashim Husain &amp; Company. My clients are
                owners who need their numbers to be accurate, timely, and
                useful — not a file that arrives three weeks late and raises
                more questions than it answers.
              </p>
              <p className="about-body">
                Most of what makes books unreliable is process, not people —
                so every engagement is built around automation and a
                documented monthly rhythm, not manual re-entry.
              </p>
            </div>
            <aside className="about-side">
              <dl>
                <div>
                  <dt>Role</dt>
                  <dd>Chartered Accountant</dd>
                </div>
                <div>
                  <dt>Practice</dt>
                  <dd>Motashim Husain &amp; Company</dd>
                </div>
                <div>
                  <dt>Regions</dt>
                  <dd>India · US · Middle East</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="rd-sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">02</span>
            <span className="label">Experience</span>
            <span className="line" />
            <Sparkle style={{ width: 18, height: 18, top: -13, right: 0 }} />
          </div>
          <KineticText as="h2" className="sec-title">
            {"From public practice to "}
            <span className="mark">
              <em>treasury and banking.</em>
              <DoodleUnderline />
            </span>
          </KineticText>
          <motion.div
            className="journey"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={gridVariants}
          >
            {experience.map((item, i) => (
              <motion.div className="milestone" key={item.company} variants={itemVariants}>
                <div className="when">{item.period}</div>
                <div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p>{item.description}</p>
                </div>
                <div className="idx">{String(i + 1).padStart(2, "0")}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interlude */}
      <section className="interlude">
        <div className="wrap interlude-grid">
          <figure className="interlude-media">
            <img src={PORTRAIT_URL} alt="Portrait of CA Motashim Badshah" />
            <span className="sheen" aria-hidden="true" />
          </figure>
          <div className="interlude-text">
            <div className="rd-eyebrow">How I work</div>
            <p className="big">
              Diagnose. Clean up. Close. <em>Report.</em>
            </p>
            <p className="sub">
              A fixed monthly rhythm behind steady, audit-ready books — the
              same four steps, every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="rd-sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">03</span>
            <span className="label">Services</span>
            <span className="line" />
          </div>
          <KineticText as="h2" className="sec-title">
            {"Less about filing, "}
            <span className="mark">
              <em>more about impact.</em>
              <DoodleUnderline />
            </span>
          </KineticText>
          <motion.div
            className="work-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={gridVariants}
          >
            {services.map((service, i) => (
              <motion.div className="work-cell" key={service.title} variants={itemVariants}>
                <div className="n">{String(i + 1).padStart(2, "0")}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-band" aria-label="At a glance">
        <div className="wrap">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <div className="num">
                <AnimatedStat value={stat.value} />
              </div>
              <div className="lbl">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Toolkit */}
      <section id="toolkit" className="rd-sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">04</span>
            <span className="label">Toolkit</span>
            <span className="line" />
          </div>
          <div className="toolset">
            {toolGroups.map((group) => (
              <ToolCard
                key={group.title}
                icon={group.icon}
                title={group.title}
                items={group.items}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section id="certs" className="rd-sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">05</span>
            <span className="label">Credentials</span>
            <span className="line" />
            <Sparkle style={{ width: 18, height: 18, top: -13, right: 0 }} />
          </div>
          <div className="cert-wrap">
            <div className="certs">
              {credentials.map((item, i) => (
                <div className="cert-row" key={item.title}>
                  <div>
                    <h3>{item.title}</h3>
                    <span className="issuer">{item.issuer}</span>
                  </div>
                  <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                </div>
              ))}
            </div>
            <figure className="cert-photo">
              <img src={PORTRAIT_URL} alt="Portrait of CA Motashim Badshah" />
            </figure>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="rd-contact">
        <div className="wrap">
          <div className="rd-eyebrow">06 &middot; Contact</div>
          <KineticText as="h2">
            {"Late reports and messy books are "}
            <span className="mark">
              <em>fixable.</em>
              <DoodleUnderline />
            </span>
          </KineticText>
          <p className="lead">
            Tell me where things stand — no prepared numbers required. A
            short call is usually enough to see what the clean-up involves
            and how quickly we can get you current.
          </p>
          <div className="contact-links">
            <Magnetic href="mailto:aca.mohtashim@gmail.com" className="clink">
              <Mail aria-hidden="true" size={17} />
              Email
            </Magnetic>
            <Magnetic
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="clink"
            >
              <Link2 aria-hidden="true" size={17} />
              LinkedIn
            </Magnetic>
            <span className="clink" style={{ cursor: "default" }}>
              <MapPin aria-hidden="true" size={17} />
              Maharashtra, India
            </span>
          </div>

          <svg
            className="contact-art"
            viewBox="0 0 220 180"
            fill="none"
            stroke="currentColor"
            strokeWidth={3.4}
            strokeLinejoin="round"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path
              d="M206 22 L40 92 L104 116 L122 172 L142 118 Z"
              fill="rgba(255,255,255,.06)"
            />
            <path d="M206 22 L104 116" />
            <path d="M104 116 L122 172" />
            <path
              d="M26 152 C52 152 58 120 32 114"
              strokeDasharray="1 11"
              opacity={0.6}
            />
          </svg>

          <SiteFooter />
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
