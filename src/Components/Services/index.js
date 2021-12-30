import React, {useEffect} from 'react';
import '../Services/service.css';
import svgImg from '../../assets/web.svg';
// import { useEffect } from 'react';

// Receive props here
export default function Services(props) {

   
    useEffect(() => {
       console.log('props', props.entries)
    }, [])

    return (
        <>
            {props.entries.map((service, i) => (
                <div className='col-md-3 col-sm-12'>
                    <div className={`services ${service.down ? 'down' : ''}`} key={i}>
                        {/* <svgImg/> */}
                        {/* <img className='seviceIcon' src={require('../../assets/web.svg')} /> */}
                        {/* <img src={require('../../assets/web.svg')} /> */}
                        <i className={`fas ${service.icon} seviceIcon`}></i>
                        <h3 className='title'>{service.title}</h3>
                        <p className='subInfo'>
                            {service.desc}
                        </p>
                    </div>
                </div>
            ))}
        </>
    )
}