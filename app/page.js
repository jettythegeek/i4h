import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const stats = [
  ["186", "Education sites", "137 high schools · 49 community and vocational schools"],
  ["15", "Agricultural sites", "12 farmer cooperatives · 3 farmer credit unions"],
  ["10", "Healthcare Facilities", "Clinics, pharmacies, and medical training institutions"],
  ["320+", "Active ICT Centres installed", "Operating across 211 locations in Uganda"],
  ["800–2,500", "People served per site", "Serving hundreds of thousands of direct beneficiaries each year"],
  ["500+", "Qualified institutions on the waitlist", "Demand is identified; funding determines how quickly it is met"],
];

const Button = ({ href, children, tone = "dark" }) => <Link className={`button ${tone}`} href={href}>{children}<ArrowUpRight size={14} weight="bold" /></Link>;

export default function Home() {
  return <>
    <Header />
    <main id="main">
      <section className="hero">
        <Image src="/images/hero.webp" alt="An instructor leading a computer training session in an ICT Centre" fill priority className="cover" />
        <div className="hero-shade" />
        <div className="hero-inner wrap">
          <div className="hero-copy">
            <h1>Tackling Uganda’s<br />internet access and<br />digital literacy crisis</h1>
            <p>Internet for Humanity exists to ensure rural schools, farmer cooperatives, and health care facilities can access the tools, connectivity, and skills needed to thrive in a digital world. Through our “Five Computer - Information and Communications Technology” (5C-ICT) Centre co-ownership model, every centre is co-funded and community-run, ensuring they continue to serve long after we leave.</p>
          </div>
          <aside className="hero-card">
            <h2>Help fund the next<br />5C-ICT Centre</h2>
            <p><strong>CA$6,500</strong> provides one complete 5C-ICT Centre serving 800 – 2,500 direct beneficiaries</p>
            <Button href="/donate" tone="light">DONATE</Button>
          </aside>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap">
          <div className="section-lead"><h2>Impact to date</h2><p>Active centres support education, agriculture, and healthcare across 211 locations, with hundreds more institutions ready for installation.</p></div>
          <div className="stats">{stats.map(([n,t,d]) => <article className="stat" key={t}><strong>{n}</strong><h3>{t}</h3><p>{d}</p></article>)}</div>
        </div>
      </section>

      <section className="section ink white-text">
        <div className="wrap">
          <div className="section-lead wide"><h2>Closing the digital divide in underserved communities</h2><p>Internet for Humanity is an international Canadian charity that is helping to close the digital divide in underserved communities by installing affordable computer labs and delivering digital-literacy training across education, agriculture, and healthcare, so that rural youth, farmers, and health care operatives can fully participate in the digital economy.</p></div>
          <div className="issues">{[
            ["01","Education","Many students encounter a computer for the first time only days before sitting compulsory, high-stakes national examinations."],
            ["02","Livelihoods","Farmers without real-time market information remain vulnerable to monopoly buyers and unfair prices."],
            ["03","Healthcare","Paper-based medical systems delay care, consume clinicians’ time, and increase the risk of errors."],
          ].map(([n,t,d])=><article key={t}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
        </div>
      </section>

      <Split image="/images/who-we-are.webp" alt="Internet for Humanity staff and community partners with an installed ICT Centre" title="Who we are" background="sand">
        <p>Internet for Humanity is an international Canadian charity founded in 2004. Today, most of our programming is delivered in underserved communities across Uganda.</p><p>Every ICT Centre is co-funded and locally run. We work alongside schools, farmer cooperatives, and medical centres so the equipment, connectivity, and digital skills remain useful long after installation.</p><p>More than 95% of the systems installed since 2016 are still operating today.</p>
        <Link className="text-link" href="/about">Learn more about Internet for Humanity</Link>
      </Split>

      <Split image="/images/our-work.webp" alt="An instructor working with students at an Internet for Humanity ICT Centre" title="Learn about our work" background="brand" white>
        <p>Whether it is equipping schools with ICT Centres, connecting farmer cooperatives to market information, or moving rural clinics from paper files to digital records, all of our work is about enabling rural communities to leverage information and communications technologies (ICTs) to fully participate and thrive in the digital economy.</p>
        <Button href="/what-we-do" tone="light">LEARN MORE ABOUT OUR PROGRAMS</Button>
      </Split>

      <section className="section paper"><div className="wrap cost"><div><span className="eyebrow">COST PER CENTRE</span><strong>CA$6,500</strong><p>About CA$8.13 per direct user over the life of the centre.</p></div><div><h2>Funds one complete 5C-ICT Centre serving 800 or more direct users.</h2><p>A Five Computer - Information and Communications Technology Centre is co-funded and owned locally, so it keeps serving long after we leave.</p><div className="buttons"><Button href="/donate">FUND AN ICT CENTRE</Button><Button href="/partner" tone="brand">DISCUSS A PARTNERSHIP</Button></div></div></div></section>

      <section className="section hero-surface white-text"><div className="wrap impact-grid"><div><h2>Impact and accountability</h2><p>Internet for Humanity publishes annual and impact reports to share our progress, document our stewardship of donor funds, and hold ourselves accountable to the communities we serve. We are committed to transparency in all that we do.</p><Button href="/impact" tone="light">READ OUR IMPACT REPORTS</Button></div><div className="photo"><Image src="/images/accountability.webp" alt="Internet for Humanity staff with pharmacy workers at a connected dispensary counter in Uganda" fill className="cover" /></div></div></section>

      <section className="section sand stories"><div className="wrap"><div className="section-lead"><h2>Success stories</h2><p>The practical outcomes appear in classrooms, cooperative offices, and rural healthcare facilities.</p></div><div className="story-grid"><Story image="/images/students.webp" title="From First Click to Exam Success">Students moved from no computer exposure to confidently completing national computer examinations.</Story><Story image="/images/farmers.webp" title="Transforming Farmer Cooperatives">Access to market data enabled cooperatives such as Katerera Area Cooperative Enterprise (Katerera ACE) to negotiate fair prices, increase incomes, and strengthen governance.</Story></div><Link className="text-link" href="/success-stories">Read all success stories</Link></div></section>

      <section className="section brand white-text closing"><div className="wrap section-lead"><h2>More than 500 inspected &amp; verified schools currently await I4H assistance.</h2><div><p>Your donation to Internet for Humanity helps the next rural school, farmer cooperative, or medical centre get connected.</p><div className="buttons"><Button href="/donate" tone="light">DONATE</Button><Button href="/partner">PARTNER WITH US</Button></div></div></div></section>
    </main>
    <Footer />
  </>;
}

function Split({image, alt, title, background, white, children}) { return <section className={`section ${background} ${white ? "white-text" : ""}`}><div className="wrap split"><div className="photo"><Image src={image} alt={alt} fill className="cover" /></div><div className="split-copy"><h2>{title}</h2><div>{children}</div></div></div></section> }
function Story({image,title,children}) { return <Link href="/success-stories" className="story"><div className="story-image"><Image src={image} alt="" fill className="cover" /></div><div><h3>{title}</h3><p>{children}</p><span className="text-link">Read the story</span></div></Link> }
