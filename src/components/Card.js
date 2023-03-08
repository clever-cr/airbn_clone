const Card = ({ openSpots, location, img, rating, reviewCount, title, price }) => {
    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={img} className="card--image" alt="" />
            <div className="flex items-center">
                <img src="/star.png" alt="star" className="card--star" />
                <p className="">{rating} </p>
                <p className="gray"> {reviewCount} •</p>
                <p className="gray">{location}</p>
            </div>

            <p className="card--title">{title}</p>
            <p className="card--price"><span className="bold">From ${price}</span> / person</p>
        </div >
    )
}

export default Card