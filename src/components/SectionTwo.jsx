import standOutImg from '../assets/img/desktop/image-stand-out.jpg'

function SectionTwo() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2" >
            <div className="left">
                <img className='w-full' src={standOutImg} alt="stand out" />
            </div>
            <div className="right flex justify-center items-center p-[5rem] row-start-1 row-end-2 lg:col-start-2 lg:col-end-3">
                <div>
                    <h3 className='text-5xl'>Stand Out</h3>
                    <p className=' text-slate-500 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus soluta ut, esse facere ipsa quod quos rerum. Eveniet, explicabo ad, libero expedita, rem illo assumenda maiores corrupti iusto inventore molestias deleniti sed provident ut. Voluptate, officia explicabo eligendi fugit nesciunt debitis fugiat, ullam architecto assumenda a dicta mollitia earum pariatur expedita ratione recusandae totam.
                    </p>
                    <a className='text-2xl border-b-4 border-b-pink-500 mt-2' href="#">Learn more</a>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo
