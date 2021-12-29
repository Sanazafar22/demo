import React from 'react'
import {Link} from 'react-router-dom';
import Services from '../../Components/Services'

export default function Home() {
    return (
        <>
            {/* TopBar Started */}
            <div className='topBar'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 col-sm-12'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <i className="fas fa-map-marker-alt locationIcon"></i>
                                <a className='address' href='#'>
                                    Office# 509, 5th floor Mezan Executive Tower, Liaqat Road Faisalabad, Punjab, Pakistan
                                </a>
                            </div>
                        </div>
                        <div className='col-md-2 col-sm-12'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <i class="fas fa-envelope messageIcon"></i>
                                <a className='address' href='#'>
                                    contact@bixosoft.com
                                </a>
                            </div>
                        </div>
                        <div className='col-md-2 col-sm-12'>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                <i className="fas fa-phone-alt callIcon"></i>
                                <a className='address' href='#'>
                                    0900-78601
                                </a>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-12'>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                <a className='socialIcon' href='#'><i className="fab fa-twitter"></i></a>
                                <a className='socialIcon' href='#'><i className="fab fa-facebook"></i></a>
                                <a className='socialIcon' href='#'><i className="fab fa-instagram"></i></a>
                                <a className='socialIcon' href='#'><i className="fab fa-linkedin"></i></a>
                                <a className='socialIcon' href='#'><i className="fab fa-skype"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* TopBar End */}
            {/* Navbar Started */}
            <div className='navBar'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 col-sm-6'>
                            <a className='logoName' href='#'>
                                {/* <h1>Bixo<span style={{ color: '#fff' }}>Soft</span></h1> */}
                                <img className='logo' src={require('../../assets/logo.png')} />
                            </a>
                        </div>
                        <div className='col-md-8 col-sm-6'>
                            <ul className='menu'>
                                <li>
                                    <Link to="/about" className='nav-link active' >About</Link>
                                    {/* <a className='nav-link active' href='#'>Home</a> */}
                                </li>
                                <li>
                                    <a className='nav-link' href='#'>About</a>
                                </li>
                                <li>
                                    <a className='nav-link' href='#'>Services</a>
                                </li>
                                <li>
                                    <a className='nav-link' href='#'>Portfolio</a>
                                </li>
                                <li>
                                    <a className='nav-link' href='#'>Team</a>
                                </li>
                                <li>
                                    <a className='nav-link' href='#'>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navbar End */}
            {/* Splash Started */}
            <div className='splash'>
                {/* <video controls width={320} height={240}>
            <source src="movie.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video> */}
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span className='horizontalborder'></span>
                                <h3 className='splashSubtitle'>Welcome to</h3>
                            </div>
                            <h1 className='splashTitle'>Bixo<span style={{ color: '#fff' }}>Soft</span></h1>
                            <p className='splashDetail'>We are team of talented developers
                                turning   your dreams into reality.</p>
                            <button type="button" className="baseBtn">Get Started</button>
                        </div>
                        <div className='col-md-6 col-sm-12' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className='playButtonContainer'>
                                <i className="far fa-play-circle playBtnIcon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Splash End */}
            {/* Services Started */}
            <div className='servicesContainer'>
                <div className='container'>
                    <div className='row'>
                    <div className='col-md-3 col-sm-12'>
                        <Services/>
                    </div>
                    <div style={{marginTop: 80}} className='col-md-3 col-sm-12'>
                        <Services/>
                    </div>
                    <div className='col-md-3 col-sm-12'>
                        <Services/>
                    </div>
                    <div style={{marginTop: 80}} className='col-md-3 col-sm-12'>
                        <Services/>
                    </div>
                       
                        {/* <div className='col-md-3 col-sm-12'>
                            <div className='services'>
                                <i className="fas fa-basketball-ball"></i>
                                <h3>Web Development</h3>
                                <p>
                                    We offer high performance, user friendly, responsive and creative web application development solutions.
                                </p>
                            </div>
                        </div> */}
                        {/* <div className='col-md-3 col-sm-12'>
                            <div className='services'>
                                <i className="fas fa-basketball-ball"></i>
                                <h3>Mobile App Development</h3>
                                <p>
                                    We will cooperate with our clients from the starting phase to completing the project and provide them Android solutions based on their requirements they have to demand from us.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-12'>
                            <div className='services'>
                                <i class="fas fa-basketball-ball"></i>
                                <h3>Digital Marketing</h3>
                                <p>
                                    Take your business to the top where customers can find it. A results-driven Digital marketing company offers services to help you Generate qualified sales leads and Increase e-commerce traffic and sales.
                                </p>
                            </div>
                        </div> */}
                        {/* <div className='col-md-3 col-sm-12'>
                            <div className='services'>
                                <i className="fas fa-basketball-ball"></i>
                                <h3>SEO</h3>
                                <p>
                                    To remain in the top positions on those search engines, your website must constantly monitor search engine algorithm guidelines
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
