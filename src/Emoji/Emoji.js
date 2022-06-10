import './Emoji.css';
import React from 'react'

// const montrerEmoji = event => alert(event.target.id)

// export default function Emoji() {
//     return (
//         <ul>
//             <li>
//                 <button onClick={event => alert(event.target.id)}>
//                     <span role="img" id="sourire">🤨</span>
//                 </button>
//             </li>
//             <li>
//                 <button onClick={montrerEmoji}>
//                     <span role="img" id="animal">🐷</span>
//                 </button>
//             </li>
//             <li>
//                 <button>
//                     <span role="img" id="nourriture">🍏</span>
//                 </button>
//             </li>

//         </ul>
//     )
// }

const emojis = [
    {
        emoji: "🤨",
        name: "sourire"
    },
    {
        emoji: "🐷",
        name: "animal"
    },
    {
        emoji: "🍏",
        name: "nourriture"
    }
];

// const planetes = [
//     "Terre",
//     "Saturne",
//     "Pluton"
// ];


// Faire un map, appliquer une fonction qui prend chaque élément et l'affiche dans une div. Key permet de prendre une valeur unique pour parcourir
// export default function Emoji() {
//     return(
//         <>
//             {planetes.map(planete => <div key={planete}>{planete}</div>)}
//         </>
//     )
// }


export default function Emoji() {
    return(
        <>
            <ul> 
                {
                    emojis.map(emoji => (
                        <li key={emoji.emoji}>
                            <button onClick={event => alert(event.target.id)}>
                                <span id={emoji.name}>{emoji.emoji}</span>
                            </button>
                            {/* {emoji.name} */}
                        </li>
                    ))
                } 
            </ul>
        </>
    )
}