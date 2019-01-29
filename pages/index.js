import React from 'react';

import NewList from '../components/news';
import Nav from '../components/Nav';
import Meta from '../components/Meta';
import LoadMoreContext from '../components/LoadMore.context';

import newService from '../services/new.service';

function getQueryStringValue(
  url = 'https://p.voz.vn/feed/?box=diembao&page=3'
) {
  if (!url) return;

  const urlSegment = url
    .split('?')[1]
    .split('&')
    .reduce((acc, value) => {
      const [key, content] = value.split('=');
      return acc.concat({ [key]: content });
    }, []);

  return urlSegment;
}

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

    return { items, nextPage: data.next };
  }

  render() {
    const { items, ...rest } = this.props;
    const [box, page] = getQueryStringValue(this.props.nextPage);

    return (
      <div className="container mx-auto">
        <Meta />
        <Nav />
        <div className="mt-3">
          <LoadMoreContext.Provider
            value={{ id: box['box'], page: page['page'] }}
          >
            <NewList news={items} {...rest} />
          </LoadMoreContext.Provider>
        </div>
        <hr />
        <style jsx global>{`
          body {
            background-color: rgb(30, 34, 39);
            color: #fff;
          }
          hr {
            height: 2px;
            border-top: 1px solid #ff6600;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
