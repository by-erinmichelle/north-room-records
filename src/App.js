import logo from './logo.svg';
import './assets/scss/App.scss';
import Album from './components/Album.js';

function App() {
  const albums = [
    {
      title: 'album title',
      artist: 'name',
      year: '2023',
      role: 'role',
      img_path: 'image.jpg',
      link: 'bandcamp.com/song',
    },
    {
      title: 'album title',
      artist: 'name',
      role: 'role',
      year: '2022',
      img_path: 'image.jpg',
      link: 'bandcamp.com/song',
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>North Room Records</p>
        {albums.map((album, index) => (
          <Album key={index} album={album} />
        ))}
      </header>
    </div>
  );
}

export default App;
