import React from "react";
import request from "superagent";
import jsonp from "superagent-jsonp";

export default class List extends React.Component {
  constructor() {
    super();
    this.state = ({
      lists: []
    });
  }

  componentDidMount() {
    this.serverRequest =
      request.get("http://api.tumblr.com/v2/blog/hrfmmymt/posts?api_key=UzvNmLeVFBpiFMakyac4wPlteUevfkSnQijUz4V8Kcuisvmip7&type=text")
      .use(jsonp)
      .end((err, res) => {
        if(err) {
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

  render() {
    const posts = this.state.lists.map(list => {
      return(
        <li key={list.post_url} data-tags={list.tags} className="list"><a href={list.post_url}>{list.title}</a></li>
      );
    });

    return(
      <ul>
        {posts}
      </ul>
    );
  }
}
