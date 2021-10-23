import Wraper from './components/mainWraper';
import SingUpForm from './components/SingUpForm';
import MapImage from './components/mapImage/mapContainer';
import Footer from './components/Footer/';
// import './App.css';



function App() {

  return (
    <>
      <Wraper>
        <SingUpForm></SingUpForm>
        <MapImage/>
      </Wraper>
      <Footer />
    </>
  );  
}

export default App;
