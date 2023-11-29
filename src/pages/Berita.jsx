import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { semuaberita } from "../data/index"

const Berita = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredBerita = semuaberita.filter((hangat) =>
        hangat.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="beritapage">
            <div className="berita-hangat min-vh-100">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="fw-bold text-center">Semua Berita</h1>
                            <p className="text-center">Semua berita hangat & lama tersedia di halaman ini</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <input
                                type="text"
                                placeholder="Cari berita..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className="form-control mb-4"
                            />
                        </Col>
                    </Row>
                    <Row>
                        {filteredBerita.map((hangat) => {
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
                </Container>
            </div>
        </div>

    )
}

export default Berita