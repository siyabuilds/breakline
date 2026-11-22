"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(
      "This form is not currently connected to a submission service. Your message has not been sent. Please email hello@breakline.gg instead."
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__grid">
        <label htmlFor="contact-name">
          Full name
          <input id="contact-name" name="name" autoComplete="name" required />
        </label>
        <label htmlFor="contact-email">
          Email address
          <input id="contact-email" name="email" type="email" autoComplete="email" required />
        </label>
        <label htmlFor="contact-subject">
          Subject
          <input id="contact-subject" name="subject" required />
        </label>
        <label htmlFor="contact-category">
          Enquiry category
          <select id="contact-category" name="category" required defaultValue="">
            <option value="" disabled>Select a category</option>
            <option value="general">General enquiry</option>
            <option value="media">Media and press</option>
            <option value="content">Content and collaboration</option>
            <option value="community">Community</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>
      <label className="contact-form__full" htmlFor="contact-message">
        Message
        <textarea id="contact-message" name="message" rows={7} required />
      </label>
      <div className="contact-form__footer">
        <p className="privacy-note">
          We will use the information you provide only to respond to your enquiry.
        </p>
        <button className="button button--solid" type="submit">
          SEND MESSAGE <span aria-hidden="true">↗</span>
        </button>
      </div>
      {notice && <p className="form-notice" role="status">{notice}</p>}
    </form>
  );
}
