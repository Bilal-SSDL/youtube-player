import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import VideoList from '../src/components/VideoDetails/video_list'
import VideoDetail from '../src/components/VideoDetails/video_detail';
import Main from '../src/components/Common/Main';
import {videoSearch} from "../src/components/Common/Global";

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
        videos: [],
        selectedVideo: null
    };  
}

componentWillMount(){
  this.handleSearch('Quran');
 

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
  render(){
    debugger;
    return (
      <div>

        <Main videoSearch={this.handleSearch} />
        <div className="col-md-2">

        </div>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
