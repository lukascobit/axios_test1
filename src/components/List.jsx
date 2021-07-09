import React, { useState } from 'react';
import axios from 'axios';

function UserForm() {
    const [people, setPeople] = useState([])

    async function get(){
        
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        setPeople(res.data)
    }


    return (
        <div>
            <button onClick={get}>Get</button>
            <ol>
                {people.map(person=>{
                    return(
                        <li key={person.id}>{person.name}</li>
                    )
                })}
            </ol>
        </div>
    )
}

export default UserForm;
