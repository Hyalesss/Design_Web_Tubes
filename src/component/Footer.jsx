import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div><Container>
            <Row>
                <Col>
                <div>
                <img src="./gotnews.png" className="pe-2" alt="GOT NEWS Logo" />
                <h5 className="">GOT NEWS</h5>
                <p className="desc">gotnews</p>
                </div>
                    <p>Text Paragraf</p>
                    <div>
                        <Link>
                            <i className="fa-brands fa-whatsapp"></i>
                            <p>+62 8950 1192 321</p>
                        </Link>
                    </div>
                    <div>
                        <Link>
                            <i className="fa-regular fa-envelope"></i>
                            <p>Alessandrobenaya5@gmail.com</p>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container></div>
    )
}

export default Footer