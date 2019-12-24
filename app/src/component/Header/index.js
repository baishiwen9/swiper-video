import React, {Component} from 'react';
import './index.css';
import backIcon from './../imgs/arrow-left.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    backHome = () => {
        this.props.showHomePage && this.props.showHomePage();
    }

    render() {
        return (
            <div className="header-wrap" >
                <img className="backIcon" src={backIcon} alt="icon" onClick={()=>this.backHome()} />
                <p className="title">navbar组件</p>
            </div>
        )
    }
}


export default Header;