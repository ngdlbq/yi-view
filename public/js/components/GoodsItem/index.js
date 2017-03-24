import React,{Component} from 'react'

export default class GoodsItem extends Component{
	render(){
		const {goodsInfo} = this.props
		return (
			<div className="m-goodsItem">
				<a className="u-goodsImg" href="javascript:;">
					<img src={goodsInfo.goodsImg} />
				</a>
				<h3 className="u-goodsName">{goodsInfo.goodsName}</h3>
				<p className="u-goodsDesc">{goodsInfo.goodsDesc}</p>
				<p className="u-goodsPrice">{goodsInfo.mobileNum}人团&nbsp;<span><i>¥{goodsInfo.mobilePrice}&nbsp;</i>包邮</span><em>¥{goodsInfo.originPrice}</em></p>
				<a href="javascript:;" className="u-btn" data-ssuid={goodsInfo.ssuId}>去开团</a>
			</div>
		)
	}
}
