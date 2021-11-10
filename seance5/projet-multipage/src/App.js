import Navigation from './components/Navigation'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

import MainRouter from './MainRouter'
function App() {
  return (
    <div className="App">
      <Navigation />
      <MainRouter />
      <Footer />
    </div>
  );
}

export default App;
