export default function Card(){
    return(
        <>
<div className="card mb-3 no-hover" style={{ border:"none"}}>
  <div className="row custom-row g-0">
    <div className="col-md-5">
      <div className="card-body custom-card-body">
      <h1 className="card-title custom-h1">Project Name</h1>
        <p className="card-text">Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In ornare nisl leo odio magna.</p>
      </div>
    </div>
    <div className="col-md-4">
      <img src="./Fifth-page/image1.png" className="img-fluid rounded-start" alt="..."/>
    </div>
  </div>
</div>

<div className="card mb-3 no-hover" style={{border:"none"}}>
  <div className="row g-0">
    <div className="col-md-4 order-2 order-md-1">
      <img src="./Fifth-page/image2.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-5 order-1 order-md-2">
      <div className="card-body custom-card-body  custom-specific">
      <h1 className="card-title custom-h1">Project Name</h1>
        <p className="card-text">Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In ornare nisl leo odio magna.</p>
      </div>
    </div>
  </div>
</div>



<div className="card mb-3 no-hover" style={{border:"none"}}>
  <div className="row g-0">
    <div className="col-md-5">
      <div className="card-body custom-card-body">
      <h1 className="card-title custom-h1">Project Name</h1>
        <p className="card-text">Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In ornare nisl leo odio magna.</p>
      </div>
    </div>
    <div className="col-md-4">
      <img src="./Fifth-page/image3.png" className="img-fluid rounded-start" alt="..."/>
    </div>
  </div>
</div>

<div className="col d-flex justify-content-center custom-button pt-2">
  <button className="btn btn-dark" type="button">Load More</button>
</div>
        </>
    )
}