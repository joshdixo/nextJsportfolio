import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const [submit, submitting] = useFormspark({
    formId: process.env.FORMSPARK_FORM_ID,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ name, email, message });
    alert("Form submitted!");
  };

  return (
    <div className={styles.form}>
      <p>
        You can reach me by sending an email to{" "}
        <a href="mailto:joshdixn@icloud.com">joshdixn@icloud.com</a> or by
        filling out the form below.
      </p>
      <form onSubmit={onSubmit}>
        <div className={styles.topRow}>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <textarea
          className={styles.input}
          id="message"
          name="message"
          placeholder="Your message"
          required=""
          rows={16}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit" disabled={submitting}>
          Send message ✉️
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
