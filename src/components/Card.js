import React from "react";




const Card = (props) => {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.img} className="card--image" alt="" />
            <div className="flex items-center">
                <img src="/star.png" className="card--star" />
                <p className="">{props.rating} </p>
                <p className="gray"> {props.reviewCount} •</p>
                <p className="gray">{props.location}</p>
            </div>

            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div >
    )
}

export default Card