import React, { useEffect, useState } from "react";
import "../assets/Notes.css"
import AddNote from "./AddNote";

export default function Notes({gdata,updata,pagedata,senddel,search}){

    function fun() {
        var time = new Date();
        time=time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        return time;
    }
    
    const [data,setdata] = useState([{ 
        ID:1001,
        Title:"Hi There!!",
        Content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nobis delectus, voluptatem necessitatibus sequi odit illo enim, culpa veniam placeat temporibus eum, expedita unde rerum cumque quisquam minus labore! Cupiditate.",
        Timestamp:fun(),
        Color:"#b693fd",
    }]);

    const [st,setst] = useState(null);
    const [del,setdel] = useState(null);
    const [rec,setrec] = useState([]);

    useEffect(()=>{
        senddel(del);
    },[del]);

    useEffect(()=>{

        if(del)
        {
            const list = JSON.parse(localStorage.getItem("NotesDataNotes"));
            let chg;
            for(let i=0;i<list.length;i++)
            {
                if(list[i].ID==del.ID)
                {
                    list.splice(i,1);
                    break;
                }
            }
            localStorage.setItem("NotesDataNotes",JSON.stringify(list));
            //setdata(list);
            updata(true);
            setdel(null);
        }

    },[del]);

    useEffect(()=>{

        if(!(localStorage.getItem("NotesDataNotes")))
        {
            localStorage.setItem("NotesDataNotes",JSON.stringify(data));
            localStorage.setItem("NotesDataCounter",1002);
            console.log("Data Set");
        }
        else
        {
            const nice = localStorage.getItem("NotesDataNotes");
            setdata(JSON.parse(nice));
        }
        if(gdata)
        updata(false);

    },[gdata]);

    useEffect(()=>{

        const prev = pagedata.nbr-1;
        const fst = prev*pagedata.perpage+1;
        const lst = pagedata.nbr*pagedata.perpage;

        const list = JSON.parse(localStorage.getItem("NotesDataNotes"));

        const val=[];
        for(let i=fst;i<=lst;i++)
        {
            if((i-1)<list.length)
            val.push(list[i-1]);
        }
        setrec(val);
        updata(true);

    },[pagedata]);

    useEffect(()=>{

        if(search=="")
        {
            updata(true);
            updata(false);
            return;
        }

        const list = JSON.parse(localStorage.getItem("NotesDataNotes"));

        const com=[];
        for(let i=0;i<list.length;i++)
        {
            if(list[i].Title.toLowerCase().includes(search.toLowerCase()))
            com.push(list[i]);
        }
        setrec(com);

    },[search]);

    return (

        <div className="h-100 w-100">
            <div id="Notescon">

                <div id="Notesdata">

                    {
                        rec.map((item,i)=>{

                            return (

                                <div id="Notescard" style={{backgroundColor:item.Color}} key={item.ID}>

                                    <div id="Notestitle">
                                        <p style={{fontWeight:600}}>{item.Title}</p>
                                    </div>

                                    <div id="Notescontent">
                                        <p>{item.Content}</p>
                                    </div>

                                    <div id="Notesop">
                                        <div>
                                            {item.Timestamp}
                                        </div>
                                        <div id="Notesset">
                                            <div id="Notesicon">
                                                <span onClick={()=>{setst(item)}} style={{fontSize:"1.2rem"}} className="material-symbols-outlined text-white">edit</span>
                                            </div>
                                            <div id="Notesicon">
                                                <span onClick={()=>{setdel(item)}} style={{fontSize:"1.2rem"}} className="material-symbols-outlined text-white">delete</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                
                            )
                        })
                    }

                </div>

            </div>

            {
                (st) ? <AddNote carddata={st} stdata={()=>{setst(null)}} gooddata={(data)=>{updata(data)}} /> : ""
            }
        </div>

    )

}