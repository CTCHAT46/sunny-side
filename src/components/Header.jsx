// eslint-disable-next-line no-unused-vars
import React from 'react'
import Nav from "./Nav"
import { CgArrowLongDown } from 'react-icons/cg'
// import imgHeader from '../assets/img/desktop/image-header.jpg'

function Header() {
    return (
        <div className="h-[53rem] bg-sky-400 bg-header bg-cover bg-center  text-center">
            <Nav />
            <h1 className="text-white text-7xl uppercase">We are creatives
            </h1>
            <div className="flex justify-center mt-[100px] text-white text-8xl">
                <CgArrowLongDown className="mt-[100px]" />
            </div>
        </div>
    )
}

export default Header
