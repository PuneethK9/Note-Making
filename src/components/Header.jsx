import React, { useEffect, useState } from "react";
import "../assets/Header.css"
import AddNote from "./AddNote"

export default function Header({refdata,updata}){

    const [st,setst] = useState(false);
    const [inp,setinp] = useState("");

    function handleadd()
    {
        setst(true);
    }

    useEffect(()=>{
        updata(inp)
    },[inp])

    return (

        <div className="h-100 w-100">
            <div id="Headercon">

                <div id="Headerdata">

                    <div id="Headertitle">
                        <h3 style={{fontWeight:700}}>Noter</h3>
                    </div>

                    <div id="Headersearch">
                        <input onChange={(e)=>{setinp(e.target.value)}} placeholder="Search By Title" id="search" type="text" ></input>
                    </div>

                    <button onClick={handleadd} id="HeaderAdd">
                        <span style={{fontSize:"2rem"}} className="material-symbols-outlined text-white">add</span>
                    </button>

                </div>

            </div>

        {
            (st) ? <AddNote gooddata={(data)=>{refdata(data)}} stdata={(data)=>{setst(data)}} /> : ""
        }

        </div>

    )
}