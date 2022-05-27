import React from "react";
import CardInfo from "./itemCardInfo";

export default function ItemCard({currentItem}){
    console.log(Object.entries(currentItem))
    const checkIfempty = ()=>{
        if(currentItem.img){
            return true
        }
        else if(currentItem.itemName){
            return true
        }
        else if(currentItem.itemPrice){
            return true
        }
        else if(currentItem.itemDescription){
            return true
        }
        else{
            return false
        }
    }
    console.log(currentItem)
    return ( <div className="border w-48 bg-gray-100 rounded-sm border-gray-300">
                {checkIfempty() ? <>
                    <div className="w-full h-64 mb-2">
                    <img  className="w-full" src={currentItem.result}></img>
                </div>
                <CardInfo currentItem={currentItem} /></>: 
                <div className="p-2 self-center">
                   <p className="ml-5 text-red-400"> No data available</p>
                    </div>}
             

            </div>
    )
}