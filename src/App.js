import 'bootstrap/dist/css/bootstrap.min.css';
import ComNavBar from './components/ComNavBar';
import Services from './components/Services';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Team from './components/Team';
import './App.css';

function App() {
  return (
    <div className="App">
        <ComNavBar />
        <Banner />
        <Services />
        <Team />
        <Footer />
    </div>
  );
}

export default App;
