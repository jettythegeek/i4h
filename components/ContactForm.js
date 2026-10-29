"use client";

import { ArrowUpRight } from "@phosphor-icons/react";

export default function ContactForm() {
  function submitEnquiry(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Website enquiry: ${data.get("enquiryType")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Organization: ${data.get("organization") || "Not provided"}`,
      `Enquiry type: ${data.get("enquiryType")}`,
      "",
      data.get("message"),
    ].join("\n");

    window.location.href = `mailto:Ntonomoreen@christshandsskill.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form-card" onSubmit={submitEnquiry}>
      <h2>Send an enquiry</h2>
      <p>
        Tell us what you are interested in and the right person will follow up.
        Partnership enquiries reach the same team — choose “Partnership or
        sponsorship” below.
      </p>

      <div className="contact-form-grid">
        <label>
          <span>Name *</span>
          <input id="contact-name" name="name" type="text" required />
        </label>
        <label>
          <span>Email *</span>
          <input name="email" type="email" required />
        </label>
        <label className="contact-form-wide">
          <span>
            Organization <small>(optional)</small>
          </span>
          <input id="contact-organization" name="organization" type="text" />
        </label>
        <label className="contact-form-wide">
          <span>What is your enquiry about?</span>
          <select
            id="contact-enquiry-type"
            name="enquiryType"
            defaultValue="General enquiry"
          >
            <option>General enquiry</option>
            <option>Partnership or sponsorship</option>
            <option>Donations and giving</option>
            <option>Media enquiry</option>
            <option>Volunteering</option>
            <option>Something else</option>
          </select>
        </label>
        <label className="contact-form-wide">
          <span>Message *</span>
          <textarea id="contact-message" name="message" rows="7" required />
        </label>
      </div>

      <button className="contact-submit" type="submit">
        Send enquiry
        <ArrowUpRight size={15} weight="bold" />
      </button>
      <small className="contact-privacy-note">
        Fields marked * are required. We use your details only to reply to this
        enquiry. Submitting opens your email application.
      </small>
    </form>
  );
}
