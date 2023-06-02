import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
  } from '@chakra-ui/react';
  import styles from './Home.module.css';
import Cards from './Cards';
import BookMeeting from './BookMeeting';
import Partnership from './Partnership';
  
  export default function Hero() {
    return (
        <>
<div className="card my-5 p-5 no-hover" style={{width: "18rem;", border:"none", textAlign:"left", fontFamily:'Proxima Nova'}}>
  <div className="card-body">
    <h1 className="card-title specific-card">IT <br/> Services</h1>
    <p className="card-text">Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis.</p>
  </div>
</div>

<div className="card mb-3 p-5 no-hover" style={{maxWidth: "540px;", border:"none",fontFamily:'Proxima Nova'}}>
  <div className="row g-0">
    <div className="col-md-4">
    <div className="col-md-8">
      <div className="card-body">
      <h1 className="card-title specific-card"style={{textAlign:"left"}}>What we offer</h1>
      </div>
    </div>
    </div>
    <div className="col-md-8 my-card-body">
  <div className="card-body" style={{ textAlign:"justify", maxWidth:"600px"}}>
    <h5 className="card-title" style={{fontSize:"32px"}}>Lorem ipsum dolor sit amet consectetur. Vestibulum nascetur vitae sapien</h5>
    <p className="card-text">Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In ornare nisl leo odio magna.</p>
  </div>
</div>

  </div>
</div>

<div className={styles.section1}>
<Cards/>
</div>

<div className="card mb-3 p-5 no-hover" style={{maxWidth: "540px;", border:"none",fontFamily:'Proxima Nova'}}>
  <div className="row g-0">
    <div className="col-md-4">
    <div className="col-md-8">
      <div className="card-body">
      <h1 className="card-title my-title"style={{fontSize:"80px", fontWeight:"700", textAlign:"left"}}>Why choose us</h1>
      </div>
    </div>
    </div>
    <div className="col-md-8 my-card-body">
  <div className="card-body" style={{ textAlign:"justify", maxWidth:"600px"}}>
    <h5 className="card-title" style={{fontSize:"32px"}}>Lorem ipsum dolor sit amet consectetur. Vestibulum nascetur vitae sapien</h5>
    <p className="card-text">Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In ornare nisl leo odio magna.</p>
  </div>
</div>

  </div>
</div>

<div className={styles.section2}>
<BookMeeting/>
</div>

<Partnership/>

<div className={styles.section3}>
<div className="card no-hover" style={{backgroundColor:"transparent", color:"white", border:"none"}}>
  <h1 style={{fontSize:"80px", fontWeight:"700"}} className="card-title dynamic-spacing">BEING CREATIVE</h1>
</div>

</div>
</>
    );
  }
  

  
  
