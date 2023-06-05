import './assets/scss/App.scss';
import Album from './components/Album.js';

function App() {
  const albums = [
    {
      title: 'Ruth in the Bardo',
      artist: 'name',
      year: '2023',
      role: 'Producing, Engineering',
      image: 'LFD_FallingInLoveWithYou.jpeg',
      link: 'bandcamp.com/song',
    },
    {
      title: 'Plot Armor',
      artist: "Let's Rally",
      role: 'Engineering, Mixing',
      year: '2022',
      image: 'RP_PlotArmor.jpeg',
      link: 'https://letsrally.bandcamp.com/album/plot-armor ',
    },
    {
      title: "Cryin' with the Homies",
      artist: 'Coach Mike',
      year: '2023',
      role: 'Producing, Engineering, Mixing, Mastering',
      image: 'CM_CryinWithTheHomies.jpeg',
      link: 'https://coachmike.bandcamp.com/track/cryin-with-the-homies',
    },
    {
      title: 'Felt Like Forever EP',
      artist: 'Attic Posture',
      role: 'Producing, Engineering, Mixing, Mastering',
      year: '2022',
      image: 'AP_FeltLikeForever.jpeg',
      link: 'https://atticposture.bandcamp.com/album/felt-like-forever-ep',
    },
    {
      title: 'This Is Our Youth',
      artist: 'Party Harding',
      year: '2023',
      role: 'Engineering, Mixing, Mastering',
      image: 'PH_ThisIsOurYouth.jpeg',
      link: 'https://partyharding.bandcamp.com/album/this-is-our-youth-2',
    },
    {
      title: 'Close Enough EP',
      artist: 'Sweet Jams',
      role: 'Engineering',
      year: '2022',
      image: 'SJ_CloseEnough.jpeg',
      link: 'https://sweetlyjamming.bandcamp.com/album/close-enough-ep',
    },
    {
      title: 'Close My Eyes',
      artist: 'Sweet Jams',
      year: '2023',
      role: 'Engineering',
      image: 'SJ_CloseMyEyes.jpeg',
      link: 'https://sweetlyjamming.bandcamp.com/track/close-my-eyes',
    },
    {
      title: 'Falling In Love With You',
      artist: 'Love For Dinner',
      role: 'Producing, Mixing',
      year: '2022',
      image: 'LFD_FallingInLoveWithYou.jpeg',
      link: 'https://lovefordinner.bandcamp.com/track/falling-in-love-with-you',
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
