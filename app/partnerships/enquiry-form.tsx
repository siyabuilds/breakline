"use client";

import { FormEvent, useState } from "react";

const interests = [
  "Financial sponsorship",
  "Gaming hardware and peripherals",
  "Apparel and merchandise",
  "Technology and infrastructure",
  "Professional services",
  "Strategic collaboration",
  "Other",
];

export function EnquiryForm() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("Your enquiry has not been sent yet because the submission service is not configured. Please email hello@breakline.gg to start the conversation.");
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Full name<input name="name" required /></label>
        <label>Business email<input name="email" type="email" required /></label>
        <label>Organisation or company name<input name="organisation" required /></label>
        <label>Position or role<input name="role" required /></label>
        <label>Website <span>(optional)</span><input name="website" type="url" /></label>
        <label>Estimated contribution or support capacity <span>(optional)</span><input name="capacity" /></label>
      </div>
      <fieldset>
        <legend>Partnership interest</legend>
        <div className="checkbox-grid">
          {interests.map((interest) => (
            <label className="checkbox-label" key={interest}>
              <input type="checkbox" name="interest" value={interest} />
              <span>{interest}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="form-full">Proposed collaboration details<textarea name="collaboration" rows={5} required /></label>
      <label className="form-full">Additional message <span>(optional)</span><textarea name="message" rows={5} /></label>
      <div className="form-footer">
        <p className="privacy-note">We&apos;ll use the information you provide only to respond to your partnership enquiry.</p>
        <button className="button button--solid" type="submit">SEND ENQUIRY <span aria-hidden="true">↗</span></button>
      </div>
      {notice && <p className="form-notice" role="status">{notice}</p>}
    </form>
  );
}
