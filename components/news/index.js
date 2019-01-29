import React from 'react';

import LoadMoreContext from '../LoadMore.context';

function SingleNew({ data, rank }) {
  return (
    <li className="py-4 px-2 hover:bg-grey-darker">
      <a
        href={`/view?id=${data.id}`}
        className="group no-underline text-white text-2xl group-hover:bg-grey-darker"
      >
        <div className="flex">
          <span className="mr-1 opacity-50">{`${rank}. `}</span>
          <div className="flex-1">
            <span>{data.title}</span>
            <p className="text-xs pt-1 opacity-50 text-lg pl-1">
              <span>{data.created}</span>
              <span> | </span>
              {data.totalComments > 0 && (
                <span>{data.totalComments} comments</span>
              )}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
}

function LoadMoreButton() {
  return (
    <LoadMoreContext.Consumer>
      {({ id, page }) => (
        <a className="pl-12 text-white text-2xl no-underline" href={`/index?id=${id}&page=${page}`}>
          Load more...
        </a>
      )}
    </LoadMoreContext.Consumer>
  );
}

export default function NewList({ news = [] }) {
  return (
    <ul className="list-reset">
      {news.map((singleNew, index) => (
        <SingleNew key={singleNew.id} data={singleNew} rank={index + 1} />
      ))}
      <li className="py-4 px-2 hover:bg-grey-darker">
        <LoadMoreButton />
      </li>
    </ul>
  );
}
