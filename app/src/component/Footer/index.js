import React, {Component} from 'react';
import './index.css';


class Footer extends Component{
    render() {
        const {description, author} = this.props;
        return (
            <div className="footer-wrap">
                <div className="userInfo">
                    <img className="avatar" src={author && author.icon} alt="avatar" />
                    <div className="basic-infos">
                        {/* <p className="name text">{author && author.nickname}</p> */}
                        <p className="desc text">{description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
