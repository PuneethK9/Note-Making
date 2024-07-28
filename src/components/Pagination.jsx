import React, { useEffect, useState } from "react";
import { json, Link } from "react-router-dom";

export default function Pagination({refdata,updata,refupdata,gdata}){

    const perpage = 10;

    const [nbr,setnbr] = useState(1);
    const [tol,settol] = useState(1);
    const [pages,setpages] = useState([]);
    const [pagestart,setpagestart] = useState(1);

    useEffect(()=>{

        if(localStorage.getItem("NotesDataNotes"))
        {
            const list = JSON.parse(localStorage.getItem("NotesDataNotes"));
            const maxs=(Math.ceil(list.length/perpage));

            updata({nbr,perpage});

            //console.log(refdata);

            let com = [];
            for(let i=1;i<=maxs;i++)
            {
               com.push(<a style={{display:(i>=(pagestart+6) || i<pagestart)?"none":""}} onClick={()=>{setnbr(i)}} key={i} id={(nbr===i)?"AppLinkActive":"AppLink"} href='#'>{i}</a>);
            }
            settol(maxs);
            setpages(com);
            refupdata(false);
        }
        
    },[nbr,refdata,gdata]);

    function handleryt()
    {
        if(nbr!=(pagestart+(Math.min(tol-1,5))))
        {
            setnbr(nbr+1);
            return;
        }

        if(pagestart<=(tol-6))
        {
            const lst = pagestart+5;
            setnbr(lst+1);
            setpagestart(pagestart+1);
        }
    }

    function handlelft()
    {
        if(nbr!=pagestart)
        {
            setnbr(nbr-1);
            return;
        }

        if(pagestart>1)
        {
            setnbr(pagestart-1);
            setpagestart(pagestart-1);
        }
    }

    return (
        <div id='AppPagination'>
            <a onClick={handlelft} id='AppLink' href='#'>&laquo;</a>
            { pages }
            <a onClick={handleryt} id='AppLink' href='#'>&raquo;</a>
        </div>
    )
}