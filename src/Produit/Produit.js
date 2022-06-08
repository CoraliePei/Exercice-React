import './Produit.css';


const produits = [
    {
        name: "Pomme", 
        id: 1
    },
    {
        name: "Banane", 
        id: 2
    },
    {
        name: "Poire", 
        id: 3
    },
    {
        name: "Cerise", 
        id: 4
    },
]

export default function Produit() {
    return (
        <div>
            <ul>
            {
                produits.map(produit => (
                    <li key={produit.name}><span id={produit.id}>{produit.name}</span></li>
                ))
            }
            </ul>
        </div>
    )
}