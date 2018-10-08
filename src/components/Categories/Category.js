import React, { Component } from 'react';
import CategoryList from './CategoryList';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCouFkqRpesYRxYyMJJMWreBICWzPIrgvo';

class Category extends Component {
    constructor(props){
        super(props);
        this.videoSearch = this.videoSearch.bind(this)
    
    
        this.state = { 
            videos: [],
            selectedVideo: null
        };
    
        this.videoSearch('Islam');
        
    }
    
    videoSearch = (searchTerm) => {
      YTSearch({key: API_KEY, term: searchTerm}, (dataReturn) => {
        console.log(dataReturn);
          this.setState({ 
              videos: dataReturn,
              selectedVideo: dataReturn[0]
          });
      });
    
    }

 render = () => {
    return (
        <div>
            {/* <Main videoSearch={this.videoSearch} /> */}
            {/* <VideoDetail video={this.state.selectedVideo}/> */}
            <CategoryList 
          onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
          videos={this.state.videos} />
        </div>
    );
}
}
export default Category;