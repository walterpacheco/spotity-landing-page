import React from "react";

function Header(props) {
  return (
    <div className="header">
      <div className="inner-header flex">

        {/* Contenido */}
        <div><i className="fas fa-shopping-bag mr-1"></i><strong>Shopify</strong></div>
        <div className="display-4 text-center"><strong>Sell online with Shopify</strong></div>
        <div><h4 className="lead text-center"><strong>
          Trusted by over 800.000 nusinesses worldwide
          </strong></h4></div>
        <form className="d-flex justify-content-center">
          <input type="text" id="lname" name="lname" placeholder="Enter your email address"></input>
          <button type="button" class="btn btn-dark ml-1"><strong>Start free trial</strong></button>
        </form>
        <div className="letrasPequeñas text-center">Try Shopify free for 34 days, no credit card required. By entering your email, you agree to receive </div>
      </div>
      <img src="1.png" class="img-fluid" alt="..." />
      <svg className="waves" xmlns="httpS/www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
  );
}

export default Header;
