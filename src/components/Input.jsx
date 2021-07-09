import React, { useState } from 'react'
import axios from 'axios'

function Input() {
    const [Name, setName] = useState("")

    async function set(e){
        e.preventDefault()
        const res = await axios.post("https://jsonplaceholder.typicode.com/users", {Name})
        console.log(res);
        console.log(res.data); 
    }

    async function deleteR(e){
        e.preventDefault()
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${Name}`, {Name})
        console.log(res);
        console.log(res.data); 
    }


    return (
        <div>
            <p>Type in name of input you want to add or if of input you want to delete</p>
            <input name="Name" value={Name} onChange={e => setName(e.target.value)} type="text" />
            <button onClick={e => set(e)}>Input</button>
            <button onClick={e => deleteR(e)}>Delete</button>
        </div>
    )
}

export default Input
