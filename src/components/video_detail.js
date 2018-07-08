import React from 'react';

const VideoDetail = (props) => {

  if (!props.video) 
    return (
      <div>loading...
      </div>
    );
  const url = "https://www.youtube.com/embed/" + props.video.id.videoId;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          width="100%"
          height="auto"
          src={url}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen></iframe>
      </div>

      <div className="details">
        <div>{props.video.snippet.title}</div>
        <div>{props.video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail;