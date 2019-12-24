import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import './layout.css';


class Layout extends Component{
    
	render(){
		const linkList = [
			{path: '', text: '类抖音视频', id: 'video', },
			{path: 'comp', text: '其他组件', id: 'comp',},
		];

		return(
			<ul className="menuList">
				{
					linkList.map((item, index) => 
						<li className="list" key={index}><NavLink exact id={item.id} to={`/${item.path}`} activeStyle={{borderBottom: `4px solid ${item.activeColor}`,color: '#333333'}} replace>{item.text}</NavLink></li>
					)
				}
			</ul>
		)
	}

}

export default Layout;