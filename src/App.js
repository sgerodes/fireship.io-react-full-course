import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import {Card, Icon} from './3.Components';
// import LoadingButton from './4.ConditionalRendering';
// import Loops from './5.Loops';
// import EventPlayground from './6.Events';
// import Stateful from './7.State';
import Countdown from './8.LifecycleAndEffects';


function App() {
  return (
      <div>
        <Countdown hr={1} min={45} sec={0} />
      </div>
  );
}

export default App;
