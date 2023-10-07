import React from 'react';
import BackgroundImage  from './features/background/BackgroundImage';
import BackgroundImageLeft from './features/background/components/BackgroundImageLeft';
import BackgroundImageRight from './features/background/components/BackgroundImageRight';
import Weather from './features/weather/Weather';
import Quote from './features/quote/Quote';
import Time from './features/timezones/Time';
import Main from './features/Thoughts/Main';
import { useDispatch } from 'react-redux';
import { getFact } from './API/facts/index';

function App() {
  const dispatch = useDispatch();
  return (
    <div className='App'>
    <BackgroundImage/>
    <header className='header' >
    <Time />
    <Weather />
    </header>
    <aside className="left__control wallpaper-control" >
      <BackgroundImageLeft  />
    </aside>
    <main>
    <Main />
    </main>
    <aside className="right__control wallpaper-control">
      <BackgroundImageRight  />
    </aside>
      <footer  onClick={() => dispatch(getFact())} >
        <Quote  />
      </footer>
    </div>
  );
}

export default App;
