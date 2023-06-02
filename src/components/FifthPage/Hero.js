import Card from './Card'
import styles from './Home.module.css'
import Services from './Services'
import BookMeeting from '../FirstPage/BookMeeting';
import Testimonials from '../FirstPage/Testimonials';

export default function Hero(){
    return(
<>
<div className="card my-5 p-5 no-hover" style={{width: "18rem;", border:"none", textAlign:"left", fontFamily:'Proxima Nova'}}>
  <div className="card-body">
    <h1 className="card-title specific-card">UI/UX<br/>Design</h1>
    <p className="card-text" >Home/Portfolio</p>
  </div>
</div>

<div className={styles.section1}>
    <Services/>
</div>

<div className={styles.section2}>
<Card/>
</div>

<div className={styles.section3}>
<BookMeeting/>
</div>

<div className={styles.section4}>
  <div className='row container'>
    <div className='col-12 col-md container' style={{textAlign:"left"}}>
      <h1 className='responsive-font-example' style={{fontWeight:"700"}}>Testimonials</h1>
      <p>Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent elementum commodo.</p>
    </div>
    <div className='col-12 col-md'>
      <Testimonials/>
    </div>
  </div>
</div>

<div className={styles.section5}>
<div className="card no-hover" style={{backgroundColor:"transparent", color:"white", border:"none"}}>
  <h1 style={{fontSize:"80px", fontWeight:"700"}} className="card-title dynamic-spacing">BEING CREATIVE</h1>
</div>
</div>
</>
    )
}