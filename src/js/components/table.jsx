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

  render() {
    const posts = this.state.lists.map(list => {
      const t = new Date(list.timestamp * 1000);
      const y = t.getFullYear();
      let m = t.getMonth() + 1;
      m = (m < 10) ? "0" + m : m;
      let d = t.getDate();
      d = (d < 10) ? "0" + d : d;
      const timestamp = d + "/" + m + "/" + y;

      return (
        <tr key={list.post_url} data-tags={list.tags} className="row">
          <td>{list.title}</td>
          <td><a href={list.short_url}>{list.short_url}</a></td>
          <td>{timestamp}</td>
          <td>{list.format}</td>
          <td>{list.tags}</td>
        </tr>
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>url</th>
            <th>posted date</th>
            <th>format</th>
            <th>tags</th>
          </tr>
        </thead>
        <tbody>
          {posts}
        </tbody>
      </table>
    );
  }
}
