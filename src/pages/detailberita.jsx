import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const DetailBerita = () => {
    return (
        <div className="beritapage">
            <div className="berita-hangat min-vh-100">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="fw-bold text-center">Detail Berita</h1>
                            <p className="text-center">Maaf untuk saat ini berita hanya merupakan pages dummy saja, Terima kasih</p>
                            <img src="./src/assets/404-png.png" alt="" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
};

export default DetailBerita;
