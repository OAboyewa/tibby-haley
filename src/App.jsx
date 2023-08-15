import './App.css'
import "/src/styles/Text.css";
import "/src/styles/Button.css";
import Header from '/src/components/Header.jsx';
import Footer from '/src/components/Footer.jsx';
import Index from '/src/pages/Index.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Index />
      <Footer />
    </div>
  );
}

export default App;
