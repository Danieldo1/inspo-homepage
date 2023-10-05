import React from 'react';
import BackgroundImage  from './features/background/BackgroundImage';
import BackgroundImageLeft from './features/background/components/BackgroundImageLeft';
import BackgroundImageRight from './features/background/components/BackgroundImageRight';

function App() {
  return (
    <div>
    <BackgroundImage/>
    <aside>
      <BackgroundImageLeft/>
    </aside>
    <aside>
      <BackgroundImageRight />
    </aside>
    
    </div>
  );
}

export default App;
