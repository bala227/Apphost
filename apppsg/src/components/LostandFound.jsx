import React from 'react'
import './AfternoonMenu.css';
import { Link } from 'react-router-dom';
import './LostandFound.css';
import Footer from "./Footer";

export const LostandFound = () => {
  return (
    <div className='lostandfound'>
      <nav className="eventsBar">
        <img src="/images/logo_psg4u.png" alt="psg4u logo" className="logo-events-page" />
        <div className="nav-list-events">
            <div className="nav">
                <img src="/images/homelogo.png" className="logo-events" alt="homelogo" />
                <a href='#home'><Link to={'/main'} class='link'>Home</Link></a>
            </div>
            <button className="logout-button"><Link to={'/'} className='link' id='link'>Logout</Link></button>
        </div>
      </nav>

      <div className='lostbody'>
            <div className='lostitems'>
                <p className='losttitle'>LOST AND FOUND</p>
                <div className='item1'>
                <img src="/images/close.png" className='closeimg' alt='closeimg'/>
                <img src="/images/earpods.png" alt="earpods" className='earpods'/>
                <p id='item1'>Bluetooth Earphone (Boat)</p>
                <div className="details">
                            <label for="category">
                                DETAILS
                            </label>
                            <input type="text"></input>
                        </div>
                        <div className="foundat">
                            <label for="category">
                                  FOUND AT
                            </label>
                            <select name="category">
                                <option>BLOCK</option>
                            </select>
                            <select name="category">
                                <option>HALL NO</option>
                            </select>
                        </div>
                        <div className="collectitat">
                            <label for="category">
                                  COLLECT IT AT
                            </label>
                            <select name="category">
                                <option>BLOCK</option>
                            </select>
                            <select name="category">
                                <option>HALL NO</option>
                            </select>
                        </div>
                        <div className="collectitat" id='availabletime'>
                            <label for="category">
                                  AVAILABLE TIME
                            </label>
                            <select name="category">
                                <option>DATE</option>
                            </select>
                            <select name="category">
                                <option>TIME</option>
                            </select>
                        </div>
                        <p className='providedetails'>Provide accurate details for collection. Kindly note that incorrect information may result in forfeiture.</p>
                </div>

                <div className='item1' id='item2'>
                <img src="/images/close.png" className='closeimg' alt='closeimg'/>
                <img src="/images/bottle.png" alt="earpods" className='earpods'/>
                <p id='item1'>Water Bottle</p>
                <div className="details">
                            <label for="category">
                                DETAILS
                            </label>
                            <input type="text"></input>
                        </div>
                        <div className="foundat">
                            <label for="category">
                                  FOUND AT
                            </label>
                            <select name="category">
                                <option>BLOCK</option>
                            </select>
                            <select name="category">
                                <option>HALL NO</option>
                            </select>
                        </div>
                        <div className="collectitat">
                            <label for="category">
                                  COLLECT IT AT
                            </label>
                            <select name="category">
                                <option>BLOCK</option>
                            </select>
                            <select name="category">
                                <option>HALL NO</option>
                            </select>
                        </div>
                        <div className="collectitat" id='availabletime'>
                            <label for="category">
                                  AVAILABLE TIME
                            </label>
                            <select name="category">
                                <option>DATE</option>
                            </select>
                            <select name="category">
                                <option>TIME</option>
                            </select>
                        </div>
                        <p className='providedetails'>Provide accurate details for collection. Kindly note that incorrect information may result in forfeiture.</p>
                </div>
            </div>
            
      </div>
      <Footer/>
    </div>
  )
}
