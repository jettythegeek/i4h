"use client";

import { ArrowUpRight, FilePdf, X } from "@phosphor-icons/react";
import { useState } from "react";

const reports=[
  {title:"Impact report",description:"Our progress, program outcomes, and the difference whole-family support is making in Kasangati."},
  {title:"Annual report",description:"A transparent account of our work, stewardship, and organizational progress."}
];

export default function ImpactReports(){
  const [selected,setSelected]=useState(null);
  function requestReport(event){
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    const subject=encodeURIComponent(`Report request: ${selected}`);
    const body=encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nRequested report: ${selected}`);
    window.location.href=`mailto:Ntonomoreen@christshandsskill.org?subject=${subject}&body=${body}`;
    setSelected(null);
  }
  return <section className="section sand report-section"><div className="wrap"><div className="section-lead"><h2>Impact and annual reports</h2><p>We publish reports to share our progress, document our stewardship of donor funds, and remain accountable to the communities and partners we serve.</p></div><div className="report-grid">{reports.map(report=><article className="report-card" key={report.title}><span className="report-icon"><FilePdf size={30} weight="duotone"/></span><p className="eyebrow">REPORT</p><h3>{report.title}</h3><p>{report.description}</p><button className="button brand" type="button" onClick={()=>setSelected(report.title)}>REQUEST REPORT <ArrowUpRight size={14} weight="bold"/></button></article>)}</div></div>
  {selected&&<div className="report-modal-backdrop" onMouseDown={event=>{if(event.target===event.currentTarget)setSelected(null)}}><div className="report-modal" role="dialog" aria-modal="true" aria-labelledby="report-modal-title"><button className="report-modal-close" type="button" aria-label="Close" onClick={()=>setSelected(null)}><X size={24}/></button><span className="report-icon"><FilePdf size={30} weight="duotone"/></span><h2 id="report-modal-title">Request the {selected.toLowerCase()}</h2><p>The final PDF is being prepared. Share your details and your email app will open a ready-to-send request to the CHC team.</p><form onSubmit={requestReport}><label>Name<input name="name" required autoComplete="name"/></label><label>Email address<input name="email" type="email" required autoComplete="email"/></label><button className="button brand" type="submit">REQUEST REPORT <ArrowUpRight size={14} weight="bold"/></button></form></div></div>}
  </section>
}
