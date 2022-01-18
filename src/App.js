import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ProjectList from './components/ProjectList/ProjectList';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <AboutMe />
        <ProjectList />
    </div>
  );
}

export default App;
