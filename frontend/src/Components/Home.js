import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="overlay">
        <div className="content">
          <h1>Welcome</h1>
          <br></br>
          <p>To TechnoShop</p>
          <p className="p-home">
          Trouvez le meilleur choix de produits avec les prix les plus bas chez TechnoShop, site de vente en ligne
Vous trouverez les prix les moins chers en Tunisie chez TechnoShop, votre boutique en ligne numéro 1 des bonnes affaires. Ne cherchez plus ailleurs, chez TechnoShop une large sélection de produits de qualité vous attend.
          </p>
        <Link to="/login">  <button className="button-17" style={{ backgroundColor: "orange" }}>
            Login
          </button></Link>
         <Link to="/register"> <button className="button-17" style={{ width: "200px" }}>
            Register
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;