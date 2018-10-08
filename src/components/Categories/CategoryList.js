import React from 'react';
import CatVideoListItem from '../VideoDetails/CatVideListItem';
import style from "D:/0ffice/Javascript/Sessions/React/youtube-player-master/src/dist/list.css";

const CategoryList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <CatVideoListItem 
                onUserSelected={props.onVideoSelect}           
                key={video.etag} 
                video={video} />
        );
    });

    return (
       <div className="music-wrapper horizontal">
        <div className=" music-list row">
           {videoItems}
        </div>

    </div>
       
    );
};

export default CategoryList;