import './App.css';
import Navbar from '../src/components/Navbar'; 
import Hero from '../src/components/Hero';
import Card from '../src/components/Card';

export default function App() {
  return (
    <div className='app--wrapper'>
      <Navbar />
      <Hero />
      <div className='app--cards'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
