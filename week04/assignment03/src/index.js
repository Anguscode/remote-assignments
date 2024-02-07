import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const Header = () => {
  return (
    <>
    <header className="main-header">
    <h3 className="title-logo"> Website Title / Logo </h3>
    <DesktopMenu />
    <HamburgMenu />
    </header>
    </>
  )
}

const DesktopMenu = () =>{
  return (
    <nav>
      <ul className="main-nav">
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#">Item 3</a></li>
        <li><a href="#">Item 4</a></li>
      </ul>  
    </nav>
  )

}

const HamburgMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!menuOpen && (
      <div className="hamburger-container" onClick={() => setMenuOpen((prevOpen) => !prevOpen)}>
        <div className="hamburger-menu">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      )}

      {menuOpen && (
        <nav className="hamburger-menu-container">
          <div className="x-button" onClick={() => setMenuOpen((prevOpen) => !prevOpen)}>X</div>
          <ul className="menu-list">
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
            <li><a href="#">Item 4</a></li>
          </ul>
        </nav>
      )}
    </>
  );
};

const Message = () => {
  const [first, second] = useState(false);

  return (
    <section className="message" >
      <h2 className="welcome" onClick={() => second((prevStauts) => !prevStauts)}> {first ? "Have a Good Time!" : "Welcome Message"} </h2>
    </section>
  )
}

const Box = () => {
  return (
    <>
      <h2 className="title">Section Title</h2>
      <section className="container">
        <div className="item">Content Box 1</div>
        <div className="item">Content Box 2</div>
        <div className="item">Content Box 3</div>
        <div className="item">Content Box 4</div>
      </section>
    </>
  )
}


const Btn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cta-container" onClick={() => setIsOpen((prevOpen) => !prevOpen)}>
      <button className="cta-button">Call to Action</button>
      {isOpen && (
        <section className="container">
          <div className="item">Content Box 5</div>
          <div className="item">Content Box 6</div>
          <div className="item">Content Box 7</div>
          <div className="item">Content Box 8</div>
        </section>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode />
  <Header />
  <HamburgMenu />
  <Message />
  <Box />
  <Btn />
  </>
);
