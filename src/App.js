import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import {Card, Icon} from './3.Components';
// import LoadingButton from './4.ConditionalRendering';
// import Loops from './5.Loops';
// import EventPlayground from './6.Events';
// import Stateful from './7.State';
// import Countdown from './8.LifecycleAndEffects';
// import CountProvider from './9.Context';
import {ErrorBoundary, ErroneousComponent} from './10.ErrorBoundaries';


function App() {
    return (
        <div>
            <h3>Outside the error boundary</h3>
            <ErrorBoundary>
                <h3>Inside the error boundary</h3>
            </ErrorBoundary>
        </div>
    );
}

export default App;
