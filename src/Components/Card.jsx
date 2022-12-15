const Card = () => {
    return <div className="card">
        <img src="/katie-zaferes.png"/>
        <div className="stats--group">
            <img style={{background: "green", width: "14px", height: "14px"}} src="/star.png"/>
            <span className="rating">5.0</span> 
            <span className="views">(6)·</span>
            <span className="views">USA</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><span className="bold">From $136</span> / person</p>
    </div>
}

export default Card