// Commande pour récolter les données entrées dans le formulaire
import { useState } from "react";

function Contact() {

    const validation = (event) => {
        // Empêche la page de refresh
        event.preventDefault();
        // Mettre des ` quand on intègre une fonction dans une var
        alert(`Vous êtes ${prenom} ${name}, votre email ${email}`)
    };

    const [name, setName] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className='contact'>
            <h2>Contact</h2>
            <form onSubmit={validation}>
                <label>
                    Nom :
                    <input 
                    type="text" 
                    value={name} 
                    onChange={(element) => setName(element.target.value)} />
                </label>
                <label>
                    Prenom :
                    <input 
                    type="text" 
                    value={prenom} 
                    onChange={(element) => setPrenom(element.target.value)} />
                </label>
                <label>
                    Email :
                    <input 
                    type="email" 
                    value={email} 
                    onChange={(element) => setEmail(element.target.value)} />
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Contact;