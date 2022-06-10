import './Produit.css';
import React from 'react';

// const produits = [
//     {
//         name: "Pomme", 
//         id: 1
//     },
//     {
//         name: "Banane", 
//         id: 2
//     },
//     {
//         name: "Poire", 
//         id: 3
//     },
//     {
//         name: "Cerise", 
//         id: 4
//     },
// ]

// export default function Produit() {
//     return (
//         <div>
//             <ul>
//             {
//                 produits.map(produit => (
//                     <li key={produit.id}>{produit.name}</li>
//                 ))
//             }
//             </ul>
//         </div>
//     )
// }


// Consigne : créer un tableau produits :
// image, titre, description, id, prix, avis
// le composant produit devra afficher une card avec les informations de chaque produit
// créer un second composant cardProduit qui devra afficher les infos de chaque pdt qui lui sont passés en props

const produits = [
    {
      image: 'https://c.shld.net/rpx/i/s/i/spin/10000003/prod_2305917712',
      id: 1,
      titre: 'Echo Dot',
      description: 'Enceinte Bluetooth compacte avec Alexa',
      prix: '30€',
      avis: 450,
    },
    {
      image: 'https://live.staticflickr.com/1701/24066310330_b7bfcd0c0a_n.jpg',
      id: 2,
      description: 'Tuner TV usb',
      titre: 'Fire TV',
      prix: '70€',
      avis: 156430,
    },
    {
      image:
        'https://www.bhphotovideo.com/images/images2500x2500/fitbit_fb507rgpk_versa_2_health_1501923.jpg',
      id: 3,
      description: 'Montre connectée',
      titre: 'Fitbit Versa ',
      prix: '120€',
      avis: 6531,
    },
  ];

export default function Produit() {
    return (
    <div className="fichePdt">
        {   
          produits.map(produit => (
              <figure key={produit.id}> 
                  <img src={produit.image} alt="..."></img>
                  <figcaption>
                      <h3>{produit.titre}</h3>
                      <p>{produit.description}</p>
                      <h4>{produit.prix}</h4>
                      <h5>{produit.avis}</h5>
                  </figcaption>
              </figure>
          ))
        }
    </div>
)}

// Correction props
// export default function Produit() {
//   const listeProduits = produits.map((produit) => (
//       <CardProduit 
//           key={produit.id}
//           image={produit.image}
//           prix={produit.prix}
//           titre={produit.titre}
//           description={produit.description}
//           avis={produit.avis}
//           />
//   ))
//   return listeProduits;
// }

// export default function Produit(props) {
//   return (
//   <div className="fichePdt"> 
//             <figure> 
//                 <img src={props.image}></img>
//                 <figcaption>
//                     <h3>{props.titre}</h3>
//                     <p>{props.description}</p>
//                     <h4>{props.prix}</h4>
//                     <h5>{props.avis}</h5>
//                 </figcaption>
//             </figure>
//   </div>
// )}