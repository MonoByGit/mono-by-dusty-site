"use client";

import React, { useState } from "react";

export default function NulmetingForm() {
  const [formData, setFormData] = useState({
    naam: "",
    bedrijf: "",
    email: "",
    telefoon: "",
    grootte: "10-25",
    start: "Zo snel mogelijk",
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
    if (!formData.bedrijf.trim()) {
      newErrors.bedrijf = "Bedrijfsnaam is verplicht";
    }
    if (!formData.email.trim()) {
      newErrors.email = "E-mailadres is verplicht";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Vul een geldig e-mailadres in";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Optional: scroll form card into view if needed
      const formCard = document.getElementById("aanmelden");
      if (formCard) {
        formCard.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="card form-card reveal">
      <form
        className={`form js-form ${isSubmitted ? "hide" : ""}`}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="form-row">
          <div className={`field ${errors.naam ? "field-error" : ""}`}>
            <label htmlFor="n-naam">
              Naam <span className="req">*</span>
            </label>
            <input
              id="n-naam"
              name="naam"
              type="text"
              placeholder="Voor- en achternaam"
              value={formData.naam}
              onChange={handleChange}
              required
            />
            {errors.naam && <span className="error-text">{errors.naam}</span>}
          </div>
          <div className={`field ${errors.bedrijf ? "field-error" : ""}`}>
            <label htmlFor="n-bedrijf">
              Bedrijf <span className="req">*</span>
            </label>
            <input
              id="n-bedrijf"
              name="bedrijf"
              type="text"
              placeholder="Naam organisatie"
              value={formData.bedrijf}
              onChange={handleChange}
              required
            />
            {errors.bedrijf && <span className="error-text">{errors.bedrijf}</span>}
          </div>
        </div>
        <div className="form-row">
          <div className={`field ${errors.email ? "field-error" : ""}`}>
            <label htmlFor="n-mail">
              E-mail <span className="req">*</span>
            </label>
            <input
              id="n-mail"
              name="email"
              type="email"
              placeholder="jij@bedrijf.nl"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div className="field">
            <label htmlFor="n-tel">Telefoon</label>
            <input
              id="n-tel"
              name="telefoon"
              type="tel"
              placeholder="Optioneel"
              value={formData.telefoon}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="n-grootte">Aantal medewerkers</label>
            <select
              id="n-grootte"
              name="grootte"
              value={formData.grootte}
              onChange={handleChange}
            >
              <option value="10-25">10–25</option>
              <option value="25-50">25–50</option>
              <option value="50+">50 of meer</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="n-start">Wanneer wil je starten?</label>
            <select
              id="n-start"
              name="start"
              value={formData.start}
              onChange={handleChange}
            >
              <option value="Zo snel mogelijk">Zo snel mogelijk</option>
              <option value="Binnen een maand">Binnen een maand</option>
              <option value="Dit kwartaal">Dit kwartaal</option>
              <option value="Eerst verkennen">Eerst verkennen</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="n-bericht">Bericht</label>
          <textarea
            id="n-bericht"
            name="bericht"
            placeholder="Waar loopt je organisatie tegenaan? (optioneel)"
            value={formData.bericht}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-foot">
          <button type="submit" className="btn btn-primary btn-lg">
            Verstuur aanmelding{" "}
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
          <p className="form-note">
            Je gegevens gebruiken we alleen om contact op te nemen over de nulmeting.
          </p>
        </div>
      </form>
      <div className={`form-success ${isSubmitted ? "show" : ""}`} role={isSubmitted ? "status" : undefined}>
        <h3>Bedankt voor je aanmelding.</h3>
        <p>Ik neem binnen één werkdag contact met je op om een datum te plannen. Tot snel!</p>
      </div>
    </div>
  );
}
