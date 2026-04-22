// app/page.js
"use client";
import { useState } from 'react';
import Onboarding from './components/Onboarding';
import Login from './components/Login';

export default function Home() {
  const [view, setView] = useState('onboarding'); // 'onboarding' or 'login'

  return (
    <>
      {view === 'onboarding' ? <Onboarding setView={setView} /> : <Login setView={setView} />}
    </>
  );
}