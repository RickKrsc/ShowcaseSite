import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from 'react-slick';
import "./slick.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function Reviews() {
    const settings = {
        dots: true,
        dotsClass: 'button__bar',
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const slydeFont = { overflow: 'visible', color: '#000000F0', fontSize: '1rem', fontWeight: '600', textAlign: 'center', justifyContent: 'center', whiteSpace: 'pre-line' };

    const textItems = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius diam nibh, ut aliquet libero \n euismod vitae. Praesent sed justo eget tellus viverra placerat.Vivamus blandit malesuada tellus, a viverra. ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius diam nibh, ut aliquet libero euismod vitae. \n Praesent sed justo eget tellus viverra placerat. Vivamus blandit malesuada tellus, a viverra.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo eget tellus viverra placerat. Vivamus blandit malesuada tellus, a viverra.',
    ];

    const slideStyle = { marginTop: '2rem', marginLeft: '5rem', marginRight: '5rem', paddingBottom: '5rem', paddingTop: '5rem' };

    const textTitle = { backgroundColor: 'white', paddingTop: '3rem', fontSize: '2rem', fontWeight: '600', fontFamily: 'Impact, sans-serif', fontSize: '2.5rem', marginTop: '1.5rem', color: '#CE1818F0' };

    return (
        <div style={{ backgroundColor: 'white' }}>
            <div style={textTitle}>
                <p>Recensioni</p>
            </div>
            <div style={slideStyle}>

                <Slider {...settings}>
                    {textItems.map((text, index) => (
                        <div key={index}>
                            <p style={slydeFont}>{text}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
export default Reviews;