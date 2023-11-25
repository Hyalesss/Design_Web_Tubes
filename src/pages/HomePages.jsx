import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/Heroimage.png";

import { beritahangat , dataSwiper} from '../data/index'
import { useNavigate } from "react-router-dom"

import { Swiper, SwiperSlide } from 'swiper/react';

import FaqComponent from "../component/FaqComponent";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const HomePages = () => {


  let navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
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
              return <Col className="shadow-sm" key={hangat.id}>
                <img src={hangat.imagehangat} alt="unsplash.com" className="w-100 mb-5 rounded-top" />
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
            <Col className="text-center">
              <button className="btn btn-primary rounded-4 btn-lg" onClick={() => navigate("/berita")}>Lihat Semua Berita <i className="fa-solid fa-chevron-right ms-3"></i></button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="videoberita py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-2">
                Testimoni
              </h1>
              <p className="text-center">Kumpulan testimoni terhadap portal berita GOT NEWS</p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((dataswip)=> {
                return <SwiperSlide key={dataswip.id} className="shadow-sm">
                  <p className="desc">{dataswip.desc}</p>
                  <div className="people">
                    <img src={dataswip.imageberitavideo} alt="" />
                    <div>
                      <h5 className="mb-1">{dataswip.name}</h5>
                      <p className="m-0 fw-bold">{dataswip.skill}</p>
                    </div>
                  </div>
                </SwiperSlide>
              })}
            </Swiper>
          </Row>
        </Container>
      </div>

      <div>
        <FaqComponent/>
      </div>

    </div>
  );
};

export default HomePages;
