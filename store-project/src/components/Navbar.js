import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.png'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-7">
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
                      <button>
                      <i class="fas fa-shopping-cart"></i>
                      Check out
                      </button>

                  </Link>

                </nav>
            </div>
        )
    }
}
