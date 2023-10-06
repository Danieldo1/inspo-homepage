import React from 'react';
import BackgroundImage  from './features/background/BackgroundImage';
import BackgroundImageLeft from './features/background/components/BackgroundImageLeft';
import BackgroundImageRight from './features/background/components/BackgroundImageRight';
import Weather from './features/weather/Weather';
import Quote from './features/quote/Quote';

function App() {
  return (
    <div className='App'>
    <BackgroundImage/>
    <header>
    <Weather />

    </header>
    <aside className="left__control wallpaper-control" >
      <BackgroundImageLeft  />
    </aside>
    <main>

    </main>
    <aside className="right__control wallpaper-control">
      <BackgroundImageRight  />
    </aside>
      <footer >
        <Quote  />
      </footer>
    </div>
  );
}

export default App;
