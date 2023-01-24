import Hero from '../components/home/hero';
import Intro from '../components/home/intro';
import avatar from '../assets/image/avatar.png'
import { AppProvider } from '../components/contex/app-contex';

function Home() {
  return (
    <div className='home'>
       <Intro/>
       <Hero/>
       <img src={avatar} className="avatar" alt="logo"  />
    </div>
  );
}

export default Home;
