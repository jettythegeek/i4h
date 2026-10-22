"use client";

import { ArrowUpRight, Bank, CaretDown, Car, CreditCard, FileText, Gift, HandHeart, TrendUp, UsersThree } from "@phosphor-icons/react";
import { useState } from "react";

function CanadaFlag(){return <svg viewBox="0 0 60 36" aria-hidden="true"><rect width="60" height="36" fill="#fff"/><rect width="15" height="36" fill="#d52b1e"/><rect x="45" width="15" height="36" fill="#d52b1e"/><path fill="#d52b1e" d="m30 7 2.2 5 4-2-1.2 5.2 3.8.5-6.6 6.1.9 3.1-3.1-.6-3.1.6.9-3.1-6.6-6.1 3.8-.5-1.2-5.2 4 2z"/></svg>}
function UnitedStatesFlag(){return <svg viewBox="0 0 60 36" aria-hidden="true"><rect width="60" height="36" fill="#fff"/>{Array.from({length:7},(_,i)=><rect key={i} y={i*5.54} width="60" height="2.77" fill="#b22234"/>)}<rect width="25" height="19.4" fill="#3c3b6e"/>{Array.from({length:4},(_,row)=>Array.from({length:5},(_,col)=><circle key={`${row}-${col}`} cx={2.7+col*5} cy={2.6+row*4.6} r=".7" fill="#fff"/>))}</svg>}

const sharedContact="/contact";
const countries={
  ca:{
    name:"Canada",description:"Click here for Canada-based donations",Flag:CanadaFlag,title:"Donations from Canada",
    copy:["Christ’s Hands Centre Society is a Canadian registered charity (#79734 2367 RR0001). Give online as a one-time or monthly donor, sponsor a mother or vocational program, or support the wraparound care that makes training possible.","Eligible Canadian donations receive charitable donation receipts."],
    options:[
      {icon:CreditCard,title:"Donate online",tag:"ONE-TIME OR MONTHLY",copy:"Make a one-time contribution or create an ongoing monthly gift through the Christ’s Hands Centre donation page.",cta:"DONATE ONLINE",href:"https://christshandsskill.org/donate/"},
      {icon:UsersThree,title:"Sponsor a mother",tag:"CA$300",copy:"Fund one mother through a complete vocational program, including materials, meals, childcare for her children, and the support she needs to graduate.",cta:"VIEW SPONSORSHIP LEVELS",href:"#monthly"},
      {icon:HandHeart,title:"Fund a complete program stream",tag:"DIRECTED GIVING",copy:"CA$18,000 supports a full class of 60 through one complete program stream. CA$54,000 supports three streams serving 180 mothers and youth.",cta:"SEE THE GIVING LADDER",href:"#giving-ladder"},
      {icon:Bank,title:"Sponsor daily nutrition",tag:"WHOLE-FAMILY CARE",copy:"Sponsor daily meals for one or more students and their dependent children so hunger does not prevent attendance or learning.",cta:"CONTACT OUR TEAM",href:sharedContact},
      {icon:HandHeart,title:"Give equipment or services",tag:"IN-KIND SUPPORT",copy:"Contribute training equipment, materials, food, school supplies, professional expertise, or other services that strengthen CHC programs.",cta:"PARTNER WITH US",href:"/partner"},
      {icon:TrendUp,title:"Donate appreciated securities",tag:"TAX-EFFICIENT GIVING",copy:"Donate publicly traded securities in kind. A direct gift can eliminate capital-gains tax while providing a charitable tax receipt for the market value of your gift.",cta:"CONTACT OUR TEAM",href:sharedContact},
      {icon:Gift,title:"Donor advised funds",tag:"DAF",copy:"Recommend a grant from your donor advised fund to Christ’s Hands Centre Society.",details:<><p>Ask your DAF provider to recommend a grant to <strong>Christ’s Hands Centre Society</strong>.</p><p>Canadian charity registration number: <strong>79734 2367 RR0001</strong>.</p><p>Please include your name and contact information with the grant so we can acknowledge your gift.</p></>,cta:"CONTACT OUR TEAM",href:sharedContact},
      {icon:FileText,title:"Legacy giving",tag:"PLANNED GIVING",copy:"A gift in your will can provide skills, care, and opportunity for vulnerable families beyond your lifetime.",details:<><p>You may name <strong>Christ’s Hands Centre Society</strong> as a beneficiary in your will, life-insurance policy, RRSP, RRIF, or TFSA.</p><p>Legal name: Christ’s Hands Centre Society<br/>Canadian charity registration number: <strong>79734 2367 RR0001</strong>.</p><p>Please consult your legal and financial advisers when preparing a planned gift.</p></>,cta:"PLAN YOUR LEGACY",href:sharedContact},
      {icon:Car,title:"Donate your vehicle",tag:"VEHICLE GIVING",copy:"Turn a car, truck, RV, boat, or motorcycle into support for vocational training and whole-family care.",cta:"CONTACT OUR TEAM",href:sharedContact},
    ]
  },
  us:{
    name:"United States",description:"Click here for US-based donations",Flag:UnitedStatesFlag,title:"Donations from the United States",
    copy:["Support Christ’s Hands Centre from the United States through online giving, learner sponsorship, a donor advised fund, or a strategic partnership.","For a tax-deductible US gift, contact our team for the current approved giving instructions before sending funds."],
    options:[
      {icon:CreditCard,title:"Donate online",tag:"ONE-TIME OR MONTHLY",copy:"Use the Christ’s Hands Centre donation page to begin a one-time or recurring contribution.",cta:"DONATE ONLINE",href:"https://christshandsskill.org/donate/"},
      {icon:UsersThree,title:"Sponsor a mother",tag:"SPONSORSHIP",copy:"Support one learner’s complete training journey, including materials, meals, childcare, and psychosocial support.",cta:"VIEW SPONSORSHIP LEVELS",href:"#monthly"},
      {icon:HandHeart,title:"Fund a vocational program",tag:"PROGRAM SUPPORT",copy:"Direct your support to tailoring, baking, IT, soap making, notebook production, hair and barbering, metal fabrication, meals, childcare, or sanitary supplies.",cta:"PARTNER WITH US",href:"/partner"},
      {icon:Gift,title:"Donor advised funds",tag:"DAF",copy:"Recommend a grant from your donor advised fund to support Christ’s Hands Centre’s mission.",details:<><p>Contact our team before initiating a US donor advised fund grant so we can provide the current approved recipient and acknowledgement instructions.</p><p>Christ’s Hands Centre Society’s Canadian charity registration number is <strong>79734 2367 RR0001</strong>.</p></>,cta:"CONTACT OUR TEAM",href:sharedContact},
    ]
  }
};

function GivingOption({option}){
  const [expanded,setExpanded]=useState(false); const Icon=option.icon; const external=option.href.startsWith("http");
  return <article className="giving-option"><span className="giving-option-icon"><Icon size={22} weight="duotone"/></span><div className="giving-option-heading"><h4>{option.title}</h4><span>{option.tag}</span></div><p>{option.copy}</p>
    {option.details&&<><button className="giving-details-toggle" type="button" aria-expanded={expanded} onClick={()=>setExpanded(!expanded)}>{expanded?"Hide details":"View details"}<CaretDown size={16} weight="bold"/></button>{expanded&&<div className="giving-details">{option.details}</div>}</>}
    <a className="giving-option-link" href={option.href} {...(external?{target:"_blank",rel:"noopener noreferrer"}:{})}>{option.cta}<ArrowUpRight size={15} weight="bold"/></a>
  </article>
}

export default function DonationChooser(){
  const [active,setActive]=useState(null); const activeCountry=active?countries[active]:null;
  return <section className="section paper donation-chooser-section" id="give"><div className="wrap donation-chooser"><h2>Click Below to Donate</h2>
    <div className={`donation-country-grid${active?" has-open":""}`}>
      {Object.entries(countries).map(([key,country])=>{const open=active===key;const Flag=country.Flag;return <div className={`donation-country-item${open?" open":""}`} key={key}><button type="button" aria-expanded={open} aria-controls={`giving-panel-${key}`} onClick={()=>setActive(open?null:key)}><span className="donation-country-name"><Flag/><strong>{country.name}</strong></span><span className="donation-country-description">{country.description}</span><span className="donation-country-toggle">{open?"Hide giving options":"Show giving options"}<CaretDown size={20} weight="bold"/></span></button></div>})}
      {activeCountry&&<div className="donation-country-panel" id={`giving-panel-${active}`}><h3>{activeCountry.title}</h3>{activeCountry.copy.map(text=><p className="giving-panel-intro" key={text}>{text}</p>)}<div className="giving-option-list">{activeCountry.options.map(option=><GivingOption option={option} key={option.title}/>)}</div><p className="giving-panel-contact">For more information on {active==="ca"?"Canadian":"United States"} donations, <a href="/contact">contact us</a>.</p></div>}
    </div>
    <p className="donation-receipt-note">Christ’s Hands Centre Society is a Canadian registered charity (#79734 2367 RR0001). Confirm country-specific tax and payment instructions with our team before making a gift.</p>
  </div></section>
}
