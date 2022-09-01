import "./style.css"
import img1 from "./images/image-equilibrium.jpg";
import img2 from "./images/icon-view.svg";
import img3 from "./images/icon-ethereum.svg";
import img4 from "./images/image-avatar.png";
import img5 from "./images/icon-clock.svg";
// import img3 from "./images/icon-ethereum.svg";
function App()
{
  return (
    <div className="App">
      <div className="container">
        <div className="container-header">
          <div className="equilibrium">
            <img
              src={img1}
              alt="Equilibrium Image"
              className="container-img"
            />
            <div className="equilibrium-hover">
              <img src={img2} alt="View Eye Icon" />
            </div>
          </div>

          <h1 className="container-h1">Equilibrium #3429</h1>
          <p className="container-p">
            Our Equilibrium collection promotes balance and calm.
          </p>
        </div>
        <div className="icon-block">
          <ul>
            <li>
              <img
                src={img3}
                alt="Avatar icon"
                className="icon"
              /><span className="blue"> 0.041 ETH </span>
            </li>
            <li>
              <img
                src={img5}
                alt="Avatar icon"
                className="icon"
              /><span className="white"> 3 days left </span>
            </li>
          </ul>
        </div>
        <div className="container-bottom">
          <img
            src={img4}
            alt="Image Avatar"
            className="img-avatar"
          />
          <span>Creation of</span><a href="#">Jules Wyvern</a>
        </div>

        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
          >. Coded by <a href="#">n12oyan</a>.
        </div>
      </div>
    </div>
  );
}

export default App;
