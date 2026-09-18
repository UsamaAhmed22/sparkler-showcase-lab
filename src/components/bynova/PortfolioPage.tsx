import { useSuspenseQuery } from "@tanstack/react-query";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  Bot,
  Braces,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  ExternalLink,
  HeartPulse,
  Instagram,
  Linkedin,
  Menu,
  Megaphone,
  Palette,
  Play,
  Rocket,
  Server,
  Smartphone,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";
import logoAsset from "@/assets/bynova-logo.png.asset.json";
import wordmark from "@/assets/bynova-wordmark.png";
import heroImage from "@/assets/bynova-hero.jpg";
import projectsImage from "@/assets/bynova-projects.jpg";
import moonImage from "@/assets/bynova-moon.jpg";
import { portfolioQueryOptions } from "@/lib/portfolio";
import { closeMobileMenu, setActiveProject, toggleMobileMenu } from "@/store/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const nav = ["Home", "Services", "Portfolio", "About", "Contact"];

const services = [
  [Code2, "Website Development", "Modern, fast and responsive websites tailored to your brand."],
  [Smartphone, "Mobile App Development", "Custom Android & iOS apps for your business or idea."],
  [Braces, "Frontend Development", "Clean UI, powerful UX, seamless performance."],
  [Server, "Backend Development", "Scalable, secure and high-performance APIs."],
  [Cloud, "Deployment & DevOps", "CI/CD, cloud setup, monitoring and automation."],
  [Palette, "UI/UX Design", "Beautiful, user-focused designs that drive engagement."],
  [Sparkles, "Branding & Logo Design", "Unique identities that make an impact."],
  [Megaphone, "Social Media Management", "Engage, grow and build your brand."],
  [HeartPulse, "Health Tech Solutions", "Digital health platforms and wellness solutions."],
] as const;

const benefits = [
  [Users, "Experienced Team", "Skilled, creative and passionate about tech."],
  [Check, "Flexible & Transparent", "Clear communication, no hidden costs."],
  [Bot, "Modern Technologies", "Latest tools for better performance."],
  [HeartPulse, "Client Satisfaction", "Your feedback drives our growth."],
  [Blocks, "Scalable Solutions", "Built for today, ready for tomorrow."],
  [Sparkles, "Affordable Pricing", "Top quality, fair rates, no compromises."],
] as const;

const testimonials = [
  ["Ahmed Raza", "Founder, HealthMind", "BYNOVA delivered our website ahead of schedule and exceeded our expectations. The team is professional, responsive and truly understands our vision."],
  ["Sarah Khan", "CEO, BloomTech", "The best part about working with BYNOVA is their attention to detail and clear communication. They turned our idea into a smooth and scalable product."],
  ["Omer Ali", "Marketing Lead, FitLife", "I highly recommend them. Their design and development skills helped us build a strong brand identity and grow our social media presence."],
] as const;

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" aria-label="BYNOVA home" className="group flex items-center overflow-hidden">
      <img src={wordmark} width={410} height={60} alt="BYNOVA" className="h-auto w-36 object-contain" />
      {!compact && <span className="sr-only">Your vision. Our tech.</span>}
    </a>
  );
}

function Header() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.ui.mobileMenuOpen);
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="site-shell flex h-20 items-center justify-between">
        <Brand />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {nav.map((item, index) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`nav-link ${index === 0 ? "is-active" : ""}`}>{item}</a>
          ))}
        </nav>
        <Button variant="glow" size="sm" className="hidden md:inline-flex" asChild><a href="#contact">Let's Talk <ArrowRight /></a></Button>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => dispatch(toggleMobileMenu())}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="site-shell flex flex-col border-y border-border bg-background/95 py-4 backdrop-blur md:hidden" aria-label="Mobile navigation">
          {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => dispatch(closeMobileMenu())} className="py-3 text-sm text-muted-foreground">{item}</a>)}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero relative min-h-[720px] overflow-hidden border-b border-border md:min-h-[760px]">
      <img src={heroImage} width={1600} height={900} className="absolute inset-0 h-full w-full object-cover object-center" alt="Laptop and phone overlooking a mountain landscape at blue hour" />
      <div className="hero-shade absolute inset-0" />
      <Header />
      <div className="site-shell relative z-10 flex min-h-[720px] items-end pb-16 pt-32 md:min-h-[760px] md:items-center md:pb-8">
        <div className="max-w-[600px]">
          <p className="eyebrow">Ideas × Technology × Design</p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.04] md:text-7xl">Build What’s Next.<br /><span className="gradient-text">Together.</span></h1>
          <p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground md:text-base">BYNOVA is a modern digital agency helping businesses build stunning websites, powerful apps, and scalable solutions. We combine technology, creativity and strategy to bring your ideas to life — and take them further.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="glow" size="lg" asChild><a href="#contact">Start Your Project <ArrowRight /></a></Button>
            <Button variant="glass" size="lg" asChild><a href="#portfolio"><Play /> View Our Work</a></Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs text-muted-foreground">
            {["On-Time Delivery", "Clean & Scalable Code", "Client-Centric Approach"].map((item) => <span key={item} className="flex items-center gap-2"><Check className="size-3 text-brand-cyan" />{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: ReactNode; copy?: string }) {
  return <div><p className="eyebrow">{eyebrow}</p><h2 className="mt-2 font-display text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>{copy && <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">{copy}</p>}</div>;
}

function Services() {
  return (
    <section id="services" className="section-band py-20">
      <div className="site-shell">
        <div className="mb-9 grid gap-5 md:grid-cols-2 md:items-end"><SectionHeading eyebrow="Our Services" title={<>Everything You Need<br />Under One Roof</>} /><p className="max-w-md justify-self-end text-sm leading-6 text-muted-foreground">From concept to launch and beyond — we offer end-to-end digital solutions to help your business grow, stand out and stay ahead.</p></div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {services.map(([Icon, title, copy], index) => <article key={title} className={`service-card ${index >= 4 ? "lg:col-span-1" : ""}`}><span className={`icon-tile tone-${index % 5}`}><Icon /></span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const { data } = useSuspenseQuery(portfolioQueryOptions());
  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.ui.activeProject);
  return (
    <section id="portfolio" className="portfolio-band border-y border-border py-20">
      <div className="site-shell">
        <div className="mb-8 flex items-end justify-between"><SectionHeading eyebrow="Featured Work" title="Some Of Our Recent Projects" copy="Real solutions. Real businesses. Real results." /><a href="#contact" className="hidden items-center gap-1 text-xs text-brand-cyan sm:flex">View All Projects <ArrowRight className="size-3" /></a></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {data.map((project, index) => (
            <article key={project.title} className={`project-card ${active === index ? "is-selected" : ""}`} onMouseEnter={() => dispatch(setActiveProject(index))}>
              <div className="relative aspect-[1.45] overflow-hidden"><img src={projectsImage} width={1200} height={800} loading="lazy" alt="Dark product interfaces for BYNOVA portfolio projects" className={`h-full w-[240%] max-w-none object-cover ${project.crop}`} /><Button variant="glass" size="icon" className="absolute bottom-2 right-2 size-8" aria-label={`Open ${project.title}`}><ExternalLink /></Button></div>
              <div className="px-1 pb-1 pt-4"><h3 className="text-sm font-semibold">{project.title}</h3><p className="mt-1 text-[11px] text-muted-foreground">{project.category} <span className="mx-1 text-border">|</span> {project.discipline}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [["01", "Discover & Plan", "We understand your goals, needs and vision."], ["02", "Design & Develop", "We build, test and refine with your feedback."], ["03", "Deploy & Launch", "We launch your solution securely and smoothly."], ["04", "Support & Grow", "We’re here for updates, maintenance and more."]] as const;
  return <section className="process-band border-b border-border py-16"><div className="site-shell grid gap-10 lg:grid-cols-[.85fr_2.4fr]"><div><SectionHeading eyebrow="Our Process" title={<>Simple Process,<br />Powerful Results</>} copy="We keep things clear, collaborative and focused on your goals." /><Button variant="glow" size="sm" className="mt-6" asChild><a href="#contact">How It Works <ArrowRight /></a></Button></div><div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([num, title, copy], i) => <div key={num} className="relative"><div className="mb-5 flex items-center gap-4"><span className="step-icon">{i === 0 ? <Users /> : i === 1 ? <Code2 /> : i === 2 ? <Rocket /> : <BarChart3 />}</span><span className="text-xs font-semibold text-brand-violet">{num}</span>{i < 3 && <ChevronRight className="absolute -right-4 hidden size-4 text-brand-violet lg:block" />}</div><h3 className="text-sm font-semibold">{title}</h3><p className="mt-2 text-xs leading-5 text-muted-foreground">{copy}</p></div>)}</div></div></section>;
}

function About() {
  return <section id="about" className="py-20"><div className="site-shell grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:items-center"><div className="grid gap-8 sm:grid-cols-[180px_1fr]"><img src={moonImage} width={1000} height={1000} loading="lazy" className="aspect-square w-full rounded-full object-cover shadow-orbit" alt="Violet moon rising over a futuristic mountain landscape" /><div><SectionHeading eyebrow="Why Choose BYNOVA" title={<>More Than a Service.<br />A Long-Term Partner.</>} copy="We don’t just build projects — we build relationships. Your success is our success, and we’re committed to delivering quality, creativity and results, every time." /><Button variant="glass" size="sm" className="mt-5" asChild><a href="#contact">About Us <ArrowRight /></a></Button></div></div><div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">{benefits.map(([Icon, title, copy]) => <div key={title} className="flex gap-3"><span className="mini-icon"><Icon /></span><div><h3 className="text-xs font-semibold">{title}</h3><p className="mt-1 text-[11px] leading-4 text-muted-foreground">{copy}</p></div></div>)}</div></div></section>;
}

function Testimonials() {
  return <section className="border-y border-border py-14"><div className="site-shell grid gap-8 lg:grid-cols-[.8fr_2.5fr]"><SectionHeading eyebrow="What Clients Say" title={<>Trusted by Businesses<br />Around the World</>} /><div className="grid gap-3 md:grid-cols-3">{testimonials.map(([name, role, quote]) => <article key={name} className="quote-card"><p className="text-xs leading-5 text-muted-foreground">“{quote}”</p><div className="mt-5 flex items-center gap-3"><span className="grid size-8 place-items-center rounded-full bg-accent font-display text-xs font-bold text-accent-foreground">{name.split(" ").map((n) => n[0]).join("")}</span><div><h3 className="text-xs font-semibold">{name}</h3><p className="text-[10px] text-muted-foreground">{role}</p></div></div></article>)}</div></div></section>;
}

function Footer() {
  return <><section id="contact" className="cta-band relative overflow-hidden py-14"><div className="site-shell relative z-10 grid items-center gap-6 md:grid-cols-[1.4fr_1fr_auto]"><SectionHeading eyebrow="Ready To Start?" title={<>Let’s Build Something<br />Great Together.</>} /><p className="max-w-sm text-xs leading-5 text-foreground/70">Have a project in mind? Let’s discuss how we can bring it to life — from idea to impact.</p><Button variant="glow" size="lg" asChild><a href="mailto:hello@bynova.dev">Get Started <ArrowRight /></a></Button></div></section><footer className="py-9"><div className="site-shell flex flex-col items-center justify-between gap-7 md:flex-row"><Brand compact /><nav className="flex flex-wrap justify-center gap-6">{nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] text-muted-foreground hover:text-foreground">{item}</a>)}</nav><div className="flex items-center gap-4 text-muted-foreground"><Linkedin className="size-4" /><span className="font-bold">X</span><Instagram className="size-4" /><span className="ml-3 text-[10px]">© 2026 BYNOVA</span></div></div><img src={logoAsset.url} alt="" className="sr-only" /></footer></>;
}

export function PortfolioPage() {
  return <main className="min-h-screen overflow-hidden bg-background text-foreground"><Hero /><Services /><Portfolio /><Process /><About /><Testimonials /><Footer /></main>;
}