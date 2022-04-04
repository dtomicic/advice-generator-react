import './app.css';
import dividerMob from './pattern-divider-mobile.svg';
import dividerDesk from './pattern-divider-desktop.svg';
import FetchAdv from './components/FetchAdv'


function App() {
  return (
    <div className="main">
      <div className="box">
        <FetchAdv />
        <img src={dividerMob} className='dividerMob' />
        <img src={dividerDesk} className='dividerDesk' />
      </div>
    </div>
  );
}

export default App;
