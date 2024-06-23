import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import "./css/EmailSend.css"

function EmailSender(props) {
  // Initialise un état local `emailSent` qui indique si l'email a été envoyé avec succès
  const [emailSent, setEmailSent] = useState(false);

  // Fonction qui envoie l'email en utilisant la bibliothèque EmailJS
  function sendEmail() {
    // Envoie l'email avec les paramètres fournis
    emailjs.send( "service_vp9kva4", "template_05zy9yu", props.formData, "5lKPKuq7M-RF4mAqX")
      .then(() => {
        // Met à jour l'état local `emailSent` si l'email a été envoyé avec succès
        setEmailSent(true);
      }, () => {
        // Affiche une erreur si l'email n'a pas pu être envoyé
        alert('An error occurred while sending the email.');
      });
  }

  // Rend un bouton "Send Email" qui appelle la fonction `sendEmail` lorsque l'utilisateur clique dessus
  return (
    <div>
      
      {emailSent ? <p className='text-send'>Email sent successfully!</p>:
        <button onClick={sendEmail} className="button-sender">Envoyer le mail</button>}
    </div>
  );
}

export default EmailSender;
