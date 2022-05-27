import axios from "axios";
import React from "react";

export default function AddItems({setCurrentItem, currentItem, setPreviewMode, user}){
    const [itemInput, setItemInput] = React.useState({})
    const [errorMessage, setErrorMessage] = React.useState()
    const [data, setData] = React.useState()
    const [goodPost, setGoodPost] = React.useState()


    const handleNameInput = (e)=>{
        setItemInput(prev => ({...prev, itemName : e.target.value }))
        setGoodPost(false)
        setErrorMessage("")
      

    }

    const handlePriceInput = (e)=>{
        setItemInput(prev => ({...prev, itemPrice : e.target.value}))
        setGoodPost(false)
        setErrorMessage("")
        
    }

    const imageInput = (e)=>{
        const imgFile = e.target.files[0]
        if(!imgFile){
            return
        }
        console.log(imgFile)
        const fileReader = new FileReader()
        console.log(imgFile)
       
        fileReader.onload = ()=>{
            const result = fileReader.result
            setItemInput(prev => ({...prev, result}))
        }

        fileReader.readAsDataURL(imgFile)

        setItemInput(prev => ({...prev, img: imgFile}))
        setGoodPost(false)
        setErrorMessage("")
      
        

    }

    const pushItem = async ()=>{
        setGoodPost(false)
        if(!itemInput.itemName){
            setErrorMessage("Please complete the form")
            return
        }
        else if(!itemInput.itemPrice){
            setErrorMessage("Please complete the form")
            return
        }
        else if(!itemInput.result){
            setErrorMessage("Please complete the form")
            return
        }
        console.log(itemInput)
        const formdata = new FormData()
        formdata.append("name", itemInput.itemName)
        formdata.append("price", itemInput.itemPrice)
        formdata.append("description", itemInput.itemDescription)
        if(itemInput.img){
        formdata.append("img", itemInput.img)
       }
        

        const config = {
            headers: { 'content-type': 'multipart/form-data'}
        }



        const item = await axios.post("http://localhost:1000/storeV1", formdata, config
        )
        .catch(err =>{
            console.log(err)
            const refinedErr =  JSON.stringify(err)
            console.log(JSON.parse(refinedErr))
            console.log(JSON.parse(refinedErr.response))
            return
         })
         console.log(JSON.parse(JSON.stringify(item)))
         setData(JSON.parse(JSON.stringify(item)))
         setErrorMessage("")
         setGoodPost(true)
    }


    const handleDescriptionInput = (e)=>{
        setItemInput(prev => ({...prev, itemDescription : e.target.value }))
        setGoodPost(false)
        setErrorMessage("")


    }

    /* To test the get function. Keep in Mind the State it sets to is already in use, Change it */
    const getSeverItem = async ()=>{
        const data = await axios.get("http://localhost:1000/storeV1")
        .catch(err =>{
            console.log(err)
            const refinedErr =  JSON.stringify(err)
            console.log(JSON.parse(refinedErr))
            console.log(JSON.parse(refinedErr.response))
            return

        })
        console.log(JSON.parse(JSON.stringify(data)))
        setData(JSON.parse(JSON.stringify(data)))

    }

    const imgArray = []

  

    const pushServerImages = async ()=>{
        if(data){
            const newData = data.data.data
            console.log(newData, "Hnsns")
            newData.map(item => {
                imgArray.push(<img src={`data:image/jpeg;base64,${item.img}`}></img>)
            })
        }
        else{
            return
        }
    }
    

   





    setCurrentItem(itemInput)
    const uploadIcon = <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:fill-green-400 fill-white" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 12.586l4.243 4.242-1.415 1.415L13 16.415V22h-2v-5.587l-1.828 1.83-1.415-1.415L12 12.586zM12 2a7.001 7.001 0 0 1 6.954 6.194 5.5 5.5 0 0 1-.953 10.784v-2.014a3.5 3.5 0 1 0-1.112-6.91 5 5 0 1 0-9.777 0 3.5 3.5 0 0 0-1.292 6.88l.18.03v2.014a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2z"/></svg>
    const userIcon = <svg xmlns="http://www.w3.org/2000/svg" className="fill-green-400 mr-1" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17c3.662 0 6.865 1.575 8.607 3.925l-1.842.871C17.347 20.116 14.847 19 12 19c-2.847 0-5.347 1.116-6.765 2.796l-1.841-.872C5.136 18.574 8.338 17 12 17zm0-15a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" /></svg>
    const imageTick = <svg xmlns="http://www.w3.org/2000/svg" className="fill-green-400" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11.602 13.76l1.412 1.412 8.466-8.466 1.414 1.414-9.88 9.88-6.364-6.364 1.414-1.414 2.125 2.125 1.413 1.412zm.002-2.828l4.952-4.953 1.41 1.41-4.952 4.953-1.41-1.41zm-2.827 5.655L7.364 18 1 11.636l1.414-1.414 1.413 1.413-.001.001 4.951 4.951z"/></svg>
    const saveIcon = <svg xmlns="http://www.w3.org/2000/svg" className="fill-green-400"  viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M18 21v-8H6v8H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h13l4 4v13a1 1 0 0 1-1 1h-2zm-2 0H8v-6h8v6z"/></svg>

  const imageLoadedText = <p> {imageTick}Image Loaded</p>

    

    return <div className="flex items-center justify-center flex-col">
       
                <div className="w-48 border border-gray-300 p-2 rounded-lg bg-gray-200">
                    <p className="text-sm font-bold mb-2 text-gray-700 uppercase flex justify-center items-center">{userIcon}{user.name}'s ITEM CARD</p>
                    <p className="text-xs mb-1 text-gray-400">Fill the following form to create a new item</p>
                    <form className="flex flex-col justify-center items-center w-full">
                        <label   htmlFor="img"  className={`bg-gray-700 rounded mb-4 py-2 px-3 w-full text-white hover:bg-gray-900`}> {itemInput.result ? imageLoadedText : "Click to input image"}
                         </label>
                         <input type="file" id="img" onChange={(e)=>{imageInput(e)}} className={`ml-2 mb-4 text-sm hidden `} accept="image/*" name="img" placeholder="Display Image"></input>
                         <input type="text" value={itemInput.itemName} onChange={(e)=>{handleNameInput(e)}} className="mb-4 focus:outline outline-gray-400 outline-2 bg-gray-100 outline-gray-300 rounded placeholder:text-gray-500 p-2 w-full" placeholder="Name"></input>
                        <input type="number" value={itemInput.itemPrice} onChange={(e)=>{handlePriceInput(e)}} className="bg-gray-100 mb-4 focus:outline outline-2 outline-gray-400 p-2 placeholder:text-gray-500 rounded w-full" placeholder="Price"></input>
                        <textarea value={itemInput.itemDescription} onChange={(e)=>{handleDescriptionInput(e)}} className="bg-gray-100 p-2 outline-gray-300 focus:outline outline-2 outline-gray-400 placeholder:text-gray-500 rounded w-full" placeholder="Description"></textarea>
                    </form>

                </div>

                <div className="flex justify-center items-center">
                    <button className="px-3 py-1 mr-2 w-24 bg-green-400 text-xs rounded-sm font-bold mt-2 hover:bg-black hover:text-green-400 uppercase text-white" onClick={()=>{setPreviewMode(prev => !prev)}}>preview mode</button>
                    <button className="px-3 flex justify-center items-center group py-2 w-24 bg-green-400 text-xs rounded-sm font-bold mt-2 hover:bg-black hover:text-green-400 uppercase text-white" onClick={()=>{pushItem()}} > 
                       {uploadIcon} <p className="ml-2"> Push</p>
                     </button>

                </div>
              {errorMessage &&   <p className="text-red-500 text-xs font-bold">{errorMessage}</p>}
              {goodPost && <p className="flex uppercase text-xs font-bold justify-center items-center mt-2 text-gray-700">Saved succesful<p className="ml-1">{saveIcon}</p></p>}
                
            </div>
}