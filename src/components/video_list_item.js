import React from 'react';

const VideoListItem = (props) => {
  return (
    <li
      onClick={() => props.onVideoSelect(props.video)}
      className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={props.video.snippet.thumbnails.default.url}/>
        </div>
        <div className="media-body">

          <h5>{props.video.snippet.title}</h5>
          <p>{props.video.snippet.description}</p>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;