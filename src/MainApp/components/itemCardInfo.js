import React from "react";
import StarRatingComponent from "react-star-rating-component"


export default function CardInfo({currentItem}){
    const [startRating, setStarRating] = React.useState(0)
    const price = `$${currentItem.itemPrice}`
    const onStarChange = (nextValue, prevValue, name)=>{
        setStarRating(nextValue)
    }
    return (<div className="bg-gray-100 font-mono pl-2">
                    {currentItem.itemName && <div className="text-sm  mb-2 uppercase">{currentItem.itemName}</div>}
                   {currentItem.itemPrice && <div className="text-xs mb-2 ">{price}</div>}
                    <StarRatingComponent name="rating" editing={true} starColor="" onStarClick={()=>{onStarChange()}} emptyStarColor="#b2beb5" value={startRating}></StarRatingComponent>
    </div>)
}