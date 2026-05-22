import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../common/Header'


export default function Home() {

    let [uname, setUname] = useState("")
    let [password, setpassword] = useState("")

    let handleform = (event) => {
        event.preventDefault();
        console.log(uname);
        console.log(password);

    }



    return (
        <div>Home

            <Header></Header>

            <form onSubmit={handleform}>

                <label>Username</label>
                <input type="text" value={uname} onChange={(event) => setUname(event.target.value)} />
                <br></br>
                <br></br>
                
                <label>Password</label>
                <input type="password" value={password} onChange={(event) => setpassword(event.target.value)} />

                <br></br>
                <br></br>



                <button>Save</button>

            </form>

        </div>


    )
}