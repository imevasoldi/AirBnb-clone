const Card = (props) => {
    let badgeText
    if (props.card.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if (props.card.location === "Online"){

        badgeText = "ONLINE"
    }
    return <div className="card">
        {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} */}
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={props.card.coverImg}/>
        <div className="stats--group">
            <img style={{background: "green", width: "14px", height: "14px"}} src="star.png"/>
            <span className="rating">{props.card.stats.rating}</span> 
            <span className="views">({props.card.stats.reviewCount})·</span>
            <span className="views">{props.card.location}</span>
        </div>
        <p>{props.card.title}</p>
        <p><span className="bold">From ${props.card.price}</span> / person</p>
    </div>
}

export default Card