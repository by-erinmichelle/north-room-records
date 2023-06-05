import './assets/scss/App.scss';
import { data } from './Data';
import Album from './components/Album.js';
import About from './components/About.js';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />

      <div id="discography" className="albums">
        {data.map((album, index) => (
          <Album key={index} album={album} />
        ))}
      </div>

      <About />
    </div>
  );
}

export default App;
