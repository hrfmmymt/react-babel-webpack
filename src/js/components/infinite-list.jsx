import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";

export default class InfiniteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: [],
      hasMoreItems: true,
      nextHref: null
    };

    this.loadItems = this.loadItems.bind(this);
  }

  loadItems() {
    const self = this;
    const api = {
      baseUrl: "https://api.soundcloud.com",
      client_id: "caf73ef1e709f839664ab82bef40fa96"
    };

    let url = api.baseUrl + "/users/8665091/favorites";
    if (this.state.nextHref) {
      url = this.state.nextHref;
    }

    axios.get(url, {
      params: {
        client_id: api.client_id,
        linked_partitioning: 1,
        page_size: 10
      }
    })
    .then(res => {
      if (res) {
        const tracks = self.state.tracks;

        res.data.collection.map(track => {
          if (track.artwork_url === null) {
            track.artwork_url = track.user.avatar_url;
          }
          return tracks.push(track);
        });

        if (res.data.next_href) {
          this.setState({
            tracks: tracks,
            nextHref: res.data.next_href
          });
        } else {
          this.setState({
            hasMoreItems: false
          });
        }
      }
    })
    .catch(err => {
      console.error(err.message);
    });
  }

  render() {
    const items = [];

    this.state.tracks.map((track, i) => {
      return items.push(
        <div className="tracks__item" key={i}>
          <a href={track.permalink_url} target="_blank" rel="noopener noreferrer">
            <img src={track.artwork_url} alt="artwork" />
            <p className="title">{track.title}</p>
          </a>
        </div>
      );
    });

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadItems}
        hasMore={this.state.hasMoreItems}
        loader={<div className="loader">Loading ...</div>}
        >

        <div className="tracks">
          {items}
        </div>
      </InfiniteScroll>
    );
  }
}
