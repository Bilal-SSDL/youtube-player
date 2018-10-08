import React, { Component } from 'react';
import SideBar from "../Nav/sidebar";
import SearchBar from "../Search/search_bar";
import {videoSearch} from "../Common/Global";
class Main extends Component {


    render = () => {
      const {videoSearch} = this.props;
        return (
          <header>
            <SearchBar onSearchTermChange={search =>  videoSearch(search)}/>
            <SideBar />
          </header> 
        );
      }
    }
export default Main;