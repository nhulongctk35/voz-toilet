import React from 'react';

import NewList from '../components/news';
import Nav from '../components/Nav';

import newService from '../services/new.service';
import Spinner from '../components/Spinner';

class App extends React.Component {
  static async getInitialProps() {
    const data = await newService.getAlls();
    const items = data.results.reduce((acc, item) => {
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
    return { items };
  }
  state = {
    source: 'diembao',
  };

  handleSourceChange = newSource => {
    if (newSource === this.state.source) return;

    this.setState(
      {
        source: newSource,
      },
      this.fetchNews
    );
  };

  fetchNews = () => {
    newService
      .getAlls(this.state.source)
      .then(data => this.setState({ news: data }));
  };

  render() {
    const { items } = this.props;
    return (
      <div className="container mx-auto" style={{ backgroundColor: '#f6f6ef' }}>
        <Nav onSelect={this.handleSourceChange} />
        <div className="mt-3">
          {items ? <NewList news={items} /> : <Spinner size={20} />}
        </div>
      </div>
    );
  }
}

export default App;
