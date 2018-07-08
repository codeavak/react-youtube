import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//create react component use this component to display some html
const API_Key = 'AIzaSyA8S9quT84zmG56K9aOUNd6dhkXlhKApi8';

//tell compiler to shove our new component in the dom

class App extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('metallica')

    //es6 magic when key and property are same!
  }
  videoSearch(term) {

    YTSearch({
      key: API_Key,
      term: term
    }, (videos) => this.setState({videos: videos, selectedVideo: videos[0]}));
  }
  render() {
    return (
      <div>
        <SearchBar onSearch={_.debounce(term => this.videoSearch(term), 1000)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.getElementsByClassName('container')[0]);