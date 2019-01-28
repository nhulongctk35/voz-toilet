import React from 'react';

const LiNKS = [
  {
    id: 'diembao',
    label: 'news',
  },
  {
    id: 'chuyentrolinhtinh',
    label: 'f17',
  },
  {
    id: 'random',
    label: 'random',
    end: true,
  },
];

function NavLinks() {
  return (
    <nav style={{ backgroundColor: '#ff6600' }}>
      <ul className="list-reset flex py-1 pl-2">
        <li className="mr-10">
          <a style={{ color: '#000'}}>VOZ News</a>
        </li>
        {LiNKS.map((item, index) => (
          <li key={index}>
            <a
              style={{ color: '#000'}}
              className="hover:text-grey-darker"
              href={`/index?id=${item.id}`}
            >
              {item.label}
            </a>
            {!item.end && <span className="px-1 text-black opacity-50">|</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
