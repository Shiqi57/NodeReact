import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';


class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null: 
                return 'null';
            case false:
                return (
                    <li><a href="/auth/google">Login With Google</a></li>
                );
            default:
                return [
                    <li key = "1"><Payments /></li>,
                    <li Key = "3" style={{ margin :'0 10px'}}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key = "2"><a href="/api/logout">Logout</a></li>
                ]
                    
                
        }
    }
    
    
    render() {
        console.log(this.props);
        return(
            <nav>
                <div className="nav-wrapper">
                    <Link 
                        to={this.props.auth ? '/surveys' : '/'} 
                        className="left brand-logo"
                    >
                        Logo
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderContent()}
                        {/* <li><a>Login with Google</a></li> */}
                        {/* <li><a href="badges.html">Components</a></li> */}
                        {/* <li><a href="collapsible.html">JavaScript</a></li> */}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ auth }){
    console.log('auth' + auth);
    return { auth };
}

export default connect(mapStateToProps)(Header);