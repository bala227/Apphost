import React from 'react'
import './CalculateGPA.css';
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const CalculateGPA = () => {
  return (
    <div className='calculategpa'>
        <nav className="raiseQueryBar">
                <img src="/images/logo_psg4u.png" alt="psg4u logo" className="logo-events-page" />
                <div className="nav-list-raise-query">
                    <div className="nav">
                        <img src="/images/homelogo.png" className="logo-events" alt="homelogo" />
                        <a href="#home"><Link to={'/main'} class='link'>Home</Link></a>
                    </div>
                    <div className="nav">
                        <img src="/images/progress-check.png" className="logo-events" alt="trackstatuslogo" />
                        <a href="#strategy">Build Strategy</a>
                    </div>
                    <Link to={'/'} className="link" id="link"><Button name='Logout'/></Link>
                </div>
            </nav>
        <div className='navdown'>
                <div className="selectsem">
                        <label for="category">
                                SELECT SEMESTER
                        </label>
                        <select name="category">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </select>
                        <p className='enterbutton'>Enter</p>
                </div>

                <div className="sub1">
                        <label for="category">
                                SUBJECT 1:
                        </label>
                        <input type="text" className='sub1input'></input>
                        <input type="range" min="0" max="10" defaultValue="0" class="slider" id="myRange"></input>
                        <p className='dottedline'>| | | | | | | | | | |</p>
                        <p className='dotnumber'><span>0 1 2 3 4 5 6 7 8 9</span>&#160;&#160;&#160;&#160;&#160;10</p>
                </div>

                <div className="sub1">
                        <label for="category">
                                SUBJECT 2:
                        </label>
                        <input type="text" className='sub1input'></input>
                        <input type="range" min="0" max="10" defaultValue="0" class="slider" id="myRange"></input>
                        <p className='dottedline'>| | | | | | | | | | |</p>
                        <p className='dotnumber'><span>0 1 2 3 4 5 6 7 8 9</span>&#160;&#160;&#160;&#160;&#160;10</p>
                </div>
                <div className="sub1">
                        <label for="category">
                                SUBJECT 3:
                        </label>
                        <input type="text" className='sub1input'></input>
                        <input type="range" min="0" max="10" defaultValue="0" class="slider" id="myRange"></input>
                        <p className='dottedline'>| | | | | | | | | | |</p>
                        <p className='dotnumber'><span>0 1 2 3 4 5 6 7 8 9</span>&#160;&#160;&#160;&#160;&#160;10</p>
                </div>
                <div className="sub1">
                        <label for="category">
                                SUBJECT 4:
                        </label>
                        <input type="text" className='sub1input'></input>
                        <input type="range" min="0" max="10" defaultValue="0" class="slider" id="myRange"></input>
                        <p className='dottedline'>| | | | | | | | | | |</p>
                        <p className='dotnumber'><span>0 1 2 3 4 5 6 7 8 9</span>&#160;&#160;&#160;&#160;&#160;10</p>
                </div>
                <div className="sub1">
                        <label for="category">
                                SUBJECT 5:
                        </label>
                        <input type="text" className='sub1input'></input>
                        <input type="range" min="0" max="10" defaultValue="0" class="slider" id="myRange"></input>
                        <p className='dottedline'>| | | | | | | | | | |</p>
                        <p className='dotnumber'><span>0 1 2 3 4 5 6 7 8 9</span>&#160;&#160;&#160;&#160;&#160;10</p>
                </div>
                <div className="sub1">
                        <label for="category">
                                SUBJECT 6:
                        </label>
                        <input type="text" className='sub1input'></input>
                        <input type="range" min="0" max="10" defaultValue="0" class="slider" id="myRange"></input>
                        <p className='dottedline'>| | | | | | | | | | |</p>
                        <p className='dotnumber'><span>0 1 2 3 4 5 6 7 8 9</span>&#160;&#160;&#160;&#160;&#160;10</p>
                </div>
                
                <p className='calculatebutton'>Calculate</p>
                
        </div>  
        <div className='gparesult'>
        <div className="sub1">
                        <label for="category">
                                RESULT:
                        </label>
                        <input type="text" className='sub1input' id='resultinput'></input>
                        
                </div>
        </div>
        <Footer />   
            
        </div>
  )
}
