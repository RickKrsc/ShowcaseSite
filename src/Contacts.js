import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Contacts.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleMap from './GoogleMap';
import { useMediaQuery } from 'react-responsive';


function Contacts() {

    const footerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '1rem',
        bottom: '0',
        width: '100%',
        fontFamily: 'Impact, sans-serif'
    };

    const isMobile = useMediaQuery({ maxWidth: 480 });

    return (
        <footer style={footerStyle}>
            <Container>
                <Row>
                    <Col sm={6}>
                        <h1>Contatti</h1>
                        <ul>
                            <li>
                               {!isMobile && <GoogleMap />}
                               {isMobile && <p><a href="https://maps.app.goo.gl/2AJUTWQaQjzguDA1A"> Via A. Manzoni, 7, 00055 Ladispoli RM</a></p>}
                            </li>
                            <li>
                                <svg fill="#000000" width="50" height="50" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M20.629 5h-9.257a1.6 1.6 0 0 0-1.601 1.603V25.4a1.6 1.6 0 0 0 1.601 1.601h9.257c.883 0 1.6-.718 1.6-1.601V6.603c0-.885-.717-1.603-1.6-1.603zm-6.247 1.023h3.302v.768h-3.302v-.768zm1.619 19.395a1.024 1.024 0 0 1-1.023-1.021 1.023 1.023 0 0 1 2.044 0c-.001.494-.46 1.021-1.021 1.021zm5.028-3.501H10.971V7.704h10.058v14.213z" /></svg> +39 3333333
                            </li>
                        </ul>
                        <ul className="lista2">
                                  <li style={{ marginLeft: '-0.2rem' }}><a href="#" ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
                                      <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                                  </svg>Instagram</a>
                                  </li>
                                  <li style={{ marginLeft: '-0.7rem' }}>
                                      <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
                                          <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
                                      </svg>Facebook</a>
                                  </li>
                                  <li style={{ marginLeft: '-2rem' }}>
                                      <a href="#"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
                                          <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z"></path>
                                      </svg>Tik Tok</a>
                                  </li>
                              </ul>
                    </Col>
             
                    <Col xs={6}>
                        <h1>Orario di apertura</h1>
                        <p>Martedì-Domenica</p>
                        <ul>
                            <li> <svg fill="#000000" width="30" height="30" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <title>clock</title>
                                <path d="M16 0.75c-8.422 0-15.25 6.828-15.25 15.25s6.828 15.25 15.25 15.25c8.422 0 15.25-6.828 15.25-15.25v0c-0.010-8.418-6.832-15.24-15.249-15.25h-0.001zM16 28.75c-7.042 0-12.75-5.708-12.75-12.75s5.708-12.75 12.75-12.75c7.042 0 12.75 5.708 12.75 12.75v0c-0.008 7.038-5.712 12.742-12.749 12.75h-0.001zM17.25 15.482v-9.482c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 10c0 0.345 0.14 0.658 0.366 0.884l3.999 4.001c0.226 0.226 0.539 0.366 0.884 0.366 0.691 0 1.251-0.56 1.251-1.251 0-0.345-0.14-0.658-0.366-0.884l0 0z"></path>
                            </svg> 00:00 - 00:00 </li>
                            <li></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>
        </footer>

    );
}
export default Contacts;