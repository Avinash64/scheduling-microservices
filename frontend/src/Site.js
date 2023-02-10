import './Register.css';
import React, { useState } from 'react';


function Site() {
  const [name,setName] = useState("")
  const [capacity,setCapacity] = useState("")


  
  const submit = () => {
    if (capacity && name){
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"address":"${name}","capacity":"${capacity}"}`
      };
      fetch('http://127.0.0.1:8001/', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

  }
}

  return (
    <div className="register">
        <div className='field'>
            <label name="name">address:</label>
            <input placeholder='name' onChange={(text) => setName(text.target.value)}></input>
        </div>
        <div className='field'>
            <label name="capacity">capacity:</label>
            <input placeholder='capacity' onChange={(text) => setCapacity(text.target.value)}></input>
        </div>
        <button onClick={()=> submit()}>Register</button>
    </div>
  );
}

export default Site;
