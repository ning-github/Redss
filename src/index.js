// import
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Youtube key
const API_KEY = 'AIzaSyCPCVLHefpaKHpDo3msv6RHuyPr7tvV_Yk';


// Create component. This component should produce some html --- MAKE
class App extends Component{
    constructor(props) {
        super(props);

        this.state = ({
            videos: [],
            selectedVideo: null
        });

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render () {
        const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={term => {videoSearch(term)}} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={(selectedVideo)=>{this.setState({selectedVideo})}} />
            </div>
        );
    }
};

// Take this compoennt's generated html
// and put in on the page (in the DOM) --- SHOW
ReactDOM.render(<App />, document.querySelector('.container'));
