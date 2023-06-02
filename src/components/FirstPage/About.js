

import styles from './About.module.css'

export default function About(){

    return(
<div className={styles.cards}>
<div className="row row-cols-1 row-cols-md-3 g-4" >
  <div className="col">
    <div className="card h-100" style={{backgroundColor:"#393939", color:"white", fontFamily:"Proxima Nova", paddingLeft:"2%", paddingRight:"2%", paddingTop:"10%", paddingBottom:"10%"}}>
    <img style={{height:"60px", width:"80px", marginLeft:"20%"}} src="./First-page//game.png" className="card-img-top" alt="..."/>
    <div className="card-body" style={{textAlign:"left"}}>
        <h3 className="card-title">Game Development</h3>
        <hr/>
        <p className="card-text">12 projects done</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card h-100" style={{backgroundColor:"#393939", color:"white", fontFamily:"Proxima Nova", paddingLeft:"2%", paddingRight:"2%", paddingTop:"10%", paddingBottom:"10%"}}>
  <img style={{height:"60px", width:"80px", marginLeft:"20%"}} src="./First-page//game.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{textAlign:"left"}}>
        <h3 className="card-title">Game Development</h3>
        <hr/>
        <p className="card-text">12 projects done</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card h-100" style={{backgroundColor:"#393939", color:"white", fontFamily:"Proxima Nova", paddingLeft:"2%", paddingRight:"2%", paddingTop:"10%", paddingBottom:"10%"}}>
  <img style={{height:"60px", width:"80px", marginLeft:"20%"}} src="./First-page//game.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{textAlign:"left"}}>
        <h3 className="card-title">Game Development</h3>
        <hr/>
        <p className="card-text">12 projects done</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card h-100" style={{backgroundColor:"#393939", color:"white", fontFamily:"Proxima Nova", paddingLeft:"2%", paddingRight:"2%", paddingTop:"10%", paddingBottom:"10%"}}>
  <img style={{height:"60px", width:"80px", marginLeft:"20%"}} src="./First-page//game.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{textAlign:"left"}}>
        <h3 className="card-title">Game Development</h3>
        <hr/>
        <p className="card-text">12 projects done</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card h-100" style={{backgroundColor:"#393939", color:"white", fontFamily:"Proxima Nova", paddingLeft:"2%", paddingRight:"2%", paddingTop:"10%", paddingBottom:"10%"}}>
  <img style={{height:"60px", width:"80px", marginLeft:"20%"}} src="./First-page//game.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{textAlign:"left"}}>
        <h3 className="card-title">Game Development</h3>
        <hr/>
        <p className="card-text">12 projects done</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card h-100" style={{backgroundColor:"#393939", color:"white", fontFamily:"Proxima Nova", paddingLeft:"2%", paddingRight:"2%", paddingTop:"10%", paddingBottom:"10%"}}>
  <img style={{height:"60px", width:"80px", marginLeft:"20%"}} src="./First-page//game.png" className="card-img-top" alt="..."/>
      <div className="card-body" style={{textAlign:"left"}}>
        <h3 className="card-title">Game Development</h3>
        <hr/>
        <p className="card-text">12 projects done</p>
      </div>
    </div>
  </div>
  <div class="col-md-12 text-center">
  <button>Explore More Services &#8599;</button>
</div>
</div>
</div>
    )
}