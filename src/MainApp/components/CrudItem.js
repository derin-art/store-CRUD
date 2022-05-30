import React from "react";
import axios from "axios";

export default function CrudItem({name, price, img, description, id, setItemData}){
  
    const [patchSent, setPatchSent] = React.useState(false)
    const [deleteSent, setDeleteSent] = React.useState(false)
    const [item, setItem] = React.useState({
        name, price, img, description
    })
    const [updateGlow, setUpdateGlow] = React.useState(false)

    const updateImage = (e)=>{
        const newImage = e.target.files[0]
        setItem(prev => ({...prev, img: newImage }))
        const fileReader = new FileReader()

        fileReader.readAsDataURL(newImage)
        fileReader.onload = ()=>{
            setItem(prev => ({...prev, newDisplayimg: fileReader.result}))
        }
        setUpdateGlow(true)
    }

    const updatePrice = (e)=>{
        const newPrice = parseInt(e.target.value)
        setItem(prev => ({...prev, price: newPrice}))
        setUpdateGlow(true)
    }

    const updateDescription = (e)=>{
        const newDescription = e.target.value
        setItem(prev => ({...prev, description: newDescription}))
        setUpdateGlow(true)
    }

    const updateName = (e)=>{
        const newName = e.target.value
        setItem(prev => ({...prev, name: newName}))
        setUpdateGlow(true)
    }


    const updateSingle = async ()=>{
        setPatchSent(true)
        const itemUpdate = new FormData()

        itemUpdate.append("name", item.name)
        itemUpdate.append("price", item.price)
        itemUpdate.append("description", item.description)
        itemUpdate.append("img", item.img)
        
        console.log(itemUpdate)

        const config = {
            headers: { 'content-type': 'multipart/form-data'}
        }

        const patchedItem = await axios.patch(`http://localhost:1000/storeV1/${id}`, itemUpdate, config ).catch(err => {
            console.log(err)
            return
        })

       /*  const res = JSON.parse(JSON.stringify(patchedItem))
        console.log(res) */
        console.log(patchedItem)
        setPatchSent(false)
        setUpdateGlow(false)

     
    }

    const deleteRequest = async ()=>{
        setDeleteSent(true)
        const config = {
            headers: { 'content-type': 'multipart/form-data'}
        }

        const item = await axios.delete(`http://localhost:1000/storeV1/${id}`).catch(err => {
            console.log(err)
        })
        setItemData(prev => {
         return prev.filter((obj)=> {
                return obj._id !== id
            })
        })
        setDeleteSent(false)
    

    }

    
    
    const loaderIcon = <svg role="status" class="mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-green-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
  
    const uploadIcon = <svg xmlns="http://www.w3.org/2000/svg" className= {`${updateGlow ? "fill-green-400" : "fill-gray-600"} hover:fill-black`} viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 12.586l4.243 4.242-1.415 1.415L13 16.415V22h-2v-5.587l-1.828 1.83-1.415-1.415L12 12.586zM12 2a7.001 7.001 0 0 1 6.954 6.194 5.5 5.5 0 0 1-.953 10.784v-2.014a3.5 3.5 0 1 0-1.112-6.91 5 5 0 1 0-9.777 0 3.5 3.5 0 0 0-1.292 6.88l.18.03v2.014a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2z"/></svg>
    const deleteIcon = <svg xmlns="http://www.w3.org/2000/svg" className="hover:fill-red-700 fill-red-500" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm-8 5v6h2v-6H9zm4 0v6h2v-6h-2zM9 4v2h6V4H9z"/></svg>

    
    return <div className="flex max-w-screen px-2 pb-2">
        <div className="">
           <input id="img" name="img" type="file" onChange={(e)=>{updateImage(e)}} className="hidden"></input>
           <label htmlFor="img" className="h-10">
                 <img src={item.newDisplayimg ? item.newDisplayimg :`data:image/jpeg;base64,${img}`} className="h-10 sm:h-15 sm:w-8 w-8 rounded-l-lg border-green-400 border border-r-gray-300"></img>{/* data:image/jpeg;base64, */}
           </label>
        </div>

        <input type="text" defaultValue={name} /* value={item.name} */ onChange={(e)=>{updateName(e)}} className="text-gray-700 p-1 focus:bg-gray-200 bg-gray-100 outline-none text-center focus:outline border-y w-12 sm:w-24 text-xs border-green-400 overflow-hidden h-10">
        </input>

        <input type="number" defaultValue={price}/*  value={item.price} */ onChange={(e)=>{updatePrice(e)}} className="text-gray-700 focus:bg-gray-200 bg-gray-100 text-center outline-none focus:outline border sm:w-24 border-r-gray-300 border-l-gray-300 border-green-400 text-xs w-12 overflow-hidden h-10">
        </input>

        <textarea defaultValue={description} /* value={item.description} */ onChange={(e)=>{updateDescription(e)}} className="text-gray-700 p-1 focus:bg-gray-200 outline-none bg-gray-100 focus:outline border-y sm:w-24 border-r text-center border-green-400 w-16 overflow-hidden text-xs h-10 rounded-r-lg">

        </textarea>
        <div className="flex ml-2">
        {patchSent ? <div className="flex justify-center items-center">{loaderIcon}</div> : updateGlow ? <button className="text-xs" onClick={()=>{updateSingle()}}>
             {uploadIcon}
            </button> :
             <button className="text-xs" disabled  onClick={()=>{updateSingle()}}>
             {uploadIcon}
            </button>}


         {deleteSent ?  <div className="flex justify-center items-center ml-4">{loaderIcon}</div>  :<button className="text-xs ml-4" onClick={()=>{deleteRequest()}}>
              {deleteIcon}
            </button>}
        </div>
    </div>
}