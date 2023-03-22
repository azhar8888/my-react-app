
 import './App.css';
 import { useState } from 'react';
import { useEffect } from 'react';

// import { Component } from 'react';
// import {people} from './Profile';
// import { getAllByAltText } from '@testing-library/react';

/* <h1>NOTABLE SCIENTISTS</h1>
    <Profile
      imageId="szV5sdG"
      name="Maria Skłodowska-Curie"
      profession="physicist and chemist"
      awards={[
        'Nobel Prize in Physics',
        'Nobel Prize in Chemistry',
        'Davy Medal',
        'Matteucci Medal'
      ]}
      discovery="polonium (chemical element)"
    >
    </Profile>
    <Profile
    imageId="YfeOqp2"
    name='Katsuko Saruhashi'
    profession='geochemist'
    awards={[
      'Miyake Prize for geochemistry',
      'Tanaka Prize'
    ]}
    discovery="a method for measuring carbon dioxide in seawater"

    ></Profile>
    <Profile 
    imageId="'OKS67lh"
    name="charles darwin"
    profession="zoologiest"
    awards={['Nobel prize','copley medal','royal medal']}
    discovery="darwin`s theory"
    ></Profile> */
// let chemists = [];
// let all = [];
// people.forEach(per => {
//   if (per.profession === 'chemist') { chemists.push(per) }
//   else {
//     all.push(per)
//   }
// });
// function Section({ title, people }) {
//   return (
//     <>
//       <h2>{title}</h2>
//       <ul>
//         {people.map(per =>
//           <li key={per.id}>
//             <p>
//               <b>{per.name}:</b>
//               {' ' + per.profession + ' '}
//               known for {per.accomplishment}
//             </p>

//           </li>
//         )}

//       </ul>
//     </>
//   )
// }
//  export default function App(){
//   return(
//     <>  <h1>scientists</h1>
// <Section
// title="chemist"
// people={chemists}/>
 

// <Section
//  title="all"
// people={all}/>

//     </>
//   )
// }
// import { recipes } from './Data.js';

// function Recipe({ id, name,ingredients }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <ul>
//         {ingredients.map(ingredient =>
//           <li key={ingredient}>
//             {ingredient}
//           </li>
//         )}
//       </ul>
//     </div>
//   );
// }


// export default function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map(recipe =>
//         <Recipe 
//         {...recipe}
        
        
//         key={recipe.id} />
//       )}
//     </div>
//   );
// }

 

export default function App(){
const [counter,setCounter]=useState(0)

const hanleOntouch=()=>{
setCounter(counter-1)
}

  return(
    <><button onClick={hanleOntouch}> Increament</button>
    <h1>{counter}</h1></>
   
  )
  
  }
  

