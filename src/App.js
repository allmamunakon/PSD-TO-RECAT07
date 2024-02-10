
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook} from "@fortawesome/free-brands-svg-icons"
import MenuBar from './Componant/1Menu/MenuBar';
import Core from './Componant/Core/Core';
import Other from './Componant/Other/Other';
import Amazing from './Componant/Amazing/Amazing';
import About from './Componant/About/About';
import Awesome from './Componant/Awesome/Awesome';
import Contact from './Componant/Contact/Contact';



function App() {
  return (
    <div className="App">
           
      <MenuBar />
      <Core />
      <Other />
      <Amazing />
      <About />
      <Awesome />
      <Contact />
     
    </div>
  );
}

export default App;
