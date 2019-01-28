import React from 'react';

import NewList from '../components/news';
import Nav from '../components/Nav';

import newService from '../services/new.service';
import Spinner from '../components/Spinner';

function reformatResData(results = []) {
  return results.reduce((acc, item) => {
    const date = new Date(item.created);
    const dateString = `${date.getDate()}/${date.getMonth() +
    1}/${date.getFullYear()}`;

    return acc.concat({
      id: item.id,
      title: item.title,
      created: dateString,
      totalComments: item.total_comments || 0,
    });
  }, []);
}

class App extends React.Component {
  static async getInitialProps(req) {
    const { id = 'diembao', page = 1 } = req.query;
    const data = await newService.getAlls(id, page);
    const items = reformatResData(data.results);
    return { items };
  }

  render() {
    const { items } = this.props;
    return (
      <div className="container mx-auto" style={{ backgroundColor: '#f6f6ef' }}>
        <Nav />
        <div className="mt-3">
          {items ? <NewList news={items} /> : <Spinner size={20} />}
        </div>
      </div>
    );
  }
}

export default App;
