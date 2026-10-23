"use client";

import { ArrowUpRight, Bank, CaretDown, Car, CreditCard, EnvelopeSimple, FileText, Gift, HandHeart, Lightning, TrendUp, UsersThree } from "@phosphor-icons/react";
import { useState } from "react";

function CanadaFlag(){return <svg viewBox="0 0 60 36" aria-hidden="true"><rect width="60" height="36" fill="#fff"/><rect width="15" height="36" fill="#d52b1e"/><rect x="45" width="15" height="36" fill="#d52b1e"/><path fill="#d52b1e" d="m30 7 2.2 5 4-2-1.2 5.2 3.8.5-6.6 6.1.9 3.1-3.1-.6-3.1.6.9-3.1-6.6-6.1 3.8-.5-1.2-5.2 4 2z"/></svg>}
function UnitedStatesFlag(){return <svg viewBox="0 0 60 36" aria-hidden="true"><rect width="60" height="36" fill="#fff"/>{Array.from({length:7},(_,i)=><rect key={i} y={i*5.54} width="60" height="2.77" fill="#b22234"/>)}<rect width="25" height="19.4" fill="#3c3b6e"/>{Array.from({length:4},(_,row)=>Array.from({length:5},(_,col)=><circle key={`${row}-${col}`} cx={2.7+col*5} cy={2.6+row*4.6} r=".7" fill="#fff"/>))}</svg>}

const canadaPrograms=[
  ["Information/Communications Technology (ICT)","$400 CA/month ($4,800 CA/year)","Provides boda-boda transport for volunteer teachers",true],
  ["Barbering/Beauty Salon","$1,600 CA/month ($19,200 CA/year)","Provides shampoo/shaving supplies"],
  ["Tailoring/Fashion Design","$2,000 CA/month ($24,000 CA/year)","Provides fabric/thread/lace/zippers/needles/etc."],
  ["Reusable Menstrual Pads","$2,600 CA/month ($31,200 CA/year)","Provides special fabric (includes Basic Sex Education Outreach expenses)"],
  ["Liquid-Soap Making","$3,500 CA/month ($42,000 CA/year)","Provides input chemicals"],
  ["Notebook Making","$4,000 CA/month ($48,000 CA/year)","Provides recycled paper/covers/embossing-foil/binding needles, etc."],
  ["Metal Fabrication","$4,000 CA/month ($48,000 CA/year)","Provides metal and welding supplies",true],
  ["Bar-Soap Making","$4,500 CA/month ($54,000 CA/year)","Provides input chemicals"],
  ["Bakery/Confectionary","$4,600 CA/month ($55,200 CA/year)","Provides flour/sugar/eggs/milk/butter/sifters/etc.",true],
];
const usaPrograms=[
  ["Information/Communications Technology (ICT)","$300 US/month ($3,600 US/year)","Provides boda-boda transport for volunteer teachers",true],
  ["Barbering/Beauty Salon","$1,150 US/month ($13,800 US/year)","Provides shampoo/shaving supplies"],
  ["Tailoring/Fashion Design","$1,400 US/month ($16,800 US/year)","Provides fabric/thread/lace/zippers/needles/etc."],
  ["Reusable Menstrual Pads","$1,900 US/month ($22,800 US/year)","Provides special fabric (includes Basic Sex Education Outreach expenses)"],
  ["Liquid-Soap Making","$2,400 US/month ($28,800 US/year)","Provides input chemicals"],
  ["Notebook Making","$2,900 US/month ($34,800 US/year)","Provides recycled paper/covers/embossing-foil/binding needles, etc."],
  ["Metal Fabrication","$2,900 US/month ($34,800 US/year)","Provides metal and welding supplies",true],
  ["Bar-Soap Making","$3,200 US/month ($38,400 US/year)","Provides input chemicals"],
  ["Bakery/Confectionary","$3,300 US/month ($39,600 US/year)","Provides flour/sugar/eggs/milk/butter/sifters/etc.",true],
];

const countries={
  ca:{
    name:"Canada",description:"Click here for Canada-based donations",Flag:CanadaFlag,title:"Canada-Based Donations",
    legal:"Christ’s Hands Centre is a Non-Profit Society incorporated in British Columbia",
    registrationTitle:"CRA Registered Charity",registration:"Registration #79734 2367 RR0001",
    options:[
      {icon:CreditCard,title:"Donate via PayPal",fee:"1.9% fee deducted",copy:"Secure credit card processing through PayPal.",paypalId:"6B47N7AJ4X5R8",paypalPixel:"https://www.paypal.com/en_CA/i/scr/pixel.gif"},
      {icon:CreditCard,title:"Donate via CanadaHelps",fee:"4.0% fee deducted",copy:"CanadaHelps is a separate CRA-registered Canadian Charity. Donations to CanadaHelps automatically receive CRA charitable-contribution tax receipts from CanadaHelps, not CHC.",cta:"DONATE WITH CANADAHELPS",href:"https://www.canadahelps.org/en/dn/143189"},
      {icon:Bank,title:"Donate by Interac E-Transfer",fee:"0% fee",copy:<>Go to your bank’s online-banking website and follow the prompts to send an Interac e-Transfer to <a href="mailto:interac-e-transfer@christshandscentre.org">interac-e-transfer@christshandscentre.org</a>.</>},
      {icon:FileText,title:"Donate by Cheque",fee:"0% fee",copy:<>Make cheque payable to <strong>“Christ’s Hands Centre”</strong> and mail to:<br/><br/><strong>11353 Peregrine Place<br/>Sidney, BC V8L 5S3<br/>Canada</strong></>},
      {icon:TrendUp,title:"Donate Appreciated Securities",copy:"Get charitable-donation credit for the market value of your stocks or bonds. Pay no capital gains tax. CHC gets 100% of market value — no commission.",cta:"DONATE APPRECIATED SECURITIES",href:"https://christshandscentre.org/donate/"},
      {icon:Gift,title:"Donor Advised Funds",copy:"Recommend a grant from your DAF to support Christ’s Hands Centre Society’s mission.",cta:"GIVE VIA DAF",href:"/donate/donor-advised-funds"},
      {icon:FileText,title:"Legacy Giving",copy:"Leave a gift in your will to support Christ’s Hands Centre — beyond your lifetime.",cta:"PLAN YOUR LEGACY",href:"/donate/legacy-giving"},
      {icon:Car,title:"Donate Your Car",copy:<>Donate a Car Canada accepts vehicle donations for Christ’s Hands Centre. Free towing is provided in most areas across Canada, or you can drop off your vehicle to maximize your donation. Your car, truck, RV, boat, or motorcycle will either be recycled or sold at auction. Donate a Car Canada handles the details; after the donation is complete, you will receive a tax receipt.</>,cta:"DONATE A VEHICLE",href:"https://donatecar.ca/org/donate.php?charitypage=ChristsHandsCentre"},
    ],
    heroCopy:"You will be a Christ’s Hands Centre Hero when you contribute monthly toward the expenses of offering training and nutrition programs at Christ’s Hands: Skills-Training & Child-Development Centre, Kasangati, Uganda.",
    heroNote:<>Contact our team at <a href="mailto:info@christshandscentre.org">info@christshandscentre.org</a> to set up monthly withdrawal from your Canadian financial institution to CHC’s account at Coast Capital Credit Union.</>,
    heroRestriction:"This support opportunity is available for withdrawals from Canadian financial institutions only.",
    nutrition:["$21 CA per month","$250 CA per year"],utilities:["$350 CA per month","$4,200 CA per year"],transport:"All program amounts include $400 CA per month for boda-boda transportation expenses of volunteer teachers to and from CHC.",programs:canadaPrograms
  },
  us:{
    name:"United States",description:"Click here for US-based donations",Flag:UnitedStatesFlag,title:"Donations from the USA",
    legal:"Christ’s Hands Centre Society – USA, Inc. is a Non-Profit Organization incorporated in Texas",
    registrationTitle:"IRS Tax-Deduction through LOVEM Ministries",registration:"501(c)(3) Registered Charity",
    taxCopy:"LOVEM Ministries has accepted Christ’s Hands Centre (CHC) as one of its ministries and extends IRS tax deduction to CHC under its 501(c)(3) umbrella.",
    notice:"USA-based donations can be made by online Zelle transfer or postal mail via check (both have 0% fee deducted), or by credit card via PayPal (2.2% deducted), but not via CanadaHelps.",
    options:[
      {icon:CreditCard,title:"Donate Online via PayPal",fee:"2.2% fee deducted",copy:"Secure credit card processing through PayPal.",paypalId:"5M8HTESCBYNKU",paypalPixel:"https://www.paypal.com/en_US/i/scr/pixel.gif"},
      {icon:Lightning,title:"Donate by Zelle",fee:"0% fee",copy:<>Go to your bank’s website and search for Zelle transfers. Send your donation to <a href="mailto:info@christshandscentre.org">info@christshandscentre.org</a>. We will acknowledge your donation by return email.</>},
      {icon:FileText,title:"Donate by Check",fee:"0% fee",copy:<>Make check payable to <strong>“Christ’s Hands Centre”</strong> and mail to:<br/><br/><strong>Internet for Humanity<br/>1096 Verbena Drive<br/>Austin, TX 78750<br/>USA</strong></>},
      {icon:Gift,title:"Donor Advised Funds",copy:"Recommend a grant from your DAF to support Christ’s Hands Centre Society’s mission.",cta:"GIVE VIA DAF",href:"/donate/donor-advised-funds"},
    ],
    footnote:"CanadaHelps is a separate CRA-registered Canadian Charity. Donations to CanadaHelps automatically receive CRA charitable-contribution tax receipts from CanadaHelps, not CHC, and are therefore not eligible for LOVEM Ministries IRS tax deduction.",
    heroCopy:"You will be a Christ’s Hands Centre Hero when you contribute monthly toward the expenses of offering training and nutrition programs at Christ’s Hands: Skills-Training & Child-Development Centre, Kasangati, Uganda.",
    heroNote:<>Contact our team at <a href="mailto:info@christshandscentre.org">info@christshandscentre.org</a> to discuss recurring support.</>,
    nutrition:["$15 US per month","$180 US per year"],utilities:["$250 US per month","$3,000 US per year"],transport:"Program amounts include $300 US per month for boda-boda transportation expenses of volunteer teachers to and from CHC.",programs:usaPrograms
  }
};

function GivingOption({option}){const Icon=option.icon;const external=option.href?.startsWith("http");return <article className="giving-option"><span className="giving-option-icon"><Icon size={22} weight="duotone"/></span><div className="giving-option-heading"><h4>{option.title}</h4>{option.fee&&<span>{option.fee}</span>}</div><div className="giving-option-copy">{option.copy}</div>{option.paypalId&&<form className="paypal-donation-form" action="https://www.paypal.com/donate" method="post" target="_top"><input type="hidden" name="hosted_button_id" value={option.paypalId}/><button className="giving-option-link" type="submit">DONATE WITH PAYPAL<ArrowUpRight size={15} weight="bold"/></button><img alt="" src={option.paypalPixel} width="1" height="1"/></form>}{option.cta&&<a className="giving-option-link" href={option.href} {...(external?{target:"_blank",rel:"noopener noreferrer"}:{})}>{option.cta}<ArrowUpRight size={15} weight="bold"/></a>}</article>}

function Sponsorship({country}){
  return <div className="sponsorship">
    <div className="hero-giving"><span className="giving-option-icon"><HandHeart size={24} weight="duotone"/></span><h3>Become a CHC Hero!</h3><p>{country.heroCopy}</p><p>{country.heroNote}</p>{country.heroRestriction&&<p className="giving-notice"><strong>Note:</strong> {country.heroRestriction}</p>}</div>
    <h3>Levels of CHC Sponsorship</h3>
    <div className="sponsorship-levels">
      <article><span>I</span><h4>Nutrition for a CHC Student</h4><strong>{country.nutrition[0]}</strong><em>or</em><strong>{country.nutrition[1]}</strong><p>Provides basic nutrition for an adult trainee or dependent child.</p></article>
      <article><span>II</span><h4>Water &amp; Power Utilities</h4><strong>{country.utilities[0]}</strong><em>or</em><strong>{country.utilities[1]}</strong><p>Provides water and power utilities for all CHC programs.</p></article>
    </div>
    <div className="program-sponsorship"><span className="sponsor-number">III</span><h4>Materials for Student Skills Training (12-Month Course)</h4><p>{country.transport}</p><p><strong>Highest priority programs: ICT, Bakery, and Metal Fabrication.</strong></p><div className="program-funding-grid">{country.programs.map(([name,cost,purpose,priority],index)=><article key={name}><span>{index+1}</span><div><h5>{name}{priority&&<b>PRIORITY</b>}</h5><strong>{cost}</strong><p>{purpose}</p></div></article>)}</div></div>
  </div>
}

export default function DonationChooser(){
  const [active,setActive]=useState(null);const activeCountry=active?countries[active]:null;
  return <section className="section paper donation-chooser-section" id="give"><div className="wrap donation-chooser"><span className="eyebrow">Make a Difference</span><h2>Every Donation Matters</h2><p className="donation-lead">Contributions from Canada or USA donors are eligible for CRA or IRS charitable contribution receipts respectively. Cumulative donations of $20.00 (CAD or USD) or more per year will receive a charitable donation receipt in February of the next year.</p><h3 className="donation-click-title">Click Below to Donate</h3>
    <div className={`donation-country-grid${active?" has-open":""}`}>{Object.entries(countries).map(([key,country])=>{const open=active===key;const Flag=country.Flag;return <div className={`donation-country-item${open?" open":""}`} key={key}><button type="button" aria-expanded={open} aria-controls={`giving-panel-${key}`} onClick={()=>setActive(open?null:key)}><span className="donation-country-name"><Flag/><strong>{country.name}</strong></span><span className="donation-country-description">{country.description}</span><span className="donation-country-toggle">{open?"Hide giving options":"Show giving options"}<CaretDown size={20} weight="bold"/></span></button></div>})}
      {activeCountry&&<div className="donation-country-panel" id={`giving-panel-${active}`}><h3>{activeCountry.title}</h3><p className="giving-panel-intro">{activeCountry.legal}</p><h4 className="registration-title">{activeCountry.registrationTitle}</h4><p className="registration-number">{activeCountry.registration}</p>{activeCountry.taxCopy&&<p className="giving-panel-intro">{activeCountry.taxCopy}</p>}{activeCountry.notice&&<p className="giving-notice"><strong>Important:</strong> {activeCountry.notice}</p>}<h3 className="giving-section-title">{active==="ca"?"Online Donation Options":"Donation Options"}</h3><div className="giving-option-list">{activeCountry.options.map((option,index)=><div className="giving-option-slot" key={option.title}>{active==="ca"&&index===2&&<h3 className="giving-section-title giving-section-break">Other Ways to Give</h3>}<GivingOption option={option}/></div>)}</div>{activeCountry.footnote&&<p className="giving-footnote"><strong>Note:</strong> {activeCountry.footnote}</p>}<Sponsorship country={activeCountry}/></div>}
    </div>
  </div></section>
}
