import Link from "next/link";
import { ArrowLeft, ArrowUpRight, GearSix, HandHeart, Plant, Receipt, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

const details = {
  daf: {
    kicker: "DONOR ADVISED FUND",
    title: "Give Through Your DAF",
    points: ["Recommend a grant — no processing fee", "One-time or recurring annual disbursements", "CRA Charity #79734 2367 RR0001"],
    cards: [
      [ShieldCheck, "Trusted Stewardship", "CHCS is a CRA-registered Canadian charity. Every dollar is directed to skills training, nutrition, childcare, and community support with full transparency and accountability."],
      [GearSix, "Seamless Process", "Our team works directly with your DAF sponsor to make the grant process as smooth as possible. Most grants can be completed in just a few steps."],
      [Plant, "Lasting Impact", "Your grant empowers women and youth with marketable skills, meals, and hope — creating self-reliance that extends across generations and communities."],
    ],
  },
  legacy: {
    kicker: "LEGACY GIVING",
    title: "A Gift That Endures Beyond Your Lifetime",
    points: ["Leave a bequest in your will to empower women & youth", "Name CHCS as beneficiary of your RRSP, RRIF, or life insurance", "CRA Charity #79734 2367 RR0001"],
    cards: [
      [Plant, "Eternal Impact", "A gift in your will plants seeds of hope that grow long after your lifetime — empowering generations of women and youth in Kasangati, Uganda."],
      [Receipt, "Tax-Wise Giving", "Gifts through your estate — including RRSPs, RRIFs, and life insurance — can significantly reduce the tax burden on your estate while maximizing your charitable impact."],
      [HandHeart, "Your Wishes Honoured", "CHCS works with your family and advisors to ensure your gift is directed exactly as you intend — with full transparency and grateful stewardship."],
    ],
  },
};

export default function GivingDetailPage({type}) {
  const page = details[type];
  return <main className="giving-detail-main">
    <section className="giving-detail-hero">
      <div className="wrap giving-detail-hero-grid">
        <div className="giving-detail-brand"><span>CHRIST&apos;S HANDS</span><strong>CENTRE SOCIETY</strong><b>CHCS</b></div>
        <div className="giving-detail-copy"><p>{page.kicker}</p><h1>{page.title}</h1><ul>{page.points.map(point=><li key={point}>{point}</li>)}</ul></div>
      </div>
    </section>
    <section className="section paper giving-detail-content"><div className="wrap">
      <Link className="giving-back" href="/donate"><ArrowLeft size={18} weight="bold"/> Back to donation options</Link>
      <div className="giving-detail-cards">{page.cards.map(([Icon,title,copy])=><article key={title}><span><Icon size={32} weight="duotone"/></span><h2>{title}</h2><p>{copy}</p></article>)}</div>
      <div className="giving-detail-contact"><div><p className="eyebrow">READY TO GIVE?</p><h2>Let&apos;s make your lasting impact possible.</h2></div><a className="button brand" href="mailto:info@christshandscentre.org">CONTACT US <ArrowUpRight size={15} weight="bold"/></a></div>
    </div></section>
  </main>;
}
