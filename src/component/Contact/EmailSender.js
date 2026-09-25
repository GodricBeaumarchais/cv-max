import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaCheck } from 'react-icons/fa';
import "./css/EmailSend.css"

function EmailSender(props) {
  const [emailSent, setEmailSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  function sendEmail(event) {
    // Le bouton est un <button type="submit"> sans onSubmit natif branché sur l'envoi :
    // reportValidity() déclenche manuellement la validation HTML5 (required, type="email", minLength)
    // et l'invite native du navigateur avant de contacter EmailJS.
    if (!event.target.form.reportValidity()) {
      return;
    }
    setError(null);
    setSending(true);
    emailjs.send("service_vp9kva4", "template_05zy9yu", props.formData, "5lKPKuq7M-RF4mAqX")
      .then(() => {
        setSending(false);
        setEmailSent(true);
      }, () => {
        setSending(false);
        setError("Une erreur est survenue lors de l'envoi de l'email. Réessayez ou écrivez-moi directement.");
      });
  }

  if (emailSent) {
    return (
      <div className="send-success">
        <span className="send-success-badge"><FaCheck /></span>
        <p className='text-send'>Email envoyé avec succès !</p>
      </div>
    );
  }

  return (
    <div>
      <button type="submit" onClick={sendEmail} className="button-sender" disabled={sending}>
        {sending ? "Envoi..." : "Envoyer le mail"}
      </button>
      {error && <p className='text-error'>{error}</p>}
    </div>
  );
}

export default EmailSender;
