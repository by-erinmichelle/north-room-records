import './assets/scss/App.scss';
import Album from './components/Album.js';

function App() {
  const albums = [
    {
      title: 'album title',
      artist: 'name',
      year: '2023',
      role: 'role',
      img_path: 'https://placehold.co/220',
      link: 'bandcamp.com/song',
    },
    {
      title: 'album title',
      artist: 'name',
      role: 'role',
      year: '2022',
      img_path: 'https://placehold.co/220',
      link: 'bandcamp.com/song',
    },
    {
      title: 'album title',
      artist: 'name',
      year: '2023',
      role: 'role',
      img_path: 'https://placehold.co/220',
      link: 'bandcamp.com/song',
    },
    {
      title: 'album title',
      artist: 'name',
      role: 'role',
      year: '2022',
      img_path: 'https://placehold.co/220',
      link: 'bandcamp.com/song',
    },
    {
      title: 'album title',
      artist: 'name',
      year: '2023',
      role: 'role',
      img_path: 'https://placehold.co/220',
      link: 'bandcamp.com/song',
    },
    {
      title: 'album title',
      artist: 'name',
      role: 'role',
      year: '2022',
      img_path: 'https://placehold.co/220',
      link: 'bandcamp.com/song',
    },
    {
      title: 'album title',
      artist: 'name',
      year: '2023',
      role: 'role',
      img_path: 'https://placehold.co/220',
      link: 'bandcamp.com/song',
    },
    {
      title: 'album title',
      artist: 'name',
      role: 'role',
      year: '2022',
      img_path: 'https://placehold.co/220',
      link: 'bandcamp.com/song',
    },
    {
      title: 'album title',
      artist: 'name',
      year: '2023',
      role: 'role',
      img_path: 'https://placehold.co/220',
      link: 'bandcamp.com/song',
    },
  ];

  return (
    <div className="App">
      <header className="sidebar">
        {/* <div className="sidebar__content"> */}
        {/* logo */} <h1>North Room Records</h1>
        <nav className="menu">
          <a href="#discography">Discography</a>
          <a href="#about">About</a>
          <div className="social-icons">
            <div className="icon">
              <img
                src={process.env.PUBLIC_URL + '/assets/instagram.png'}
                alt=""
              />
            </div>
            <div className="icon">
              <img src={process.env.PUBLIC_URL + '/assets/email.png'} alt="" />
            </div>
          </div>
        </nav>
        {/* </div> */}
      </header>

      <div id="discography" className="albums">
        {albums.map((album, index) => (
          <Album key={index} album={album} />
        ))}
      </div>

      <div id="about" className="about">
        <img
          className="about__img"
          src="https://placehold.co/600x400"
          alt="photo of Rob and Packie"
        />

        <div className="about__content">
          <h2>Rob & Packie.</h2>
          <p>Some text about us</p>
        </div>
      </div>
    </div>
  );
}

export default App;
