import Header from './components/Header'
import './App.scss';
import Section from './components/Section'
import SmallSection from './components/SmallSection'
import CreamSection from './components/CreamSection'

function App() {
  return (
    <div className="App">
     <Header/>
     <Section/>
     <SmallSection/>
     <CreamSection/>
    </div>
  );
}

export default App;
