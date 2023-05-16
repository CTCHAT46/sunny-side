// eslint-disable-next-line no-unused-vars
import React from 'react'
import transformImg from '../assets/img/desktop/image-transform.jpg'

function SectionOne() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2" >
            <div className="left flex justify-center items-center p-[5rem]">
                <div>
                    <h3 className='text-5xl'>Transform your brand</h3>
                    <p className=' text-slate-500 my-[2rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, reprehenderit? Tempora voluptatum saepe nisi consectetur reprehenderit in non sequi dolorum impedit odit? Praesentium, sequi beatae.
                    </p>
                    <a className='text-2xl border-b-4 border-b-yellow-500 mt-2' href="#">Learn more</a>
                </div>
            </div>
            <div className="right">
                <img className='w-full' src={transformImg} alt="transform" />
            </div>
        </div>
    )
}

export default SectionOne
