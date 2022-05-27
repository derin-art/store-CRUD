import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import LockedPage from "../setup/LockedPage"
import AddItems from "./components/AddItems";
import ItemCard from "./components/itemCard";
import Header from "./utils/header";
import CrudComponent from "./components/CrudComponent";

export default function MainPage({user}){
    const [currentItem, setCurrentItem] = React.useState({result: "", itemName: "", itemPrice:""})
    const [previewMode, setPreviewMode] = React.useState(false)

    const previewWidth = ()=>{
      return previewMode ? "w-fit" : "w-full"
    }


    const [scrollPosition, setSrollPosition] = React.useState(0);
    const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
};

    React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [])



    return ( user.status === 200 ?
     <>
     <div className="h-2 bg-white fixed w-full mb-4 pb-16" style={scrollPosition > 5.5 ? {"boxShadow": "1px 1px 30px #D3D3D3"}: {}}></div>

        <div className="flex items-center justify-center">  
            <div className="fixed mt-6 pt-4 pb-4">
                <Header />
            </div>
        </div>


      <Routes>


        <Route exact path="/" element={
            <>
            <div className="sm:h-screen sm:w-screen p-2 pt-10">
                <div>
                        {<div className={`items-start mt-8 flex overflow-x-auto pb-4 ${previewWidth()} sm:w-full justify-center`}>
                          <div className={`mb-2 self-center sm:ml-0 sm:pt-5 pt-3`}>
                              <AddItems user={user} setCurrentItem= {setCurrentItem} currentItem={currentItem} setPreviewMode={setPreviewMode} />
                          </div>
                          {previewMode ? <div className="flex justify-center items-center mr-2 pb-6 sm:pt-5 pt-3"> <ItemCard currentItem={currentItem}></ItemCard></div>: null}
                    </div>}
                </div>
            </div>
        </>
        }>
        </Route>

        <Route exact path="edit" element={<CrudComponent />}></Route>



      </Routes>
     
     
     
     
     
     </>
     :
    
    <LockedPage />

    
    )
}

