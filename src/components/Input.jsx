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


    return (
        <div>
            <input name="Name" value={Name} onChange={e => setName(e.target.value)} type="text" />
            <button onClick={e => set(e)}>Input</button>
        </div>
    )
}

export default Input
