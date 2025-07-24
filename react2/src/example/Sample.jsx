import React from 'react'

const Mango = () =>{
    return (
        <h2>Mangoes are sweet</h2>
    )
}

const Grapes = () => {
    return (
        <h2>Grapes are juicy</h2>
    )
}
function Sample() {
  return (
    <div>Sample
        <Grapes />
        <Mango />
        
    </div>
        
  )
}

export default Sample ;

// src/Sample.js
// import React from 'react';

// function Sample() {
//   return (
//     <div>
//       <h2>This is the Sample component</h2>
//     </div>
//   );
// }

// export default Sample;
