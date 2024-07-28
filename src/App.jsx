import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Notes from './components/Notes';
import { useState } from 'react';
import {Link} from "react-router-dom";
import Pagination from './components/Pagination';

function App() {

  const [ref,setref] = useState(false);
  const [page,setpage] = useState({});
  const [rev,setrev] = useState(null);
  const [search,setsearch] = useState("");

  function nicedata(data){
    setref(data);
  }
  
  return (
    <div className='h-100 w-100'>

      <div id='Appcon'>

        <div id='Appdata'>

          <div id="Appheader">
            <Header updata={(data)=>{setsearch(data)}} refdata={nicedata} />
          </div>

          <div id='Appcontent'>
            <Notes search={search} senddel={(data)=>{setrev(data)}} pagedata={page} gdata={ref} updata={nicedata} />
          </div>

          {
            (search!="")? ""
            :
            <Pagination updata={(data)=>{setpage(data)}} refdata={ref} refupdata={(data)=>{nicedata}} gdata={rev}/>
          }

        </div>

      </div>

    </div>
  )
}

export default App
