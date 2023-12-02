import React, { useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { videoData } from "../data/indexvideo"


const BeritaVideo = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredBerita = videoData.filter((video) =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="videoBeritaPage">
                <div className="video-berita min-vh-100">
                    <Container>
                        <Row>
                            <Col>
                                <h1 className="fw-bold text-center ">Semua Video Berita</h1>
                                <p className="text-center">Semua berita video tersedia di halaman ini</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input
                                    type="text"
                                    placeholder="Cari video berita..."
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    className="form-control mb-4"
                                />
                                {filteredBerita.length > 0 ? (
                                    filteredBerita.map((hangat) => (
                                        <Col className="shadow-sm" key={hangat.id}>
                                        </Col>
                                    ))
                                ) : (
                                    <p className="text-center">Tidak ada berita yang ditemukan</p>
                                )}
                            </Col>
                        </Row>
                        <Row>
                            {filteredBerita.map((video) => {
                                return <Col className="shadow-sm" key={video.id}>
                                    <img src={video.image} alt="video1" className="w-100 mb-5 rounded-top" />
                                    <div className="star mb-2 px-3">
                                        <i className={video.star1}></i>
                                        <i className={video.star2}></i>
                                        <i className={video.star3}></i>
                                        <i className={video.star4}></i>
                                        <i className={video.star5}></i>
                                    </div>
                                    <h5 className="mb-5 px-3">{video.title}</h5>
                                    <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                                        <p className="m-0 text-secondary fw-bold">{video.price}</p>
                                        <button className="btn btn-primary rounded-1">
                                            <a href={video.url} target="_blank" style={{ color: 'white', textDecoration: 'none' }}>{video.buy}</a></button>
                                    </div>
                                </Col>
                            })}
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default BeritaVideo;