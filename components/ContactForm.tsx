"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    bedrijf: "",
    onderwerp: "Algemene vraag",
    bericht: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.naam.trim()) {
      newErrors.naam = "Naam is verplicht";
    }
    if (!formData.email.trim()) {
      newErrors.email = "E-mailadres is verplicht";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Vul een geldig e-mailadres in";
    }
    if (!formData.bericht.trim()) {
      newErrors.bericht = "Bericht is verplicht";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      const formCard = document.getElementById("bericht");
      if (formCard) {
        formCard.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="card form-card reveal" id="bericht">
      <h2 className="h3" style={{ marginBottom: "6px" }}>Stuur een bericht</h2>
      <p className="muted" style={{ fontSize: "15px", marginBottom: "20px" }}>
        Vertel kort waar het over gaat, dan kom ik er snel op terug.
      </p>
      <form
        className={`form js-form ${isSubmitted ? "hide" : ""}`}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="form-row">
          <div className={`field ${errors.naam ? "field-error" : ""}`}>
            <label htmlFor="c-naam">
              Naam <span className="req">*</span>
            </label>
            <input
              id="c-naam"
              name="naam"
              type="text"
              placeholder="Voor- en achternaam"
              value={formData.naam}
              onChange={handleChange}
              required
            />
            {errors.naam && <span className="error-text">{errors.naam}</span>}
          </div>
          <div className={`field ${errors.email ? "field-error" : ""}`}>
            <label htmlFor="c-mail">
              E-mail <span className="req">*</span>
            </label>
            <input
              id="c-mail"
              name="email"
              type="email"
              placeholder="jij@bedrijf.nl"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="c-bedrijf">Bedrijf</label>
            <input
              id="c-bedrijf"
              name="bedrijf"
              type="text"
              placeholder="Optioneel"
              value={formData.bedrijf}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="c-onderwerp">Onderwerp</label>
            <select
              id="c-onderwerp"
              name="onderwerp"
              value={formData.onderwerp}
              onChange={handleChange}
            >
              <option value="Algemene vraag">Algemene vraag</option>
              <option value="De nulmeting">De nulmeting</option>
              <option value="Werken met AI (workshops)">Werken met AI (workshops)</option>
              <option value="Bouwen met AI">Bouwen met AI</option>
              <option value="Iets anders">Iets anders</option>
            </select>
          </div>
        </div>
        <div className={`field ${errors.bericht ? "field-error" : ""}`}>
          <label htmlFor="c-bericht">
            Bericht <span className="req">*</span>
          </label>
          <textarea
            id="c-bericht"
            name="bericht"
            placeholder="Waar kan ik je mee helpen?"
            value={formData.bericht}
            onChange={handleChange}
            required
          ></textarea>
          {errors.bericht && <span className="error-text">{errors.bericht}</span>}
        </div>
        <div className="form-foot">
          <button type="submit" className="btn btn-primary btn-lg">
            Verstuur bericht{" "}
            <span className="arr">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </button>
          <p className="form-note">Je gegevens gebruik ik alleen om je vraag te beantwoorden.</p>
        </div>
      </form>
      <div className={`form-success ${isSubmitted ? "show" : ""}`} role={isSubmitted ? "status" : undefined}>
        <h3>Bericht verstuurd.</h3>
        <p>Bedankt! Ik lees het en reageer persoonlijk, meestal binnen één werkdag.</p>
      </div>
    </div>
  );
}
