import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import Title from './Title'
import {storeProducts} from '../data'
import {ProductConsumer} from '../context'
export default class ProductList extends Component {
	static propTypes = {
		prop: PropTypes
	}
	constructor(props) {
		super(props)
		this.state = {
			products: storeProducts
		}
	}
	render() {
		return (
			<React.Fragment>
				<div className="py-5">
					<div className="container">
						<Title name = "our" title = "products"/>
						<div className="row">
							<ProductConsumer>
								{(value) => {
									return value.products.map(product => {
										return <Product key = {product.id} product = { product }/>
									})
								}}
							</ProductConsumer>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}
