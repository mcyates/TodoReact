import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout  } from "../actions/auth";

export const Header = ({ startLogout }) => (
          <header className="header">
            <Link className="header__title" to="/dashboard" >
              <h1>Todo app</h1>
            </Link>
            <button className="link" onClick={startLogout}>
              Logout
            </button>
          </header>      
    );



const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);