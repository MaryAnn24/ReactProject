import React from 'react';
import { Link } from 'react-router-dom';

function CardItem() {
  return (
    <>
        <div>
            <li className="cards__item">
                <Link className='cards__item__link'>
                    <figure className='cards_item_pic-wrap'>
                        <img src="/" alt="Travel Image" className="cards__item__img" />
                    </figure>
                    <div className="cards_item_info">
                        <h5 className="cards__item_text">
                            
                        </h5>
                    </div>
                </Link>
            </li>

        </div>
    </>
    
  )
}

export default CardItem