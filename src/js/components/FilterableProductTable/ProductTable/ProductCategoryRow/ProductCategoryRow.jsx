import React from 'react';

class ProductCategoryRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			 <tr><th colSpan="2">{this.props.category}</th></tr>
		);
	}
}


export default ProductCategoryRow;
