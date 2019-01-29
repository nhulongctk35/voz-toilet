import React, { Component } from 'react';

import newService from '../services/new.service';
import Nav from '../components/Nav';
import Meta from '../components/Meta';

class View extends Component {
  static async getInitialProps(req) {
    const data = await newService.getDetail(req.query.id);
    return {
      data,
    };
  }

  state = { comments: [] };

  componentDidMount() {
    newService
      .getComments(this.props.data.id)
      .then(res => this.setState({ comments: res }));
  }

  render() {
    const { title, content } = this.props.data;
    const { comments } = this.state;
    return (
      <div className="container mx-auto">
        <Meta title={title} desc={title} />
        <Nav />
        <h2 className="text-4xl mt-10 mb-5 ml-2">{title}</h2>
        <blockquote className="bg-grey-lighter p-2 border-l-4 text-2xl leading-normal">
          <div className="my-2" dangerouslySetInnerHTML={{ __html: content }} />
        </blockquote>
        <br/>
        <h2>COMMENTS</h2>
        <ul className="list-reset">
          {comments &&
            comments.map(comment => (
              <li key={comment.id} className="py-4 px-2">
                <strong className="mb-2">{comment.user_meta.username}</strong>
                <blockquote className="bg-grey-lighter p-2 border-l-4 text-2xl leading-normal">
                  <div dangerouslySetInnerHTML={{ __html: comment.content }} />
                </blockquote>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default View;
