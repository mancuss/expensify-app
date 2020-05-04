import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout, startLogin } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header className='header'>
    <div className='content-container'>
      <div className='header__content'>
        <Link className='header__title' to='/dashboard'>
          <h1>Expensify</h1>
        </Link>

        <button className='button button--link' onClick={startLogout}>
          Logout
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);

// export const Header = ({ startLogout }) => (
//   <header>
//     <h1>Expensify</h1>
//     <NavLink to='/dashboard' activeClassName='is-active'>
//       Expensify
//     </NavLink>
//     <NavLink to='/create' activeClassName='is-active'>
//       Create Expense
//     </NavLink>
//     <button onClick={startLogout}>Logout</button>
//   </header>
// );
