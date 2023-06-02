import { Box, Text } from "@chakra-ui/react";

export default function Testimonials() {
  return (
    <Box>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <div className="card mb-3 container-fluid" style={{ paddingBottom: "20px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="./First-page/adam.png" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Adam Smith</h5>
                    <Text
                      className="card-text"
                      style={{ width: "fit-content" }}
                      fontSize={{ base: "14px", md: "16px" }}
                    >
                      This is a wider card with supporting text below as a natural lead-in to additional content. This
                      content is a little bit longer.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="card mb-3" style={{ paddingBottom: "20px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="./First-page/adam.png" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Adam Smith</h5>
                    <Text
                      className="card-text"
                      style={{ width: "fit-content" }}
                      fontSize={{ base: "14px", md: "16px" }}
                    >
                      This is a wider card with supporting text below as a natural lead-in to additional content. This
                      content is a little bit longer.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card mb-3" style={{ paddingBottom: "20px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="./First-page/adam.png" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Adam Smith</h5>
                    <Text
                      className="card-text"
                      style={{ width: "fit-content" }}
                      fontSize={{ base: "14px", md: "16px" }}
                    >
                      This is a wider card with supporting text below as a natural lead-in to additional content. This
                      content is a little bit longer.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Box>
  );
}
