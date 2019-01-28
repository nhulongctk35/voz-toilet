import React from 'react';
const NEW_RESOURCE = [
  {
    value: 'google-news',
    label: 'Google News',
  },
  {
    value: 'abc-news-au',
    label: 'ABC News (AU)',
  },
  {
    value: 'al-jazeera-english',
    label: 'Al Jazeera English',
  },
];

const LiNKS = [
  {
    url: 'tintuc',
    label: 'news',
  },
  {
    url: 'chuyentrolinhtinh',
    label: 'f17',
  },
  {
    url: 'random',
    label: 'random',
    end: true,
  },
];

function NavLinks() {
  return (
    <div style={{ backgroundColor: '#ff6600' }}>
      <ul className="list-reset flex py-1">
        <li className="mr-10">
          <a className="text-black">VOZ News</a>
        </li>
        {LiNKS.map((item, index) => (
          <li key={index}>
            <a
              className="text-grey-darkest hover:text-grey-darker"
              href={`#/${item.url}`}
            >
              {item.label}
            </a>
            {!item.end && '| '}
          </li>
        ))}
      </ul>
    </div>
  );
}

function NewSource({ onSelect }) {
  return (
    <div id="new-source">
      <h3 className="u-collor-primary">Select News Source</h3>
      <div className="d-inline">
        <select
          name="new category"
          id="new-category"
          onChange={event => event.target.value && onSelect(event.target.value)}
        >
          <option value="" disabled>
            Please select news source ...
          </option>
          {NEW_RESOURCE.map(resource => (
            <option key={resource.value} value={resource.value}>
              {resource.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

const Sidebar = ({ onSelect }) => {
  return (
    <nav>
      {/*<NewSource onSelect={onSelect} />*/}
      <NavLinks />
    </nav>
  );
};

Sidebar.defaultProps = {
  onSelect: () => {},
};

export default Sidebar;
