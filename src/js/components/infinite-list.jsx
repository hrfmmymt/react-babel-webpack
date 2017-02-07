import React, { Component } from "react";
import ReactDOM from "react-dom";
import InfiniteScroll from "react-infinite-scroller";
import request from "superagent";

export default class InfiniteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: [],
      hasMoreItems: true,
      nextHref: null
    };
  }

  loadItems(page) {
    const api = {
      baseUrl: "https://api.soundcloud.com",
      client_id: "caf73ef1e709f839664ab82bef40fa96"
    };

    let url = api.baseUrl + "/users/8665091/favorites";
    if(this.state.nextHref) {
      url = this.state.nextHref;
    }

    request.get(url, {
      client_id: api.client_id,
      linked_partitioning: 1,
      page_size: 10
    }, {
      cache: true
    })
    .end((err, res) => {
      if(err) {
        console.log("error");
      } else {
        const tracks = this.state.tracks;
        res.body.collection.map(track => {
          if(track.artwork_url == null) {
            track.artwork_url = track.user.avatar_url;
          }
          tracks.push(track);
        });

        if(res.body.next_href) {
          this.setState({
            tracks: tracks,
            nextHref: res.body.next_href
          });
        } else {
          this.setState({
            hasMoreItems: false
          });
        }
      }
    });
  }

  render() {
    const items = [];

    this.state.tracks.map((track, i) => {
      items.push(
      <div className="tracks__item" key={i}>
        <a href={track.permalink_url} target="_blank">
          <img src={track.artwork_url} alt="artwork" />
          <p className="title">{track.title}</p>
        </a>
      </div>
      );
    });

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadItems.bind(this)}
        hasMore={this.state.hasMoreItems}
        loader={<div className="loader">Loading ...</div>}>

        <div className="tracks">
          {items}
        </div>
      </InfiniteScroll>
    );
  }
}