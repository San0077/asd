import logo from './logo.svg';
import React, { useEffect, useState, useContext, createContext, } from 'react';
function App(){
  var [movie,setmovie]=useState()
  fetch(`http://jsonplaceholder.typicode.com/users`)
  .then(data=>data.json().then(mov=>setmovie(mov)))
 
  return (
   <div>
       { movie ? movie.map(data =>
        <h4>{data.address.street}</h4>
       ):"nothing"}
          
   </div>
    
  );
}

export default App;
