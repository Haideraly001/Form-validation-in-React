import React, { useState } from 'react'

const InputProfiles = () => {

  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  })

  const handleSubmit = async (e) => {

    e.preventDefault()
    console.log("new user", input);
    const resp = await fetch("http://localhost:8000/api/v1/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input)
    })
    console.log(resp);

    const result = await resp.json()
    console.log(result);

  }

  return (
    <div className='inputProfile'>
      <h4>Input User</h4>
      <form action="" onSubmit={handleSubmit} >
        <input type="text" placeholder='Enter Name' value={input.name} id="Name" onChange={(e) => setInput({
          ...input, name: e.target.value
        })} />
        <input type="text" placeholder='Enter Email' value={input.email} id="email" onChange={(e) => setInput({
          ...input, email: e.target.value
        })} />
        <input type="text" placeholder='Enter Phone' value={input.phone} id="phone" onChange={(e) => setInput({
          ...input, phone: e.target.value
        })} />
        <input type="text" placeholder='Enter Address' value={input.address} id="address" onChange={(e) => setInput({
          ...input, address: e.target.value
        })} />
        <button type='submit' > submit</button>
      </form>
    </div>
  )
}

export default InputProfiles
