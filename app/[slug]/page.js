import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const pages = {
  about: ["About Internet for Humanity", "Founded in 2004, Internet for Humanity is an international Canadian charity expanding equitable access to digital tools, internet connectivity, and practical digital literacy."],
  "what-we-do": ["What we do", "We partner with schools, farmer cooperatives, and healthcare facilities to install affordable, community-owned ICT Centres and deliver practical digital-literacy training."],
  impact: ["Impact and accountability", "Our active centres support education, agriculture, and healthcare across Uganda, with more verified institutions awaiting assistance."],
  partner: ["Support our mission", "Partner with Internet for Humanity to connect the next underserved community to practical digital tools and training."],
  contact: ["Contact us", "We would love to hear from individuals and organizations interested in helping close the digital divide."],
  blog: ["Latest news and stories", "Read updates from our programmes, communities, partners, and team."],
  donate: ["Help fund the next 5C-ICT Centre", "CA$6,500 provides one complete ICT Centre serving 800–2,500 direct beneficiaries."],
  "success-stories": ["Success stories", "Explore practical outcomes from classrooms, farmer cooperatives, and healthcare facilities across Uganda."],
};

export function generateStaticParams(){return Object.keys(pages).map(slug=>({slug}));}
export default async function InnerPage({params}){const {slug}=await params;const [title,copy]=pages[slug]||["Internet for Humanity","Connecting underserved communities to the digital world."];return <><Header/><main><section className="inner-hero hero-surface white-text"><div className="wrap"><span className="eyebrow">INTERNET FOR HUMANITY</span><h1>{title}</h1><p>{copy}</p></div></section><section className="section paper"><div className="wrap inner-content"><h2>Closing the digital divide, one community at a time.</h2><p>Our Five Computer – Information and Communications Technology Centre model is co-funded, locally owned, and designed to remain useful long after installation.</p><Link className="button brand" href="/contact">GET IN TOUCH <ArrowUpRight size={14} weight="bold" /></Link></div></section></main><Footer/></>}
