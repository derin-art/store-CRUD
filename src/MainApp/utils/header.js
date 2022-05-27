import React from "react";
import { Link, useMatch } from "react-router-dom";

export default function Header(){
    const [edit, setEdit] = React.useState(false)
    const [home, setHome] = React.useState(true)


    const uploadHomeIcon = <svg  className={`${home? "fill-green-400" : "fill-gray-600 group-hover:fill-black group-focus:fill-black"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 20.981a6.5 6.5 0 0 1-2.936-12 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12V21H7v-.019zM13 13h3l-4-5-4 5h3v4h2v-4z"/></svg>
    const storageIcon = <svg xmlns="http://www.w3.org/2000/svg" className={` ${edit? "fill-green-400" : "fill-gray-600 group-hover:fill-black group-focus:fill-black"} `} viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 9.5v3c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5v-3c0 2.485 4.03 4.5 9 4.5s9-2.015 9-4.5zm-18 5c0 2.485 4.03 4.5 9 4.5s9-2.015 9-4.5v3c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5v-3zm9-2.5c-4.97 0-9-2.015-9-4.5S7.03 3 12 3s9 2.015 9 4.5-4.03 4.5-9 4.5z"/></svg>
   
    

   
   return (<div className="w-full h-12 py-2 bg-white flex pt-6 pb-6 justify-center mt-2 p-8">
       
          <Link to="/">
            <button onClick={()=>{
            setEdit(false)
            setHome(true)
                
            }} className="mr-3 items-center flex justify-center group border p-1 border-gray-400 rounded-lg hover:border-black" >
                    <div className="text-xs mr-2 text-gray-600 group-hover:text-black"> Upload Item</div>
                        {uploadHomeIcon}
                </button>
          </Link>
    

     
           <Link to="edit">
                <button onClick={()=>{
                    setEdit(true)
                    setHome(false)
                }} className="ml-2 flex items-center justify-center group p-1 rounded-lg border border-gray-400 hover:border-black" >
                    <div className="text-xs mr-2 text-gray-600 group-hover:text-black">Edit Item</div>
                    {storageIcon}
                </button>
           </Link>
      
    
    </div>)
}