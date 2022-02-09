import './App.css';
import Navbar from '../src/components/Navbar'; 
import Hero from '../src/components/Hero';
import Card from '../src/components/Card';
import Data from './Data'

export default function App() {
  return (
    <div className='app--wrapper'>
      <Navbar />
      <Hero />
      <div className='app--cards'>
        {Data.map(data => <Card key={data.id} item={data} />)}
      </div>
    </div>
  );
}
