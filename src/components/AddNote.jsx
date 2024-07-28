import React, { useState } from "react";
import "../assets/AddNote.css"

export default function AddNote({stdata,carddata,gooddata}){

    function colfun()
    {
        if(carddata)
        return carddata.Color;

        let val = Math.floor((Math.random() * 100000007) + 1);
        let colors=["#b693fd","#fec971","#fe9b72","#e4ef8f"]
        return colors[val%4];
    }

    const [col,setcol] = useState(colfun());

    function fun() {
        var time = new Date();
        time=time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        return time;
    }

    const [data,setdata] = useState({
        Title:(carddata)?carddata.Title:"",
        Content:(carddata)?carddata.Content:"",
    });

    function handlechg(e)
    {
        const {name,value} = e.target;

        setdata((prev)=>{
            return {
                ...prev,
                [name]:value,
            };
        });
    }

    function handleadd() {

        if(data.Title.length>0 && data.Content.length>0)
        {
            let list = JSON.parse(localStorage.getItem("NotesDataNotes"));
            let counter = (carddata) ? carddata.ID : localStorage.getItem("NotesDataCounter");

            const ele = {
                ID:counter,
                Title:data.Title,
                Content:data.Content,
                Timestamp:fun(),
                Color:(carddata) ? carddata.Color : col,
            };

            if(!(carddata))
            {
                counter++;
                localStorage.setItem("NotesDataCounter",counter);
            }

            if(carddata)
            {
                for(let i=0;i<list.length;i++)
                {
                    if(list[i].ID==carddata.ID)
                    {
                        list[i].Title=ele.Title;
                        list[i].Content=ele.Content;
                        list[i].Timestamp=ele.Timestamp;
                        break;
                    }
                }
            }
            else
            list.push(ele);

            localStorage.setItem("NotesDataNotes",JSON.stringify(list));
            
            gooddata(true);
            stdata(false);
            gooddata(false);
            return;
        }
        
        if(data.Title.length==0)
        {
            alert("Please Add Title");
            return;
        }

        if(data.Content.length==0)
        alert("Please Add Content");
    }

    return (
        <div className="h-100 w-100">
            <div id="AddNotecon">

                <div id="AddNotescard" style={{margin:10,backgroundColor:col}}>

                    <div id="AddNotestitle">
                        <p style={{fontWeight:600,height:"50%",width:"100%"}}><input onChange={handlechg} value={data.Title} name="Title" placeholder="Title" id="AddTitle"></input></p>
                    </div>

                    <div id="AddNotescontent">
                        <p style={{width:"100%"}}><textarea placeholder="Content" onChange={handlechg} name="Content" value={data.Content} id="AddContent"></textarea></p>
                    </div>
                </div>

                <div id="Setstyle">
                    <button onClick={handleadd} id="Addbtn" className="btn btn-dark">{(carddata)?"EDIT":"ADD"}</button>
                    <button onClick={()=>{stdata(false)}} style={{border:"2px solid black",fontWeight:700}} id="Addbtn" className="btn btn-white">Cancel</button>
                </div>
                
            </div>
        </div>
    )
}