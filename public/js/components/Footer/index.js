import React,{Component} from 'react'


export default class Footer extends Component {
	constructor(){
		super();
		this.state = {
			focused: 0
		};
	}

	handleClick(index) {
		this.setState({
			focused: index
		})
	}

	render(){
		const {focused} = this.state;

		return (
			<div className="m-footer">
				<a href="javascript:;" className={focused == 0 ? 'active' : ''} onClick={() => this.handleClick(0)}>首页</a>
				<a href="javascript:;" className={focused == 1 ? 'active' : ''} onClick={() => this.handleClick(1)}>我的团</a>
				<a href="javascript:;" className={focused == 2 ? 'active' : ''} onClick={() => this.handleClick(2)}>个人中心</a>
			</div>
		)
	}
}