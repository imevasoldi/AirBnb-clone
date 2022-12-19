const Card = (props) => {
    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if (props.location === "Online"){

        badgeText = "ONLINE"
    }
    return <div className="card">
        {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} */}
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={props.coverImg}/>
        <div className="stats--group">
            <img style={{width: "14px", height: "14px"}} src="star.png"/>
            <span className="rating">{props.stats.rating}</span> 
            <span className="views">({props.stats.reviewCount}) ·</span>
            <span className="views">{props.location}</span>
        </div>
        <p>{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
}

export default Card