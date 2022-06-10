// Commande pour récolter les données entrées dans le formulaire
import { useState } from "react";
import './Contact.css';

function Contact() {

    const validation = (event) => {
        // Empêche la page de refresh
        event.preventDefault();
        // Mettre des ` quand on intègre une fonction dans une var
        alert(`Vous êtes ${prenom} ${name}, votre email ${email}. Vous préférez le ${jours}`)
    };

    // Chercher comment tout mettre dans un seul tableau
    const [name, setName] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [textarea, setTextarea] = useState("Saisissez votre commentaire");
    const [jours, setJours] = useState("Lundi");

    console.log(textarea);
    console.log(setJours);

    const handleChange = (event) => {
        setTextarea(event.target.value);
    }

    return (
        <div className='contact'>
            <h2>Contact</h2>
            <form onSubmit={validation}>
                <label>
                    Nom :
                    <input 
                    type="text" 
                    value={name} 
                    onChange={(element) => setName(element.target.value)} required />
                </label>
                <label>
                    Prenom :
                    <input 
                    type="text" 
                    value={prenom} 
                    onChange={(element) => setPrenom(element.target.value)} required />
                </label>
                <label>
                    Email :
                    <input 
                    type="email" 
                    value={email} 
                    onChange={(element) => setEmail(element.target.value)} required />
                </label>
                <label>
                    Jours de la semaine :
                    <select value={jours} onChange={(element) => setJours(element.target.value)} required >
                        <option>Lundi</option>
                        <option>Mardi</option>
                        <option>Mercredi</option>
                    </select>
                </label>
                <textarea value={textarea} onChange={handleChange} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Contact;