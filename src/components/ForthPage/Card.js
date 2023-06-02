export default function Card(){
    return (
        <>
     <div className="row row-cols-1 row-cols-md-2 g-4">
     <div className="col">
            <div className="card no-hover">
                <img src="./Forth-page/rec1.png" className="card-img img-fluid" alt="..."/>
                <div class="card-img-overlay text-white" style={{textAlign:"left", paddingTop:"45%", width:"100%"}}>
                <h5 class="card-title h4 h5-sm h3-md">Zombie Land</h5>
                <p class="card-text text-sm">Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In ornare nisl leo odio magna.</p>
                </div>
            </div>
        </div>
        <div className="col"> 
         <div className="card no-hover">
      <img src="./Forth-page/rec2.png" className="card-img-top" alt="..."/>
     </div>
  </div>
  <div className="col">
    <div className="card no-hover">
      <img src="./Forth-page/rec3.png" className="card-img-top" alt="..."/>
        </div>
  </div>
  <div className="col">
  <div className="card no-hover">
      <img src="./Forth-page/rec4.png" className="card-img-top" alt="..."/>
        </div>
  </div>
  <div className="col">
    <div className="card no-hover">
      <img src="./Forth-page/rec5.png" className="card-img-top" alt="..."/>
        </div>
  </div>
  <div className="col">
    <div className="card no-hover">
      <img src="./Forth-page/rec6.png" className="card-img-top" alt="..."/>
         </div>
  </div>
</div>
<div className="col d-flex justify-content-center pt-4">
  <button className="btn btn-secondary" type="button">Load More</button>
</div>


        </>
    )
}
