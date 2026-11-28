"use client";

import { FormEvent, useState } from "react";

type Pathway = "" | "community" | "competitive";
type ContactMethod = "" | "email" | "whatsapp";

export function RegistryForm() {
  const [pathway, setPathway] = useState<Pathway>("");
  const [contactMethod, setContactMethod] = useState<ContactMethod>("");
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(
      "Registration submission is not yet available. This interface has not sent or saved your information."
    );
  }

  return (
    <form className="registry-form" onSubmit={handleSubmit}>
      <div className="registry-form__grid">
        <label className="registry-field registry-field--full" htmlFor="registry-name">
          Full name
          <input id="registry-name" name="name" autoComplete="name" required />
        </label>

        <fieldset className="registry-fieldset registry-fieldset--full">
          <legend>Participation pathway <span aria-hidden="true">*</span></legend>
          <div className="registry-choice-grid">
            <label className="registry-choice">
              <input
                type="radio"
                name="pathway"
                value="community"
                checked={pathway === "community"}
                onChange={() => setPathway("community")}
                required
              />
              <span>
                <strong>Community Member</strong>
                <small>Join the wider BREAKLINE community, participate and grow alongside the organisation.</small>
              </span>
            </label>
            <label className="registry-choice">
              <input
                type="radio"
                name="pathway"
                value="competitive"
                checked={pathway === "competitive"}
                onChange={() => setPathway("competitive")}
                required
              />
              <span>
                <strong>Competitive Player</strong>
                <small>Pursue future competitive opportunities and potentially be considered for BREAKLINE rosters.</small>
              </span>
            </label>
          </div>
        </fieldset>

        <fieldset className="registry-fieldset registry-fieldset--full">
          <legend>Gaming information</legend>
          <div className="registry-form__grid">
            <label className="registry-field" htmlFor="registry-platform">
              Primary gaming platform
              {pathway === "competitive" && <span aria-hidden="true"> *</span>}
              <select
                id="registry-platform"
                name="platform"
                defaultValue=""
                required={pathway === "competitive"}
              >
                <option value="" disabled>Select a platform</option>
                <option value="pc">PC</option>
                <option value="playstation">PlayStation</option>
                <option value="xbox">Xbox</option>
                <option value="mobile">Mobile</option>
                <option value="multiple">Multiple platforms</option>
              </select>
            </label>
            <label className="registry-field" htmlFor="registry-game">
              Primary game title
              {pathway === "competitive" && <span aria-hidden="true"> *</span>}
              <input
                id="registry-game"
                name="game"
                required={pathway === "competitive"}
              />
            </label>
          </div>
        </fieldset>

        {pathway === "competitive" && (
          <fieldset className="registry-fieldset registry-fieldset--full registry-competitive">
            <legend>Competitive information</legend>
            <div className="registry-form__grid">
              <label className="registry-field" htmlFor="registry-rank">
                Current competitive rank <span aria-hidden="true">*</span>
                <input id="registry-rank" name="rank" required />
              </label>
              <label className="registry-field" htmlFor="registry-experience">
                Competitive experience <span>(optional)</span>
                <textarea
                  id="registry-experience"
                  name="experience"
                  rows={5}
                  placeholder="Previous teams, tournaments and competitive experience"
                />
              </label>
            </div>
          </fieldset>
        )}

        <fieldset className="registry-fieldset registry-fieldset--full">
          <legend>Primary social profile</legend>
          <p className="registry-helper">
            Tell us which social platform you&apos;re most active on and regularly use to engage or publish content.
            Enter your username exactly as it appears on that platform. Please provide one primary profile only.
          </p>
          <div className="registry-form__grid">
            <label className="registry-field" htmlFor="registry-social-platform">
              Social platform <span aria-hidden="true">*</span>
              <input
                id="registry-social-platform"
                name="socialPlatform"
                placeholder="For example, Instagram or Discord"
                required
              />
            </label>
            <label className="registry-field" htmlFor="registry-social-handle">
              Username / handle <span aria-hidden="true">*</span>
              <input id="registry-social-handle" name="socialHandle" required />
            </label>
          </div>
        </fieldset>

        <fieldset className="registry-fieldset registry-fieldset--full">
          <legend>Preferred contact method <span aria-hidden="true">*</span></legend>
          <div className="registry-choice-grid registry-choice-grid--contact">
            <label className="registry-choice registry-choice--compact">
              <input
                type="radio"
                name="contactMethod"
                value="email"
                checked={contactMethod === "email"}
                onChange={() => setContactMethod("email")}
                required
              />
              <span><strong>Email</strong></span>
            </label>
            <label className="registry-choice registry-choice--compact">
              <input
                type="radio"
                name="contactMethod"
                value="whatsapp"
                checked={contactMethod === "whatsapp"}
                onChange={() => setContactMethod("whatsapp")}
                required
              />
              <span><strong>WhatsApp</strong></span>
            </label>
          </div>

          {contactMethod === "email" && (
            <label className="registry-field registry-contact-field" htmlFor="registry-email">
              Email address <span aria-hidden="true">*</span>
              <input id="registry-email" name="email" type="email" autoComplete="email" required />
            </label>
          )}
          {contactMethod === "whatsapp" && (
            <label className="registry-field registry-contact-field" htmlFor="registry-phone">
              WhatsApp phone number <span aria-hidden="true">*</span>
              <input
                id="registry-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+27..."
                aria-describedby="phone-guidance"
                required
              />
              <small id="phone-guidance" className="registry-guidance">
                Include your country code, for example +27 for South Africa.
              </small>
            </label>
          )}
        </fieldset>
      </div>

      <div className="registry-form__footer">
        <p className="privacy-note">
          Your details are not publicly displayed. Submission and secure storage are not currently available.
        </p>
        <button className="button button--solid" type="submit">
          SUBMIT REGISTRATION <span aria-hidden="true">↗</span>
        </button>
      </div>
      {notice && <p className="form-notice" role="status">{notice}</p>}
    </form>
  );
}
