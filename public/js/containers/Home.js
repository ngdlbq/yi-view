import {Footer,GoodsItem} from '../components'
import React,{Component} from 'react'
//import {getGoodsList} from '../../tools/url'
//import url from '../../tools/url'

let goodsList = require('../../mock/goodsList.json')

export default class Home extends Component {
	constructor(){
		super();
		this.goodsList = {};
	}
	componentWillMount(){
		let _that = this; 
		// url.getGoodsList('mock/goodsList.json',function(data) {
		// 	_that.goodsList = data;
		// })
		_that.goodsList = goodsList;
	}
	render(){
		let _goodsList = this.goodsList;
		return (
			<div className="g-home">
				<div className="m-goodsList">
					{_goodsList.map((item,index) => 	
						<GoodsItem key={index} goodsInfo={item} />
					)}
				</div>
				<Footer />
			</div>
		)
	}
}