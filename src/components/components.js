import React from "react";
import Home from "./Home";
import techstack from "./Techstack";

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Techstack from "./Techstack";

export default class components extends Component {
  static propTypes = {second: third}

  render() {
    return (
      <div>
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link> 
                        </li>
                        <li>
                            <Link to='/Techstack'>Home</Link> 
                        </li>
                    </ul>
                </nav>
                <switch>
                    <Route path='/Home'>
                        <Home/>
                    </Route>
                    <Route path='/Techstack'>
                        <Techstack/>
                    </Route>
                </switch>
            </div>
        </Router>
      </div>
    )
  }
}
