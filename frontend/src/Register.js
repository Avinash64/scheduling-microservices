import './Register.css';
import React, { useState } from 'react';


function Register() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")  


  
  const submit = () => {
    if (phone && email && name){
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"name":"${name}","email":"${email}","phone": "${phone}"}`
      };
      fetch('http://127.0.0.1:8000/', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

  }
}

  return (
    <div className="register">
        <div className='field'>
            <label name="name">Name:</label>
            <input placeholder='name' onChange={(text) => setName(text.target.value)}></input>
        </div>
        <div className='field'>
            <label name="email">Email:</label>
            <input placeholder='email' onChange={(text) => setEmail(text.target.value)}></input>
        </div>
        <div className='field'>
            <label name="phone">Phone:</label>
            <input placeholder='phone' onChange={(text) => setPhone(text.target.value)}></input>
        </div>
        <button onClick={()=> submit()}>Register</button>
    </div>
  );
}

export default Register;
