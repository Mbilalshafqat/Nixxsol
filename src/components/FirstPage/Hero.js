import Main from './Main';
import CompanyStats from './CompanyStats';
import styles from './Home.module.css'
import About from './About';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import BookMeeting from './BookMeeting';
import Partnership from '../SecondPage/Partnership';

export default function Hero(){
    return(
<>
<Main/>
<CompanyStats/>

<div className={styles.section1}>
    <About/>
</div>

<div className={styles.section2}>
<div className='row container'>
<div className='col pt-md-5' style={{textAlign:"left"}}>
    <h1 style={{fontWeight:"700"}}>Portfolio</h1>
    <p>Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent elementum commodo.</p>
    <button>More Portfolio</button>
</div>
<div className='col-12 col-md'>
   <Portfolio/>
    </div>
  </div>
  </div>

  <div className={styles.section3}>
<div className='row'>
  <div className='col'>
<img className='img-fluid' src='./First-page/image1.png' alt=''/>
  </div>
  <div className='col'>
  <img className='img-fluid' src='./First-page/image2.png' alt=''/>
    </div>
    <div className='col'>
    <img className='img-fluid' src='./First-page/image3.png' alt=''/>
    </div>
    <div className='col'>
    <img className='img-fluid' src='./First-page/image4.png' alt=''/>
    </div>
    <div className='col'>
    <img className='img-fluid' src='./First-page/image5.png' alt=''/>
    </div>
</div>
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
    <BookMeeting/>
</div>

<div className={styles.section6}>
    <Partnership/>
</div>

<div className={styles.section7}>
<div className="card no-hover specific-card" style={{backgroundColor:"transparent", color:"white", border:"none"}}>
  <h1 style={{fontSize:"80px", fontWeight:"700"}} className="card-title dynamic-spacing">BEING CREATIVE</h1>
</div>

</div>


</>

    )
}