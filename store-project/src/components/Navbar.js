import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.png'
//import styled from 'styled-components';
import {ButtonConatiner} from './Button'
//import {navWrapper} from './NavWrapper.jsx'
import {NavWrapper} from './Button'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <NavWrapper className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-7">
                    <Link to="/">
                    <img src={logo} alt="store"
                    className="navbar-brand" />
                    </Link>
                  <ul className="navbar-nav allign-itmes-center">
                      <li className="nav-item ml-5">
                          <Link to="/" className="nav-link">
                              Mobile Phones
                          </Link>

                      </li>

                  </ul>
                  <Link to="/cart" className="ml-auto">
                      <ButtonConatiner>
                      <i className="fas fa-shopping-cart"></i>
                      Check out
                      </ButtonConatiner>
                     
                     

                  </Link>

                </NavWrapper>
            </div>
        );
    }
}

