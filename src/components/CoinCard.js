import React from 'react';
import {FiArrowUpRight, FiArrowDown} from 'react-icons/fi';

const CoinCard = (props) => {
  return (
    <div className='card'>

        <div className='top'>
        <img src={props.data.image} alt='' />
        </div>

            <div>
                <h5>{props.data.name}</h5>
                <p>${props.data.current_price.toLocaleString()}</p>
             </div>

            {props.data.price_change_percentage_24h < 0 ? (
            <span className='red'>
            <FiArrowDown className='icon' />
            {props.price_change_percentage_24h.toFixed(2)}%
            </span>
            ) : (
            <span className='green'>
                <FiArrowUpRight className='icon' />
                {props.data.price_change_percentage_24h.toFixed(2)}%
            </span>
        )}

    </div> 
  )
}

export default CoinCard;