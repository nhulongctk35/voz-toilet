import React from 'react';

function SingleNew({ data, rank }) {
  return (
    <li className="mb-1 flex">
      <span className="mr-1">{`${rank}. `} </span>
      <div className="flex-1">
        <a href={`/view?id=${data.id}`} className="no-underline text-black">
          {' '}
          {data.title}
        </a>
        <p className="text-xs pt-1">
          <span>{data.created}</span>
          <span> | </span>
          <span>{data.totalComments} comments</span>
        </p>
      </div>
    </li>
  );
}

export default function NewList({ news = [] }) {
  return (
    <ul className="list-reset px-3">
      {news.map((singleNew, index) => (
        <SingleNew key={singleNew.id} data={singleNew} rank={index + 1} />
      ))}
    </ul>
  );
}
