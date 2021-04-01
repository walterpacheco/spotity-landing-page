import React from 'react';

function Jumbotron(props) {
  return (
    <div id="wave">
      <div className="container">
        <div className="jumbotron bg-info">
          <div className="d-flex justify-content-center"><i className="fas fa-shopping-bag"></i>Shopify</div>
          <div className="display-4 text-center">Sell online with Shopify</div>
          <div><p className="lead text-center">
            Trusted by over 800.000 nusinesses worldwide
          </p></div>
          <form className="d-flex justify-content-center">
            <input type="text" id="lname" name="lname"></input>
            <button type="button" class="btn btn-secondary">Start Tree fail</button>
          </form>
          <div className="text-center">Try Shopify free for 34 days, no credit card required. By entering your email, you agree to receive </div>
        </div>
      </div>

    </div>
  );
}

export default Jumbotron;