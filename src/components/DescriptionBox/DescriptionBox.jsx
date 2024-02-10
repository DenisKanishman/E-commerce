import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae soluta fugit similique, necessitatibus excepturi veritatis, blanditiis libero in eaque suscipit nesciunt quae officiis laborum voluptas alias voluptatibus odio id debitis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ut molestias perspiciatis, dolorum odio ducimus, modi quod sunt aperiam cumque, nulla aliquid quaerat corrupti provident libero ab. Velit, neque saepe?</p>
        </div>
    </div>
  )
}

export default DescriptionBox;