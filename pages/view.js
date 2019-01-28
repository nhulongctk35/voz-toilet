import React, { Component } from 'react';
import newService from '../services/new.service';
import Nav from '../components/Nav';

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
        <Nav />
        <h2 className="text-4xl mt-10 mb-5">{title}</h2>
        <blockquote className="bg-grey-lighter p-2 border-l-4 text-2xl leading-normal">
          <div className="my-2" dangerouslySetInnerHTML={{ __html: content }} />
        </blockquote>
      </div>
    );
  }
}

export default View;
