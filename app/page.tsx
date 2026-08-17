import type { ReactNode } from "react";
import { PreferenceControls } from "../components/preference-controls";

const projects = [
  { index: "01", title: "Rebuilding a crypto bank's digital platform", description: "A new mobile and web foundation designed to move faster across markets, products, and regulatory requirements.", meta: "Product vision · Platform · Delivery" },
  { index: "02", title: "Building product design from the ground up", description: "A six-person international team connecting customer insight, product direction, frontend delivery, and measurable outcomes.", meta: "Leadership · Operating model · Team" },
  { index: "03", title: "Making product delivery AI-native", description: "A controlled workflow for moving from evidence and requirements to prototypes, production patterns, and learning faster.", meta: "AI · Systems · Design engineering" },
];

const recognition = [
  {
    year: "2022",
    label: "Winner",
    title: "MetaMask × HOPR UX Hackathon",
    description: "Designed new social and privacy concepts for MetaMask at the first Web3 UX hackathon.",
    href: "https://www.linkedin.com/feed/update/urn:li:share:6976594309298978817/",
    icon: "/company-metamask.png",
  },
  {
    year: "2023",
    label: "Panelist",
    title: "Crypto, UX and user values",
    description: "Joined industry conversations on ethical, inclusive product design and better experiences in crypto.",
    href: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7082289439191785472/",
  },
  {
    year: "2015",
    label: "Hackathon",
    title: "Project Safe Haven",
    description: "Built a service connecting refugees with local aid organisations in 24 hours at TechCrunch Disrupt London.",
    href: "https://techcrunch.com/2015/12/06/safe-haven-is-a-tc-disrupt-london-hack-to-connect-refugees-with-aid-organizations/",
  },
  {
    year: "2020",
    label: "Certification",
    title: "NN/g UX Management Specialty",
    description: "Certified in UX leadership, strategy and organisational design by Nielsen Norman Group.",
    href: "https://www.linkedin.com/in/fredericberghmans/",
  },
];

const videos = [
  {
    source: "TX Markets",
    title: "Bridging the gap between design and development",
    description: "Why product quality improves when designers understand technology and engineers join the design conversation.",
    href: "https://www.youtube.com/watch?v=3j5IzyzAw9s",
    date: "Oct 2021",
  },
  {
    source: "Talk",
    title: "An introduction to cryptocurrencies and Bitcoin",
    description: "A practical introduction to Bitcoin, crypto assets and the ideas behind decentralised finance.",
    href: "https://www.youtube.com/watch?v=_23dbp19aWc",
    date: "Watch",
  },
];

const capabilities = [
  ["Product", "Strategy, roadmaps, business cases, metrics"],
  ["Design", "Teams, systems, research, interaction quality"],
  ["Technology", "Frontend, APIs, platforms, AI workflows"],
  ["Delivery", "Vendors, regulation, operations, launch"],
];

const buildStack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Cloudflare"];

function CompanyLink({ href, icon, children }: { href: string; icon: string; children: ReactNode }) {
  return (
    <a className="company-link" href={href} target="_blank" rel="noreferrer">
      <img src={icon} alt="" width="18" height="18" aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}

type ContactType = "x" | "linkedin" | "github" | "email" | "resume";

function ContactIcon({ type }: { type: ContactType }) {
  if (type === "x") return <span className="contact-icon contact-icon-x" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.27-8.31L3 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.84h1.73L8.46 4.05H6.61L17.8 19.84Z" fill="currentColor" /></svg></span>;
  if (type === "linkedin") return <span className="contact-icon contact-icon-linkedin" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5.37 7.62A2.18 2.18 0 1 0 5.36 3.25a2.18 2.18 0 0 0 .01 4.37ZM3.48 20.75h3.77V9.46H3.48v11.29ZM9.5 9.46h3.61V11h.05c.5-.95 1.73-1.95 3.56-1.95 3.81 0 4.51 2.51 4.51 5.77v5.93h-3.76V15.5c0-1.25-.02-2.87-1.75-2.87-1.75 0-2.02 1.37-2.02 2.78v5.34H9.5V9.46Z" fill="currentColor" /></svg></span>;
  if (type === "github") return <span className="contact-icon contact-icon-github" aria-hidden="true"><svg viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.91-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.99c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.35 4.8-4.58 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" fill="currentColor" clipRule="evenodd" /></svg></span>;
  if (type === "email") return <span className="contact-icon contact-icon-utility" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 6.5h16v11H4zM4.5 7l7.5 6 7.5-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg></span>;
  return <span className="contact-icon contact-icon-utility" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 3.5h7l4 4v13H7zM14 3.5v4h4M10 12h5M10 15.5h5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></span>;
}

function ContactLink({ href, type, children, label, external = false }: { href: string; type: ContactType; children?: ReactNode; label?: string; external?: boolean }) {
  return <a className={`contact-link${children ? "" : " contact-link-icon-only"}`} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} aria-label={label}><ContactIcon type={type} />{children && <span>{children}</span>}</a>;
}

export default function Home() {
  return (
    <main id="main-content" className="site-shell">
      <div id="top" className="content-column">
        <div className="floating-preferences">
          <PreferenceControls />
          <span className="craft-note craft-note-controls" aria-hidden="true"><strong>NN/g 3 · User control</strong>System first, reversible choices and optional sound that never carries meaning.</span>
        </div>
        <section className="hero" aria-labelledby="hero-title">
          <div className="profile-row">
            <div className="portrait" aria-hidden="true">
              <span className="portrait-circle"><img src="/frederic-portrait.webp" alt="" width="64" height="64" /></span>
              <img className="portrait-pop" src="/frederic-portrait.webp" alt="" width="64" height="64" />
            </div>
            <div className="identity">
              <div className="identity-name">
                <h1 id="hero-title"><a className="identity-link" href="https://x.com/freberghmans" target="_blank" rel="noreferrer"><span>Frederic Berghmans</span><img className="verified-badge" src="/twitter-verified-badge.svg" alt="" width="18" height="18" aria-hidden="true" /></a></h1>
              </div>
              <p>Product and design leader · Zurich</p>
            </div>
            <span className="craft-note craft-note-profile" aria-hidden="true"><strong>Accessible by default</strong>Semantic hierarchy, descriptive labels and visible keyboard focus.</span>
          </div>
          <div className="hero-copy">
            <p>I’m Frederic, a Belgian product and design leader based in Zurich. I work where traditional finance, digital assets and decentralised finance meet, turning complex regulatory, business and customer problems into products people want to use.</p>
            <p>
              I currently lead product design at <CompanyLink href="https://aminagroup.com/" icon="/company-amina.png">AMINA Bank</CompanyLink>, where I built the design function and lead a team of six across Europe and Asia. I move between product strategy, design, frontend, AI and delivery, and stay close enough to the work to build.
            </p>
            <p>
              Before AMINA, I led digital experience and frontend at <CompanyLink href="https://www.bitcoinsuisse.com/" icon="/company-bitcoin-suisse.png">Bitcoin Suisse</CompanyLink> and designed fintech and marketplace products at <CompanyLink href="https://tx.group/" icon="/company-tx.png">TX Markets</CompanyLink> and <CompanyLink href="https://www.advanon.com/" icon="/company-advanon.png">Advanon</CompanyLink>. Along the way, I launched native products, built design systems used across six teams, and kept finding reasons to build at hackathons.
            </p>
            <p className="contact-line">
              You can reach me on <ContactLink href="https://x.com/freberghmans" type="x" label="Frederic on X" external />, <ContactLink href="https://www.linkedin.com/in/fredericberghmans/" type="linkedin" external>LinkedIn</ContactLink>, or see what I’m building on <ContactLink href="https://github.com/fredberghmans" type="github" external>GitHub</ContactLink>. You can also send me an <ContactLink href="mailto:info@fredericberghmans.com" type="email">email</ContactLink> or view my <ContactLink href="/frederic-berghmans-resume.pdf" type="resume" external>résumé</ContactLink>.
            </p>
            <span className="craft-note craft-note-reading" aria-hidden="true"><strong>Reading, not decoration</strong>620px measure, 1.6 line height and an 8px spacing rhythm keep the story scannable.</span>
            <span className="craft-note craft-note-links" aria-hidden="true"><strong>NN/g 6 · Recognition</strong>Logos and underlines make companies recognisable without relying on colour alone.</span>
          </div>
        </section>

        <section className="section" aria-labelledby="work-title">
          <div className="section-heading"><h2 id="work-title">Selected work</h2><span>Case studies in progress</span></div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.index}>
                <span className="project-index">{project.index}</span>
                <div><h3>{project.title}</h3><p>{project.description}</p><span className="project-meta">{project.meta}</span></div>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
          <span className="craft-note craft-note-system" aria-hidden="true"><strong>NN/g 4 · Consistency</strong>Shared tokens, reusable rows and predictable states reduce relearning.</span>
        </section>

        <section className="section" aria-labelledby="recognition-title">
          <div className="section-heading"><h2 id="recognition-title">Recognition</h2><span>Selected signals and side quests</span></div>
          <div className="recognition-list">
            {recognition.map((item) => (
              <a className="recognition-item" href={item.href} target="_blank" rel="noreferrer" key={item.title}>
                <span className="recognition-year">{item.year}</span>
                <span className="recognition-label">{item.icon && <img src={item.icon} alt="" width="17" height="17" aria-hidden="true" />}{item.label}</span>
                <span className="recognition-copy"><strong>{item.title}</strong><span>{item.description}</span></span>
                <span className="row-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="videos-title">
          <div className="section-heading section-heading-line"><h2 id="videos-title">Videos of me talking</h2><span aria-hidden="true" /></div>
          <div className="video-list">
            {videos.map((video) => (
              <a className="video-item" href={video.href} target="_blank" rel="noreferrer" key={video.href}>
                <span className="video-source"><span className="play-mark" aria-hidden="true">▶</span>{video.source}</span>
                <span className="video-copy"><strong>{video.title}</strong><span>{video.description}</span></span>
                <span className="video-date">{video.date}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="range-title">
          <div className="section-heading"><h2 id="range-title">Where I operate</h2><span>Across the product system</span></div>
          <dl className="capability-list">
            {capabilities.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}
          </dl>
        </section>

        <section className="belief" aria-label="Product belief"><p>Design should own product outcomes, not only interfaces. Shipping is not success unless it creates a result we can measure.</p><span className="craft-note craft-note-motion" aria-hidden="true"><strong>Calm technology</strong>Motion uses opacity and transform. Reduced-motion preferences remove the flourish.</span></section>
        <footer className="site-footer">
          <span className="build-note-wrap">
            <button type="button" className="build-note" aria-describedby="build-tooltip">
              Built by Fred with AI <span aria-hidden="true">👀</span>
            </button>
            <span className="build-tooltip" id="build-tooltip" role="tooltip">
              <span className="build-tooltip-title">Built with</span>
              <span className="build-stack">
                {buildStack.map((technology) => (
                  <span key={technology}><span className="build-check" aria-hidden="true">✓</span>{technology}</span>
                ))}
              </span>
            </span>
          </span>
          <span>© {new Date().getFullYear()} Frederic Berghmans</span>
        </footer>
      </div>
    </main>
  );
}
