import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/Heroimage.png";

import {beritahangat} from '../data/index'

const HomePages = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4">
                Temukan Berita Terbaru <br /> <span>Dengan Got News!</span>
              </h1>
              <p className="mb-4">
              Selalu terhubung dengan kejadian terkini di seluruh dunia melalui platform berita kami yang inovatif. Dari berita global hingga perkembangan lokal yang signifikan, kami menyajikan informasi terkini dengan kecepatan dan ketepatan tinggi. Dengan tim jurnalis profesional kami yang berdedikasi
              </p>
              <button className="btn btn-primary btn-lg rounded-1">
                Lihat Berita
              </button>
            </Col>
            <Col lg="6" className="d-none d-lg-block text-center pt-lg-0 pt-5 mb-xs-0 mb-2">
              <img src={HeroImage} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="berita-hangat w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Berita Hangat</h1>
              <p className="text-center">Temukan berita yang sedang hangat di setiap kalangan</p>
            </Col>
          </Row>
          <Row>
            {beritahangat.map((hangat) => {
              return<Col key={hangat.id}>
                <img src={hangat.imagehangat} alt="unsplash.com" className="w-100 mb-5 rounded-top"/>
                <div className="star mb-2 px-3">
                  <i className={hangat.star1}></i>
                  <i className={hangat.star2}></i>
                  <i className={hangat.star3}></i>
                  <i className={hangat.star4}></i>
                  <i className={hangat.star5}></i>
                </div>
                <h5 className="mb-5 px-3">{hangat.title}</h5>
                <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                  <p className="m-0 text-secondary fw-bold">{hangat.price}</p>
                  <button className="btn btn-primary rounded-1">{hangat.buy}</button>
                </div>
              </Col>
            })}
          </Row>
          <Row>
            <Col>
              
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePages;
