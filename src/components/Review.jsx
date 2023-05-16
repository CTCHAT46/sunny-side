// eslint-disable-next-line no-unused-vars
import React from 'react'
const usersData = [
    {
        img: '../src/assets/img/image-emily.jpg',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam inventore dicta alias, nobis quos vel et. Nam blanditiis aut consequuntur veritatis, veniam laudantium, harum reiciendis accusantium a facilis voluptatibus recusandae.',
        name: 'Emily R.',
        position: 'Marketing Directior'
    },
    {
        img: '../src/assets/img/image-thomas.jpg',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam inventore dicta alias, nobis quos vel et. Nam blanditiis aut consequuntur veritatis, veniam laudantium, harum reiciendis accusantium a facilis voluptatibus recusandae.',
        name: 'Thomas S.',
        position: 'Chief Operation Officer'
    },
    {
        img: '../src/assets/img/image-jennie.jpg',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam inventore dicta alias, nobis quos vel et. Nam blanditiis aut consequuntur veritatis, veniam laudantium, harum reiciendis accusantium a facilis voluptatibus recusandae.',
        name: 'Jennie F.',
        position: 'Developer'
    }
]
function Review() {
    return (
        <div className="text-center">
            <h3 className="uppercase text-center text-3xl p-[5rem] lg:p-[5rem]">Client Testimonials</h3>
            <div className="grid lg:grid-cols-3 grid-cols-1 text-center p-[1rem] lg:p-[3rem] gap-[5rem] py-[5rem]">
                {usersData.map((data, key) => (
                    <div key={key.name}>
                        <img src={data.img} className="inline-block rounded-full py-5
                        " alt={data.name} />
                        <p className="py-[5rem]">{data.content}</p>
                        <h4 className="font-bold">{data.name}</h4>
                        <p className="text-slate-400">{data.position}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Review























