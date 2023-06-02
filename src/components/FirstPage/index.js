import styles from './Home.module.css'
import About from './About';
import Main from './Main';
import CompanyStats from './CompanyStats';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import BookMeeting from './BookMeeting';
import Footer from '../Footer';

export default function Home(){
return(
<>
<Main/>
<CompanyStats/>
<div className={styles.section1}>
<About/>
</div>
<div className={styles.section2}>
  <div className='row'>
    <div className='col'>
<h1>Portfolio</h1>
<p>Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent elementum commodo.</p>
    <button>More Portfolio</button>
    </div>
    <div className='col'>
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
    <div className='col container'>
<h1 className='responsive-font-example'>Testimonials</h1>
<p>Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent elementum commodo.</p>
    </div>
    <div className='col'>
  <Testimonials/>
    </div>
  </div>
</div>

<div className={styles.section5}>
  <BookMeeting/>
</div>

<div className={styles.section6}>
<div class="card-group" style={{paddingLeft:"5%", paddingRight:"5%"}}>
<div class="card no-hover" style={{border:"none"}}>
  <img style={{height:"200px", width:"180px"}} src="./First-page/image6.png" class="card-img-top" alt="..."/>
</div>
<div class="card no-hover" style={{border:"none"}}>
  <img style={{height:"200px", width:"180px"}} src="./First-page/image7.png" class="card-img-top" alt="..."/>
</div>
<div class="card no-hover" style={{border:"none"}}>
  <img style={{height:"200px", width:"180px"}} src="./First-page/image8.png" class="card-img-top" alt="..."/>
</div>
<div class="card no-hover" style={{ border:"none"}}>
  <img style={{height:"200px", width:"180px"}} src="./First-page/image9.png" class="card-img-top" alt="..."/>
</div>
<div class="card no-hover" style={{border:"none"}}>
  <img style={{height:"200px", width:"180px"}} src="./First-page/image10.png" class="card-img-top" alt="..."/>
</div>
</div>
</div>


<div className={styles.section7}>
<div className="card no-hover" style={{backgroundColor:"transparent", color:"white", border:"none"}}>
  <h1 style={{fontSize:"80px", fontWeight:"700"}} className="card-title dynamic-spacing">BEING CREATIVE</h1>
</div>

</div>

<div className={styles.section8}>

</div>

</>
)
}