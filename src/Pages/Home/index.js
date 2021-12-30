import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Services from '../../Components/Services'
import Count from '../../Components/Count';

export default function Home() {
    const initialState = [
        {
            title: 'Web Development',
            desc: 'We offer high performance, user friendly, responsive and creative web application development solutions.',
            icon: 'fa-basketball-ball',
            down: false
        },
        {
            title: 'Mobile App Development',
            desc: 'We will cooperate with our clients from the starting phase to completing the project and provide them Android solutions based on their requirements they have to demand from us.',
            icon: 'fa-basketball-ball',
            down: true
        },
        {
            title: 'Digital Marketing',
            desc: 'Take your business to the top where customers can find it. A results-driven Digital marketing company offers services to help you Generate qualified sales leads and Increase e-commerce traffic and sales.',
            icon: 'fa-basketball-ball',
            down: false
        },
        {
            title: 'SEO',
            desc: 'To remain in the top positions on those search engines, your website must constantly monitor search engine algorithm guidelines',
            icon: 'fa-basketball-ball',
            down: true
        },
    ]
    const [services, setServices] = useState(initialState)
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
                                    <Link to="/" className='nav-link active' >Home</Link>
                                    {/* <a className='nav-link active' href='#'>Home</a> */}
                                </li>
                                <li>
                                    <Link to="/about" className='nav-link' >About</Link>
                                    {/* <a className='nav-link' href='#'>About</a> */}
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
                        {/* Send Props here */}
                        <Services entries={services} />
                    </div>
                </div>
            </div>
            {/* Services End */}
            {/* Services Start */}
            <div className='about'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12'>
                            <img className='aboutImg' src={require('../../assets/about.jpg')} />
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span className='horizontalborder'></span>
                                <h3 className='splashSubtitle'>About us</h3>
                            </div>
                            <h1 className='aboutTitle'>Find Out More <span style={{ color: '#D82828' }}>About Us</span></h1>
                            <p>
                                We help ambitious companies like yours to build best in class products. Our approach delivers more value, faster.
                            </p>
                            <h5 className='aboutHeading'>BixoSoft is software technology company founded by Murad Faridi CEO and Chairperson of BixoSoft PVT LTD in 2017. </h5>
                            <p>our team is based on motivated and experienced developers, designers, and digital marketers, provideing end-to-end software development services to our clients. </p>
                            <h5 className='aboutHeading'>What we do</h5>
                            <p>We provide you software Development services with Quality Assurance because of specializing in the development of time-sensitive and innovative SaaS,mobile app solutions.</p>
                            <h5 className='aboutHeading'>What is our expertise </h5>
                            <p>Having a professional backgroud,we are working on the latest technologies with an experienced team. They expanded into Web Development, Web Scraping, Digital Marketing, Search Engine Optimization, Cloud services, and Mobile App Development.</p>
                            <p>We have a well-organized process for working with our clients to build and launch products. Our developers and designers completely know what they do. We always try to deliver our clients the best possible quality because We always plan to completely understand your business, so we can effectively bridge the gap between your goals and technology. Quite simply, to get the most out of your money. </p>
                        </div>
                    </div>
                    {/* <div className='progressContainer'>
                        <div className='row'>
                            <div className='col-md-2 col-sm-12' >
                                <div classname="progressbar" data-animate="false">
                                    <div classname="progressbarborder" data-percent={100}>
                                        <canvas width={100} height={100} />
                                        <span className="skillpercent">
                                            100%
                                        </span>
                                    </div>
                                    <h6>HTML</h6>
                                </div>
                            </div>
                            <div className='col-md-2 col-sm-12' >2</div>
                            <div className='col-md-2 col-sm-12' >3</div>
                            <div className='col-md-2 col-sm-12' >4</div>
                            <div className='col-md-2 col-sm-12' >5</div>
                            <div className='col-md-2 col-sm-12' >6</div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* Services End */}
            {/* Count  Start*/}
            <div className='countContainer'>
                <div className='container'>
                    <div className='row'>
                        <Count />
                    </div>
                </div>
            </div>
            {/* Count End */}
            {/* Testimonial Start */}
            <div className='testimonialContainer'>
                <div className='container'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span className='horizontalborder'></span>
                        <h3 className='splashSubtitle'>Testimonial</h3>
                    </div>
                    <h1>What <span style={{ color: '#D82828' }}>Clients</span> Says</h1>
                    <div className='row' >
                        <div className='col-md-3 col-sm-12'>
                            <div className='testimonial'>
                                <p>
                                    The level of professionalism delivered is incomparable. This team of highly skilled developers deliver Quality, care and accuracy. I would HIGHLY recommend Cursortek as a lead technology partner for startup to enterprise.
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <div>
                                        <img className='testimonialImg' src={require('../../assets/testimonail-1.png')} />
                                    </div>
                                    <div style={{ marginLeft: 10 }}>
                                        <div className='clientName'>Reach Yanes</div>
                                        <div className='clientDetail'>owner</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-12' style={{marginTop: 280}}>
                            <div className='testimonial'>
                                <p>
                                    We were very happy to work with BixoSoft team.Bixosoft team was very responsive and was able to quickly analyse the problem and create an effective Elasticsearch solution.
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <div>
                                        <img className='testimonialImg' src={require('../../assets/testimonail-2.jpg')} />
                                    </div>
                                    <div style={{ marginLeft: 10 }}>
                                        <div className='clientName'>Arkie Rivera</div>
                                        <div className='clientDetail'>CEO</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-12'>
                            <div className='testimonial'>
                                <p>
                                I highly recommend this company. He has provided me outstanding work at a reasonable price. I am really impressed by the way he works. A really awesome way of delivering quality
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <div>
                                        <img className='testimonialImg' src={require('../../assets/testimonail-3.png')} />
                                    </div>
                                    <div style={{ marginLeft: 10 }}>
                                        <div className='clientName'>Gloria Jeans</div>
                                        <div className='clientDetail'>director</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-12' style={{marginTop: 280}}>
                            <div className='testimonial'>
                                <p>
                                Excellent developer. Versatile and quick to learn new skills. Fast turn around. Will happily use again. Highly recommended for others.
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <div>
                                        <img className='testimonialImg' src={require('../../assets/testimonail-4.png')} />
                                    </div>
                                    <div style={{ marginLeft: 10 }}>
                                        <div className='clientName'>Melchor</div>
                                        <div className='clientDetail'>manager</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
