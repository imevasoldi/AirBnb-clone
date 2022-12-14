function Info () {
    return <div>
    <img style={{borderRadius: "10px 10px 0px 0px"}} src='/img1.jpeg'/>
        <div className="info--content">
            <h1 className="info--title" 
            >
                Juan J. Mejía</h1>
            <h2 className="info--subtitle" 
            >
                FrontEnd Developer</h2>
            <h3 className="website--link"> juan.mejia.com</h3>
        </div>
        <div className="buttons--">
            <button className="button--mail">
                <i style={{marginRight: "10%"}} className="mail icon"/>
                Email</button>
            <a href="https://github.com/imevasoldi" target="_blank">
            <button className="button--linkedin">
                <i style={{marginRight: "10%"}} className="github icon"/>
                Github</button>
            </a>
        </div>
        </div>
}

export default Info
