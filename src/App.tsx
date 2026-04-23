// src/App.tsx
import { useState } from 'react';
import { Header } from './components/ui';
import { HomePage, RoutePage, RidesPage, SearchingPage, DriverPage, InRidePage } from './pages';
import { GLOBAL_CSS } from './constants/styles';
import type { Screen, Route, Booking } from './types';

function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [route, setRoute] = useState<Route | null>(null);
  const [booking, setBooking] = useState<Booking | null>(null);

  const go = (s: Screen) => setScreen(s);

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <div className="rs-root">
        <Header screen={screen} onHome={() => go('home')} />
        
        {screen === 'home' && (
          <HomePage onSearch={(q) => { setRoute({ from: 'My Location', to: q }); go('route'); }} />
        )}
        
        {screen === 'route' && (
          <RoutePage onConfirm={(r) => { setRoute(r); go('rides'); }} onBack={() => go('home')} />
        )}
        
        {screen === 'rides' && route && (
          <RidesPage route={route} onBook={(b) => { setBooking(b); go('searching'); }} onBack={() => go('route')} />
        )}
        
        {screen === 'searching' && booking && (
          <SearchingPage booking={booking} onDriverFound={() => go('driver')} onCancel={() => go('home')} />
        )}
        
        {screen === 'driver' && booking && (
          <DriverPage booking={booking} onArrived={() => go('inRide')} onCancel={() => go('home')} />
        )}
        
        {screen === 'inRide' && booking && route && (
          <InRidePage booking={booking} route={route} onComplete={() => go('home')} />
        )}
      </div>
    </>
  );
}

export default App;
