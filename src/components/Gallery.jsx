// eslint-disable-next-line no-unused-vars
import React from 'react'
import imgMilk from '../assets/img/desktop/image-gallery-milkbottles.jpg'
import imgOrage from '../assets/img/desktop/image-gallery-orange.jpg'
import imgCone from '../assets/img/desktop/image-gallery-cone.jpg'
import imgSucar from '../assets/img/desktop/image-gallery-sugarcubes.jpg'

function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <img src={imgMilk} alt="" />
      <img src={imgOrage} alt="" />
      <img src={imgCone} alt="" />
      <img src={imgSucar} alt="" />
    </div>
  )
}

export default Gallery
