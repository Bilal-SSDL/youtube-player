import React from 'react';

const CatVideoListItem = (props) => {
    const video = props.video;
    const onUserSelected = props.onUserSelected;
    // console.log(video);    
    const imageUrl = video.snippet.thumbnails.default.url;
    let videoTitle=video.snippet.title;
   debugger;
    if(videoTitle.length>50){
        videoTitle=videoTitle.substring(0, 50) +"...";
    }
    return (
    <div onClick={() => onUserSelected(video)} className="col-md-3">
        <div className="video">
            <div className="video-head">
                <img src={imageUrl} />
                <span className="video-title">{videoTitle}</span>
            </div>
            <div className="video-body">
                
            </div>
        </div>
    </div>
    );
};

export default CatVideoListItem;