import Card from './Card';
import styles from './Home.module.css';

  
  export default function Hero() {
    return (
<>
<div className="card my-5 p-5 no-hover" style={{width: "18rem;", border:"none", textAlign:"left", fontFamily:'Proxima Nova'}}>
  <div className="card-body">
    <h1 className="card-title"style={{fontSize:"77px", fontWeight:"700"}}>Our<br/>Portfolio</h1>
    <p className="card-text" >Home/Portfolio</p>
    <p className="card-text" ><span style={{fontWeight:"700"}}>Filter by: All </span><span style={{color:"darkgrey"}}>/ Creative Design / Game Development / Web Development / Mobile Development</span></p>
  </div>
</div>

<div className={styles.section1}>
  <Card/>
</div>

<div className={styles.section2}>
<div className="card no-hover" style={{backgroundColor:"transparent", color:"white", border:"none"}}>
  <h1 style={{fontSize:"80px", fontWeight:"700"}} className="card-title dynamic-spacing">BEING CREATIVE</h1>
</div>
</div>
</>
    )
  }