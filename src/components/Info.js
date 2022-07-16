import React from "react";
import photo from '../img/photo.jpeg'

export default function Info() {
    return (
        <div className='info'>
            <img className='info__img' src={photo} alt='person' />
            <div className='info__data'>
                <h2 className='info__data-name'> Maksym Baturinskyi</h2>
                <h4 className='info__data-job'>Frontend Developer</h4>
                <a className='info__data-link' href='https://my-portfolio-gb.netlify.app/'>my-portfolio</a>
            </div>
            <div className='info__btn'>
                <div>
                    <a className='info__btn-left' href='#'>
                        <ion-icon name="mail"></ion-icon>
                        Email
                    </a>
                </div>
                <div>
                    <a className='info__btn-right' href='#'>
                        <ion-icon name="logo-linkedin"></ion-icon>
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    )
}