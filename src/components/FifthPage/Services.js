import styles from './Services.module.css'

export default function Services(){
    return(
        <>
        <div className={styles.cards}>
<div className="row row-cols-1 row-cols-md-4 g-4" >
  <div className="col">
    <div className="card h-100" style={{backgroundColor:"#393939", color:"white", fontFamily:"Proxima Nova", paddingLeft:"2%", paddingRight:"2%", paddingTop:"10%", paddingBottom:"10%"}}>
    <img style={{height:"60px", width:"80px", marginLeft:"20%"}} src="./First-page//game.png" className="card-img-top" alt="..."/>
    <div className="card-body" style={{textAlign:"left"}}>
        <h3 className="card-title">User<br/>Research</h3>
        <hr/>
        <p className="card-text">12 projects done</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card h-100" style={{backgroundColor:"#393939", color:"white", fontFamily:"Proxima Nova", paddingLeft:"2%", paddingRight:"2%", paddingTop:"10%", paddingBottom:"10%"}}>
  <img style={{height:"60px", width:"80px", marginLeft:"20%"}} src="./First-page//game.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{textAlign:"left"}}>
        <h3 className="card-title">UX<br/>Design</h3>
        <hr/>
        <p className="card-text">12 projects done</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card h-100" style={{backgroundColor:"#393939", color:"white", fontFamily:"Proxima Nova", paddingLeft:"2%", paddingRight:"2%", paddingTop:"10%", paddingBottom:"10%"}}>
  <img style={{height:"60px", width:"80px", marginLeft:"20%"}} src="./First-page//game.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{textAlign:"left"}}>
        <h3 className="card-title">Usability<br/>Testing</h3>
        <hr/>
        <p className="card-text">12 projects done</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card h-100" style={{backgroundColor:"#393939", color:"white", fontFamily:"Proxima Nova", paddingLeft:"2%", paddingRight:"2%", paddingTop:"10%", paddingBottom:"10%"}}>
  <img style={{height:"60px", width:"80px", marginLeft:"20%"}} src="./First-page//game.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{textAlign:"left"}}>
        <h3 className="card-title">Rapid<br/>Prototyping</h3>
        <hr/>
        <p className="card-text">12 projects done</p>
      </div>
    </div>
  </div>

</div>
</div>
        </>
    )
}