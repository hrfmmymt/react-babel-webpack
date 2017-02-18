import React from "react";
import request from "superagent";
import jsonp from "superagent-jsonp";

class FilterPosts extends React.Component {
  filterVal() {
    const val = this.textInput.value;
    this.props.onFilterVal(val);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={input => {
            this.textInput = input;
          }}
          onChange={this.filterVal.bind(this)}
          placeholder="sort"
          />
      </div>
    );
  }
}
FilterPosts.propTypes = {
  onFilterVal: React.PropTypes.func.isRequired
};

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    };
  }

  componentDidMount() {
    this.serverRequest =
      request.get("//api.tumblr.com/v2/blog/hrfmmymt/posts?api_key=UzvNmLeVFBpiFMakyac4wPlteUevfkSnQijUz4V8Kcuisvmip7&type=text")
      .use(jsonp({
        timeout: 3000
      }))
      .end((err, res) => {
        if (err) {
          console.log(err.message);
        } else {
          const data = res.body.response.posts;
          this.setState({
            lists: data
          });
        }
      });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  handleFilterVal(val) {
    const filteredList = this.state.lists.filter(list => {
      return (
        list.title.toLowerCase().indexOf(val) > -1
      );
    });
    this.setState({
      lists: filteredList
    });
  }

  render() {
    const posts = this.state.lists.map(list => {
      return (
        <li key={list.post_url} data-tags={list.tags}><a href={list.post_url}>{list.title}</a></li>
      );
    });

    return (
      <div>
        <FilterPosts onFilterVal={this.handleFilterVal.bind(this)} />
        <ul>
          {posts}
        </ul>
      </div>
    );
  }
}
