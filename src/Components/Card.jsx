const Card = (props) => {
    return <div className="card">
        <div className="card--badge">SOLD OUT</div>
        <img src={props.url}/>
        <div className="stats--group">
            <img style={{background: "green", width: "14px", height: "14px"}} src={props.starurl}/>
            <span className="rating">{props.rating}</span> 
            <span className="views">({props.views})·</span>
            <span className="views">{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
}

export default Card