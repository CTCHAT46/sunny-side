import { FaFacebookSquare, FaInstagram, FaTwitter, FaPinterestSquare } from 'react-icons/fa'

function Footer() {
    return (

        <div className='bg-[#458c7e] p-[3rem] py-[3rem] text-center text-white'>
            <h3 className='font-bold py-[3rem] text-3xl'>sunnyside</h3>
            <ul className='flex justify-center items-center'>
                <li className='mx-[1rem]'><a href="#">About</a></li>
                <li className='mx-[1rem]'><a href="#">Services</a></li>
                <li className='mx-[1rem]'><a href="#">Projects</a></li>
            </ul>
            <ul className='flex justify-center items-center py-[3rem]'>
                <li className='mx-[1rem]'><a href="#"><FaFacebookSquare /></a></li>
                <li className='mx-[1rem]'><a href="#"><FaInstagram /></a></li>
                <li className='mx-[1rem]'><a href="#"><FaTwitter /></a></li>
                <li className='mx-[1rem]'><a href="#"><FaPinterestSquare /></a></li>
            </ul>
        </div>
    )
}

export default Footer
