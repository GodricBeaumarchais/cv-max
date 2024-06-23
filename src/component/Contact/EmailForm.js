import React, { useState } from 'react';
import "./css/EmailForm.css"
import EmailSender from './EmailSender';
import { InView } from 'react-intersection-observer';
import { AnimClassName } from "../../utils"


function EmailForm(props) {
  // Initialise un état local `formData` qui contient les données saisies dans le formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [inView, setInView] = useState(false);

  // Met à jour l'état local `formData` lorsque l'utilisateur saisit des données dans le formulaire
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  // Appelle la fonction `onSubmit` passée en propriété avec les données du formulaire
  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(formData);
  }


  // Rend le formulaire avec les champs `name`, `email` et `message`
  return (
    <InView onChange={setInView}>
      <div className={AnimClassName("anim-email-contener", inView)}>
        <form onSubmit={handleSubmit} className="form-mail" >
          <div className="contact-form-case">
            <label htmlFor="name" className='label-mail'>Nom:</label>
            <div className='input-div'>
              <input className='input-name' type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} />
            </div>
          </div>
          <div className="contact-form-case">
            <label htmlFor="email" className='label-mail'>Email:   </label>
            <div className='input-div'>
              <input className='input-mail' type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} />
            </div>
          </div>
          <div className='message-contener'>
            <label htmlFor="message" className='label-mail'>Message:</label>
            <div className='input-div-mess'>
            <textarea className='input-message' name="message" id="message" value={formData.message} onChange={handleInputChange} />
          </div>
          </div>
        </form>
        <EmailSender formData={formData} />
      </div>

    </InView>
  );
}

export default EmailForm;