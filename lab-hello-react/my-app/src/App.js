import './App.css';
import iconOne from './images/icon1.png';
import iconTwo from './images/icon2.png';
import iconThree from './images/icon3.png';
import iconFour from './images/icon4.png';
import ironhackLogo from './images/ironhack-logo-xs.png';
import menuTop from './images/menu-top-xs.png';

function App() {
  return (
    <div className="App">
      <nav>
        <img id="ironhackLogo" src={ironhackLogo} alt="ironhack logo"/>
        <img id="menuTop" src={menuTop} alt="menu top"/>
      </nav>
      <header>
        <div className="header-text">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
          <a href="/">Awesome!</a>
        </div>
      </header>
      <div className="main-container">
        <div className="main-container-col">
          <img src={iconOne} alt="declarative icon"></img>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="main-container-col">
          <img src={iconTwo} alt="components icon"></img>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="main-container-col">
          <img src={iconThree} alt="single-way icon"></img>
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className="main-container-col">
          <img src={iconFour} alt="jsx icon"></img>
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
