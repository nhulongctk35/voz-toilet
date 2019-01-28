import React, { Component } from 'react';
import newService from '../services/new.service';

class View extends Component {
  static async getInitialProps(req) {
    const data = await newService.getDetail(req.query.id);
    return {
      data,
    };
  }

  render() {
    const { title, content } = this.props.data;
    return (
      <div className={'container mx-auto'}>
        <h2>{title}</h2>
        <blockquote>
          <div className="my-2" dangerouslySetInnerHTML={{ __html: content }} />
        </blockquote>
      </div>
    );
  }
}

export default View;
