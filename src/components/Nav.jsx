// eslint-disable-next-line no-unused-vars
import React from 'react'
function Nav() {
    return (
        <div className="flex flex-col lg:flex-row md:flex-row justify-between px-[10rem] py-[3rem]" >
            <div className="logo">
                <a className="text-4xl text-white font-bold flex flex-col lg:flex-row md:flex-row justify-center items-center" href="#">sunnyside</a>
            </div>
            <ul className="menu flex lg:flex-row md:flex-row text-white items-center">
                <li className="mx-[30px] my-[10px]"><a href="#">About</a></li>
                <li className="mx-[30px] my-[10px]"><a href="#">Services</a></li>
                <li className="mx-[30px] my-[10px]"><a href="#">Projects</a></li>
                <li className="mx-[30px] my-[10px] flex justify-center items-center text-black w-[100px] h-[45px] bg-white rounded-full"><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Nav
