import React, { useState } from 'react'
import '../Count/count.css'

export default function Count() {
    const [counts, setCount] = useState([
        {
            value: 232,
            title: 'Happy Clients',
            icon: 'fa-smile-beam'
        },
        {
            value: 521,
            title: 'Projects',
            icon: 'fas fa-tasks'
        },
        {
            value: 1463,
            title: 'Hourse of support',
            icon: 'fas fa-archway'
        },
        {
            value: 15,
            title: 'Hard Worker',
            icon: 'fas fa-user-friends'
        }
    ])
    return (
        <>
            {
                counts.map((count, i) => (
                    <div className='col-md-3 col-sm-12'>
                        <div className='counts' key={i}>
                            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <div className='counterIconContainer'>
                                    <i class={`far ${count.icon} counterIcon`}></i>
                                </div>
                            </div>
                            <h1 className='conuterValue'>
                                {count.value}
                            </h1>
                            <div className='countTitle'>
                                {count.title}
                            </div>
                        </div>
                    </div>
                ))
            }


        </>
    )
}

