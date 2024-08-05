import React from 'react'
import './searchItem.css';

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img
        src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/549319416.jpg?k=eeadc8aa6b4bd2522b975facac4a1746a3aae05e29555f2a444c1a952709f3c2&o=&hp=1'
        alt=''
        className='siImg' />
        <div className="siDesc">
            <h1 className="siTitle">Villa Mandhari - Diani BeachOpens</h1>
            <span className="siDistance">1.5 km from centre</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Diani Beach offers accommodation in Diani Beach.</span>
            <span className="siFeatures">Situated 500 metres from the Indian Ocean and offering an outdoor swimming pool and free WiFi, Villa Mandhari </span>
            <span className="siCancelOp"> Free  cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in on this great opportunity</span>
        </div>
        <div className="siDetails">Details</div>
    </div>
  )
}

export default SearchItem