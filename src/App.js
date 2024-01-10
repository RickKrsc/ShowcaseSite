import './App.css';
import NavbarComponent from './NavbarComponent';
import Home from './Home';
import Reviews from './Reviews'
import Contacts from './Contacts';
import MobileNavbarComponent from './MobileNavbar';
import { useMediaQuery } from 'react-responsive';


function App() {

  const isMobile = useMediaQuery({ maxWidth: 480 });

  return (
    <div className="App">
      {/* Il componente NavbarComponent verrà visualizzato per schermi più grandi */}
      {!isMobile && <NavbarComponent />}

      {/* Il componente MobileNavbarComponent verrà visualizzato solo per schermi più piccoli */}
      {isMobile && <MobileNavbarComponent />}
      <div id='homepage' className="home-page">
        <div className='justify-content-left '>
          <p id='slogan'> Lorem ipsum <br /> sed necatur hec filim. </p>
        </div>
      </div>
      <Home/>
      <Reviews />
      <Contacts />
    </div>
  );
}

export default App;
