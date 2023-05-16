// eslint-disable-next-line no-unused-vars
import React from 'react'

function SectionThree() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-[700px]" >
            <div className="left flex justify-center items-end p-[2rem] bg-sec-three-left bg-cover lg:px-[15rem] lg:pb-[5rem] text-center">
                <div>
                    <h3 className='text-3xl mb-4 font-bold'>Graphic Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eveniet at fuga illum. Nisi doloremque, illum inventore recusandae earum nobis?</p>
                </div>
            </div>
            <div className="right left flex justify-center items-end p-[2rem] bg-sec-three-right bg-cover lg:px-[15rem] lg:pb-[5rem] text-center">
                <div>
                    <h3 className='text-3xl mb-4 font-bold'>Photography</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus aspernatur, ea illo officiis soluta neque laborum dolor atque laboriosam.</p>
                </div>
            </div>
        </div>
    )
}

export default SectionThree
