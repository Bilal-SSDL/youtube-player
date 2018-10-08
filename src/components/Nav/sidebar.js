import React, { Component } from 'react';
import "D:/0ffice/Javascript/Sessions/React/youtube-player-master/src/dist/sidenav.css";
import {Link} from "react-router-dom";
export default class SideBar extends Component {
         constructor() {
        super();
            this.state = {
                visible: false
            }
        }
        toggleSidebar = () => {
            
            this.setState((prevState) => {
                return {
                    visible: !prevState.visible
                }
            })
        }

    render = () =>{
       
        return (
            <div className={this.state.visible ? "active" : ""} id="sidebar" >
            <div className="toggle-btn" onClick={()=>this.toggleSidebar()} >
            <span></span>
            <span></span>
            <span></span>
            </div>
                
                <ul>
                   <li> <Link to="/home">Home</Link> </li>
                   <li><Link to="/about">About</Link></li>
                   <li><Link to="/music">Music</Link></li>
                   <li><Link to="/sports">Sports</Link></li>
                   <li><Link to="/islamic">Islamic</Link></li>
                    
                </ul>
                
            </div>
        ); 
    }
}