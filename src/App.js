import logo from './logo.svg';
import './App.css';
import Album from './components/Album.js';

function App() {
  const sampleData = [
    {
      id: 'recxHvVai51GUBmd1',
      album: 'album title',
      year: '2023',
      link: 'bandcamp.com/song',
    },
    {
      id: 'recxHvVai51GUBmd2',
      album: 'album title',
      year: '2022',
      link: 'bandcamp.com/song',
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>North Room Records</p>
        {sampleData.map((album, index) => (
          <Album key={index} album={album} />
        ))}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
