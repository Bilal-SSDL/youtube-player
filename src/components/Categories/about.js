import React, { Component } from 'react';
import CategoryList from './CategoryList';
import Main from '../Common/Main';
import {videoSearch} from "../Common/Global";
class About extends Component {
    constructor(props){
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
        };
    
    }
    componentWillMount(){
        this.handleSearch('About Youtube');
      }
    handleSearch = (search) => {
        videoSearch(search).then((res)=>{
          this.setState({ 
                      videos: res,
                      selectedVideo: res[0]
                  });
        }).catch((res)=>{
         console.log(res);
        });
      }

    render = () => {
    return (
        <div className="main">
            <Main videoSearch={this.handleSearch} />
            <div className="center-div">
            <CategoryList 
          onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
          videos={this.state.videos} />
        </div>

        </div>
    );
}
}
export default About;