import { useEffect, useState } from "react";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Menu,
  MoveRight,
  X,
} from "lucide-react";
import {
  company,
  industries,
  legacyPages,
  products,
} from "./data";
import legacyCatalog from "./legacyCatalog.json";

const image = (file: string) => `/images/${file}`;
const imgProduct = (file: string) => `/images/products/${file}`;

function SEO({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = `${title} | OG Globe`;
    let meta = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;
    let canonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://www.ogglobe.com${window.location.pathname}`;
    let og = document.querySelector(
      'meta[property="og:title"]',
    ) as HTMLMetaElement | null;
    if (og) og.content = `${title} | OG Globe`;
  }, [title, description]);
  return null;
}

function Header() {
  const [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false),
    [drop, setDrop] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = [
    ["About", "/about"],
    ["Industries", "/industries"],
    ["Services", "/services"],
  ];
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="topline">
        <span>Industrial maintenance & inspection solutions</span>
        <div>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <a href="tel:+919004081351">+91 9004081351</a>
        </div>
      </div>
      <div className="nav-shell wrap">
        <Link to="/" className="brand" aria-label="OG Globe home">
          <img src={image("logo.png")} alt="OG Globe" />
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          className={open ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          <Link onClick={() => setOpen(false)} to="/">
            Home
          </Link>
          {links.slice(0, 1).map(([name, url]) => (
            <Link key={name} onClick={() => setOpen(false)} to={url}>
              {name}
            </Link>
          ))}
          <div
            className="nav-dropdown"
            onMouseEnter={() => setDrop(true)}
            onMouseLeave={() => setDrop(false)}
          >
            <button aria-expanded={drop} onClick={() => setDrop(!drop)}>
              Products <ChevronDown size={15} />
            </button>
            {drop && (
              <div className="dropdown-panel">
                {products.map((p) => (
                  <Link
                    key={p.href}
                    to={p.href}
                    onClick={() => {
                      setOpen(false);
                      setDrop(false);
                    }}
                  >
                    <span>{p.group}</span>
                    {p.title}
                    <ArrowUpRight size={15} />
                  </Link>
                ))}
              </div>
            )}
          </div>
          {links.slice(1).map(([name, url]) => (
            <Link key={name} onClick={() => setOpen(false)} to={url}>
              {name}
            </Link>
          ))}
          <Link
            className="nav-cta"
            onClick={() => setOpen(false)}
            to="/contact"
          >
            Talk to an expert <ArrowUpRight size={15} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-main">
        <div className="footer-brand">
          <img src={image("logo-light.png")} alt="OG Globe" />
          <p>Technology for endurance at your service.</p>
          <p>
            Supply, inspection and accuracy for demanding industrial
            maintenance.
          </p>
        </div>
        <div>
          <small>EXPLORE</small>
          <Link to="/about">About OG Globe</Link>
          <Link to="/products">Products</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/services">Service support</Link>
        </div>
        <div>
          <small>CONTACT</small>
          {company.address.map((a) => (
            <span key={a}>{a}</span>
          ))}
          {company.phones.map((p) => (
            <a key={p} href={`tel:${p.replaceAll(" ", "")}`}>
              {p}
            </a>
          ))}
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>
        <div className="footer-note">
          <span className="eyebrow">BUILT AROUND YOUR REQUIREMENTS</span>
          <h3>Practical support for complex work.</h3>
          <Link className="text-link light" to="/contact">
            Start a conversation <MoveRight size={18} />
          </Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© OG Globe</span>
        <span>Industrial products · Inspection · Service support</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

function ButtonLink({
  to,
  children,
  secondary = false,
}: {
  to: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link className={`button ${secondary ? "button-ghost" : ""}`} to={to}>
      {children}
      <ArrowUpRight size={16} />
    </Link>
  );
}
function SectionLabel({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{kicker}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Home() {
  return (
    <>
      <SEO
        title="Industrial Maintenance & Inspection Solutions"
        description="OG Globe represents globally reputed industrial technology brands and supplies maintenance, inspection and process solutions."
      />
      <main>
        <section className="hero" id="top">
          <div
            className="hero-photo"
            role="img"
            aria-label="Industrial processing facility"
          />
          <div className="hero-shade" />
          <div className="wrap hero-content">
            <span className="eyebrow light-eyebrow">
              ENGINEERED FOR THE WORK THAT MATTERS
            </span>
            <h1>
              Technology for
              <br />
              <em>endurance.</em>
            </h1>
            <p>
              Industrial maintenance and inspection solutions for the demanding
              environments that keep essential industries moving.
            </p>
            <div className="hero-actions">
              <ButtonLink to="/products">Explore our products</ButtonLink>
              <Link className="hero-secondary" to="/contact">
                Talk with our team <ArrowRight size={17} />
              </Link>
            </div>
            <div className="hero-index">
              <span>01 / 04</span>
              <span>INDUSTRIAL SOLUTIONS · MUMBAI, INDIA</span>
            </div>
          </div>
          <a
            href="#expertise"
            className="scroll-cue"
            aria-label="Scroll to explore"
          >
            <ArrowDown size={17} />
          </a>
        </section>
        <section id="expertise" className="intro-section wrap section-pad">
          <div className="intro-mark">
            <span>OG</span>
            <span>GLOBE / INDIA</span>
          </div>
          <div className="intro-copy">
            <span className="eyebrow">SUPPLY · INSPECTION · ACCURACY</span>
            <h2>
              Precision support for
              <br />
              <span>critical operations.</span>
            </h2>
            <p>
              OG Globe represents globally acclaimed hi-tech brands and brings a
              multidimensional approach to the Oil & Gas and advanced
              manufacturing industries. Our range meets maintenance demands for
              trouble-free operation.
            </p>
            <Link to="/about" className="text-link">
              Get to know OG Globe <MoveRight size={18} />
            </Link>
          </div>
          <div className="intro-side">
            <div className="side-rule" />
            <p>
              From condition monitoring to maintenance tools, instrumentation
              and flow control, we bring considered solutions closer to the
              people who rely on them.
            </p>
            <span className="micro">A PARTNER FOR INDUSTRIAL PERFORMANCE</span>
          </div>
        </section>
        <section className="products-section">
          <div className="wrap section-pad">
            <div className="section-row">
              <SectionLabel
                kicker="WHAT WE SUPPLY"
                title="Built around your maintenance needs."
                text="Explore product areas represented by OG Globe, selected for demanding working environments."
              />
              <Link className="text-link section-all" to="/products">
                View all product areas <MoveRight size={18} />
              </Link>
            </div>
            <div className="product-grid">
              {products.map((p, i) => (
                <Link
                  className={`product-card p-card-${i}`}
                  key={p.href}
                  to={p.href}
                >
                  <div className="product-image">
                    <img loading="lazy" src={imgProduct(p.image)} alt="" />
                    <span className="card-number">0{i + 1}</span>
                    <span className="card-arrow">
                      <ArrowUpRight />
                    </span>
                  </div>
                  <div className="product-meta">
                    <span>{p.group}</span>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="feature-band">
          <div className="feature-image">
            <img
              loading="lazy"
              src={imgProduct("Industrial-Hydraulic-Pullers.jpg")}
              alt="Industrial hydraulic puller"
            />
          </div>
          <div className="feature-copy">
            <span className="eyebrow">MAINTENANCE, MADE PRECISE</span>
            <h2>
              The right tool
              <br />
              for the toughest
              <br />
              <em>connections.</em>
            </h2>
            <p>
              OG Globe supplies hydraulic and pneumatic tools, pullers, torque
              wrenches and special application tools for varied working
              environments.
            </p>
            <ButtonLink to="/products/maintenance" >
              Explore maintenance tools
            </ButtonLink>
            <span className="feature-caption">MAINTENANCE PRODUCTS / 01</span>
          </div>
        </section>
        <section className="industry-section">
          <div className="wrap section-pad">
            <div className="section-row">
              <SectionLabel
                kicker="INDUSTRIES WE SERVE"
                title="Across the systems that power progress."
                text="Products support customers across a broad range of industries and applications."
              />
              <Link className="text-link section-all" to="/industries">
                Explore industries <MoveRight size={18} />
              </Link>
            </div>
            <div className="industry-layout">
              <div className="industry-photo">
                <img
                  loading="lazy"
                  src={image("slide-2.jpg")}
                  alt="Industrial process facility"
                />
                <span>INDUSTRIAL APPLICATIONS</span>
              </div>
              <div className="industry-list">
                {industries.slice(0, 10).map((item, i) => (
                  <Link to="/industries" key={item}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {item}
                    <ArrowUpRight size={16} />
                  </Link>
                ))}
                <Link className="industry-more" to="/industries">
                  + and many more industries
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="service-feature">
          <div className="wrap service-grid">
            <div>
              <span className="eyebrow light-eyebrow">
                SUPPORT BEYOND SUPPLY
              </span>
              <h2>
                Service that stays
                <br />
                close to the work.
              </h2>
            </div>
            <div className="service-content">
              <p>
                Our full-fledged Authorized Service Centre in Mumbai supports
                products represented and sold by OG Globe. Most systems can be
                repaired and calibrated in India.
              </p>
              <div className="service-points">
                <span>
                  <Check size={16} /> After-sales service & back-up
                </span>
                <span>
                  <Check size={16} /> Repair and calibration support
                </span>
                <span>
                  <Check size={16} /> Customer partnership
                </span>
              </div>
              <Link className="text-link light" to="/services">
                Discover our service approach <MoveRight size={18} />
              </Link>
            </div>
            <div className="service-stamp">
              <span>OG</span>
              <small>
                FIELD SUPPORT
                <br />
                MUMBAI, INDIA
              </small>
            </div>
          </div>
        </section>
        <section className="about-preview wrap section-pad">
          <div className="founder-image">
            <img
              loading="lazy"
              src={image("saif.png")}
              alt="Mohamed Saif, Co-Founder of OG Globe"
            />
            <span>PEOPLE BEHIND OG GLOBE</span>
          </div>
          <div className="about-preview-copy">
            <span className="eyebrow">A COMPANY BUILT ON EXPERIENCE</span>
            <h2>
              Partnership is
              <br />
              part of the solution.
            </h2>
            <p>
              We work closely with customers as partners to achieve common goals
              for long-term mutual benefit. Meet the people and philosophy
              behind OG Globe.
            </p>
            <ButtonLink to="/about" secondary>
              Learn about OG Globe
            </ButtonLink>
            <span className="preview-name">
              MOHAMED SAIF <i>· CO-FOUNDER</i>
            </span>
          </div>
        </section>
        <ContactCTA />
      </main>
    </>
  );
}

function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="wrap cta-inner">
        <div>
          <span className="eyebrow light-eyebrow">
            LET'S MOVE YOUR WORK FORWARD
          </span>
          <h2>
            Let’s discuss your
            <br />
            <em>industrial requirement.</em>
          </h2>
        </div>
        <div>
          <p>
            Connect with our team to discuss products, inspection or service
            support.
          </p>
          <ButtonLink to="/contact">Contact OG Globe</ButtonLink>
          <span className="cta-direct">
            {company.phones[0]} <span>·</span> {company.email}
          </span>
        </div>
      </div>
    </section>
  );
}

function PageIntro({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <section className="page-intro">
      <div className="wrap">
        <span className="eyebrow">{kicker}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="page-rule">
          <span>OG GLOBE</span>
          <span>INDUSTRIAL SOLUTIONS / INDIA</span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <>
      <SEO
        title="About OG Globe"
        description="Learn about OG Globe's industrial solutions, authorized service support and co-founders."
      />
      <main>
        <PageIntro
          kicker="ABOUT OG GLOBE"
          title={
            <>
              Supply, inspection
              <br />
              and accuracy.
            </>
          }
          description="Known for maintenance and inspection solutions for tomorrow’s high-technology, demanding industries."
        />
        <section className="about-body wrap section-pad">
          <div className="about-image">
            <img
              src={image("banner-page.jpg")}
              alt="OG Globe industrial solutions"
            />
            <span>OG GLOBE · INDIA</span>
          </div>
          <div>
            <span className="eyebrow">WHO WE ARE</span>
            <h2>Solutions for trouble-free operations.</h2>
            <p>
              OG Globe is known for supply, inspection and accuracy in the
              maintenance field. We offer a range of products to meet
              maintenance personnel demands and support trouble-free operation
              in high-end industries.
            </p>
            <p>
              We serve Oil & Gas, Pharma, Food Processing, Fertilizer,
              Petrochemical, Refinery, Telecom, Power, Cement, Sugar, Paper,
              Beverages, Steel Plants, Packing Industries, Automobile
              Industries, Auto Ancillary Units, component manufacturing units,
              Aerospace, Nuclear and Research & Development departments of
              Defense Institutes, among others.
            </p>
            <p>
              Our product range is sourced from worldwide reputed manufacturers.
            </p>
          </div>
        </section>
        <section className="about-catalog">
          <div className="wrap section-pad">
            <SectionLabel
              kicker="PRODUCT AREAS"
              title="A broad range, connected by purpose."
              text="Products include:"
            />
            <div className="catalog-list">
              {products.map((p, i) => (
                <Link to={p.href} key={p.href}>
                  <span>0{i + 1}</span>
                  <b>{p.title}</b>
                  <small>{p.description}</small>
                  <ArrowUpRight />
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="about-service wrap section-pad">
          <div>
            <span className="eyebrow">SERVICE CAPABILITY</span>
            <h2>
              Local support.
              <br />
              Long-term partnership.
            </h2>
          </div>
          <div>
            <p>
              Our full-fledged Authorized Service Centre is located in Mumbai
              and provides after-sales service and back-up for products
              represented and sold by us. Most systems can be repaired and
              calibrated in India.
            </p>
            <p>
              We strive to meet rising industry expectations through persistent
              effort and sincerity. We work closely with customers as partners
              to achieve common goals for long-term mutual benefit.
            </p>
          </div>
        </section>
        <section className="founders-section">
          <div className="wrap section-pad">
            <SectionLabel
              kicker="THE PEOPLE BEHIND OG GLOBE"
              title="Experience grounded in industry."
              text="Co-founders Mohamed Saif and Hirok Bhuyan bring engineering, sales and business development experience to OG Globe."
            />
            <div className="founder-grid">
              <Founder
                name="Mohamed Saif"
                imageFile="saif.png"
                role="Co-Founder of OG Globe"
                body={
                  <>
                    Worked in the engineering field for the past 20 years in
                    Middle East countries on the mechanical side. Experienced in
                    handling different challenging project works, with expertise
                    in marketing and sales, developing new areas of business,
                    and handling after-sales services. Founder of Safe
                    Engineering Services, a company which imports spares for
                    main engines for ships and other related spare parts for the
                    marine industries.
                  </>
                }
              />
              <Founder
                name="Hirok Bhuyan"
                imageFile="bhuyan.png"
                role="Co-Founder of OG Globe"
                body={
                  <>
                    Bachelor of Engineering (Mechanical) and MBA (Marketing &
                    Finance), with more than 15 years of experience in
                    Industrial Sales Engineering, Client Relationship Management
                    and Business Development. Founder of B & B Chemcorp, which
                    provides industrial maintenance solutions to leading PSUs in
                    India for Oil & Gas, Petrochemicals, Defence, Fertilizer,
                    Steel and Power segments. Its customers include IOCL, Indian
                    Navy, ONGC, HPCL, Oil India and BPCL. He also held
                    leadership positions in global companies such as Emerson,
                    Danfoss and General Electric in various capacities.
                  </>
                }
              />
            </div>
          </div>
        </section>
        <ContactCTA />
      </main>
    </>
  );
}
function Founder({
  name,
  imageFile,
  role,
  body,
}: {
  name: string;
  imageFile: string;
  role: string;
  body: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="founder-card">
      <div className="founder-card-image">
        <img loading="lazy" src={image(imageFile)} alt={name} />
        <span>{role}</span>
      </div>
      <div className="founder-card-copy">
        <span className="eyebrow">CO-FOUNDER</span>
        <h3>{name}</h3>
        <p className={expanded ? "" : "clamp"}>
          {body}
          {name === "Hirok Bhuyan" && (
            <>
              {" "}
              His company also provides end-to-end laboratory solutions for
              educational institutions and R&D facilities. His vision is to make
              India a hub for world-class laboratories that encourage creative
              ideas in young minds.
            </>
          )}
        </p>
        <button className="text-link" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Read less" : "Read full profile"} <ArrowDown size={15} />
        </button>
      </div>
    </article>
  );
}

function IndustriesPage() {
  return (
    <>
      <SEO
        title="Industries"
        description="OG Globe serves customers across industrial, process, infrastructure, manufacturing and research sectors."
      />
      <main>
        <PageIntro
          kicker="INDUSTRIES & APPLICATIONS"
          title={
            <>
              Solutions across
              <br />
              essential industries.
            </>
          }
          description="OG Globe offers products that meet customer requirements across a diverse range of industries."
        />
        <section className="wrap section-pad industries-page">
          <div className="industries-hero-img">
            <img src={image("slide-3.jpg")} alt="Industrial process plant" />
          </div>
          <div className="industry-tags">
            {industries.map((x, i) => (
              <div key={x}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <b>{x}</b>
                <ArrowUpRight size={16} />
              </div>
            ))}
          </div>
          <p className="industry-note">
            The existing company profile also serves “many more” industries and
            applications.
          </p>
        </section>
        <ContactCTA />
      </main>
    </>
  );
}

function Services() {
  return (
    <>
      <SEO
        title="Service & Support"
        description="OG Globe's Mumbai authorized service centre supports after-sales service, repair and calibration."
      />
      <main>
        <PageIntro
          kicker="SERVICE & SUPPORT"
          title={
            <>
              Support that keeps
              <br />
              systems working.
            </>
          }
          description="After-sales service and product support for products represented and sold by OG Globe."
        />
        <section className="wrap section-pad service-page">
          <div className="service-photo">
            <img
              src={imgProduct("WirelessDataTransfer.jpg")}
              alt="Industrial measurement equipment"
            />
          </div>
          <div>
            <span className="eyebrow">AUTHORIZED SERVICE CENTRE · MUMBAI</span>
            <h2>Product support, close to home.</h2>
            <p>
              OG Globe’s full-fledged Authorized Service Centre in Mumbai
              provides after-sales service and back-up for products represented
              and sold by the company.
            </p>
            <p>
              Most systems can be repaired and calibrated in India. Contact the
              team to discuss support for a product or system.
            </p>
            <div className="service-points dark">
              <span>
                <Check size={16} /> After-sales service and back-up
              </span>
              <span>
                <Check size={16} /> Repair support in India for most systems
              </span>
              <span>
                <Check size={16} /> Calibration support in India for most
                systems
              </span>
            </div>
            <ButtonLink to="/contact">Discuss service support</ButtonLink>
          </div>
        </section>
        <ContactCTA />
      </main>
    </>
  );
}

function ProductsPage() {
  return (
    <>
      <SEO
        title="Products"
        description="Explore OG Globe product areas: condition monitoring, maintenance tools, inspection, valves, vacuum cleaners and UHP fittings."
      />
      <main>
        <PageIntro
          kicker="PRODUCTS & SOLUTIONS"
          title={
            <>
              Tools and technology
              <br />
              for demanding work.
            </>
          }
          description="A range of products to meet maintenance and inspection needs across high-end industries."
        />
        <section className="wrap section-pad product-listing">
          <div className="product-grid">
            {products.map((p, i) => (
              <Link
                className={`product-card p-card-${i}`}
                key={p.href}
                to={p.href}
              >
                <div className="product-image">
                  <img loading="lazy" src={imgProduct(p.image)} alt="" />
                  <span className="card-number">0{i + 1}</span>
                  <span className="card-arrow">
                    <ArrowUpRight />
                  </span>
                </div>
                <div className="product-meta">
                  <span>{p.group}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="more-products">
            <span className="eyebrow">ORIGINAL CATALOGUE</span>
            <h3>Browse every listed product</h3>
            <p>Product entries, available descriptions and imagery are carried over from the local OG Globe catalogue.</p>
            <div className="legacy-product-grid">
              {legacyCatalog.map((item) => (
                <Link className="legacy-product-card" to={`/products/${item.slug}`} key={item.slug}>
                  <div className="legacy-product-thumb">
                    {item.gallery[0] && <img loading="lazy" src={image(item.gallery[0].src)} alt={item.gallery[0].alt || item.name} />}
                    <ArrowUpRight size={16} />
                  </div>
                  <span>{item.group}</span>
                  <b>{item.name}</b>
                  <small>{item.gallery.length} catalogue images</small>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <ContactCTA />
      </main>
    </>
  );
}

function ProductDetail() {
  const { slug = "" } = useParams();
  const product = products.find((p) => p.href.endsWith(slug)) || null;
  const sourceSlug: Record<string, string> = {
    "condition-monitoring": "condition-monitoring-products",
    "vacuum-cleaner": "vacuum-cleaner-catalogue",
    "uhp-pipes-fittings-valves": "uhp-pipes-fittings-valves",
    instrumentation: "instrumentation-products",
    "industrial-borescopes": "condition-monitoring-products",
  };
  const source = legacyCatalog.find((item) => item.slug === (sourceSlug[slug] || slug));
  const name = source?.name || product?.title || slug.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const description = source?.description || product?.description || "Contact OG Globe for information about this product area.";
  const gallery = source?.gallery || (product ? [{ src: `products/${product.image}`, alt: product.title }] : []);
  return (
    <>
      <SEO title={name} description={description} />
      <main>
        <PageIntro
          kicker="PRODUCTS / OG GLOBE"
          title={name}
          description={description}
        />
        <section className="wrap section-pad detail-layout">
          <div className="detail-image">
            {gallery[0] && <img src={image(gallery[0].src)} alt={gallery[0].alt || name} />}
          </div>
          <div>
            <span className="eyebrow">{source?.group || "PRODUCT INFORMATION"}</span>
            <h2>{name}</h2>
            <p>{description}</p>
            <ButtonLink to="/contact">Enquire about this product</ButtonLink>
          </div>
        </section>
        {source?.details.length ? <section className="wrap source-details">
          <SectionLabel kicker="FROM THE ORIGINAL CATALOGUE" title="Product information" />
          <div className="source-detail-list">{source.details.map((detail, index) => <p key={`${index}-${detail.text}`} className={detail.kind === "prod-title" ? "source-detail-title" : ""}>{detail.text}</p>)}</div>
        </section> : null}
        {gallery.length > 1 ? <section className="wrap source-gallery">
          <SectionLabel kicker="PRODUCT IMAGES" title="Catalogue gallery" text={`${gallery.length} images from the original OG Globe product page.`} />
          <div className="source-gallery-grid">{gallery.map((item, index) => <figure key={`${item.src}-${index}`}><img loading="lazy" src={image(item.src)} alt={item.alt || `${name} product view ${index + 1}`} /><figcaption>{item.alt || `${name} · ${index + 1}`}</figcaption></figure>)}</div>
        </section> : null}
        <section className="related-products wrap">
          <SectionLabel
            kicker="MORE FROM OG GLOBE"
            title="Related product areas"
          />
          <div>
            {products
              .filter((p) => p.title !== name)
              .slice(0, 3)
              .map((p) => (
                <Link to={p.href} key={p.href}>
                  {p.title}
                  <ArrowUpRight size={16} />
                </Link>
              ))}
          </div>
        </section>
        <ContactCTA />
      </main>
    </>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <SEO
        title="Contact OG Globe"
        description="Contact OG Globe in Vikhroli, Mumbai for industrial products, service and support."
      />
      <main>
        <PageIntro
          kicker="CONTACT OG GLOBE"
          title={
            <>
              Let’s discuss what
              <br />
              your operation needs.
            </>
          }
          description="Speak with our team about products, inspection, maintenance or service support."
        />
        <section className="wrap section-pad contact-layout">
          <div className="contact-info">
            <span className="eyebrow">REACH OUR TEAM</span>
            <h2>We’re here to help you move forward.</h2>
            <div className="contact-block">
              <small>VISIT</small>
              {company.address.map((a) => (
                <span key={a}>{a}</span>
              ))}
            </div>
            <div className="contact-block">
              <small>CALL</small>
              {company.phones.map((p) => (
                <a key={p} href={`tel:${p.replaceAll(" ", "")}`}>
                  {p}
                </a>
              ))}
            </div>
            <div className="contact-block">
              <small>EMAIL</small>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
            <p className="micro">
              BUSINESS HOURS ARE NOT LISTED ON THE CURRENT WEBSITE.
            </p>
          </div>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <span className="eyebrow">SEND AN ENQUIRY</span>
            <h2>Tell us a little about it.</h2>
            <div className="form-grid">
              <label>
                Full name
                <input name="name" required autoComplete="name" />
              </label>
              <label>
                Phone number
                <input name="phone" type="tel" required autoComplete="tel" />
              </label>
              <label>
                Email address
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </label>
              <label>
                Company
                <input name="company" autoComplete="organization" />
              </label>
              <label className="full">
                Message
                <textarea name="message" rows={5} required />
              </label>
            </div>
            <button className="button" type="submit">
              Send enquiry <ArrowUpRight size={16} />
            </button>
            {sent && (
              <p className="form-status" role="status">
                Your details are ready, but this website is not connected to an
                enquiry service yet. Please email {company.email} to send your
                enquiry.
              </p>
            )}
            <p className="form-note">
              This form currently validates in your browser only. Backend
              delivery needs to be connected.
            </p>
          </form>
        </section>
        <ContactCTA />
      </main>
    </>
  );
}

function App() {
  const location = useLocation();
  let legacy: string | undefined = legacyPages[location.pathname];
  if (!legacy && location.pathname.endsWith(".html")) {
    const oldSlug = location.pathname
      .split("/")
      .pop()
      ?.replace(/\.html$/, "")
      .toLowerCase();
    legacy =
      oldSlug === "index" ? "/" : oldSlug ? `/products/${oldSlug}` : undefined;
  }
  if (legacy) return <Navigate to={legacy} replace />;
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
