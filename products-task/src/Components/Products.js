import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { AiFillPlusCircle } from "react-icons/ai";

export default class Products extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}/{this.props.currentCategory}
        </h3>
        <Table striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Quantity per Unit</th>
              <th>Unit Price</th>
              <th>Units in Stock</th>
              <th>Add to Cart</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button
                    onClick={() => this.props.addToCart(product)}
                    color="primary"
                  >
                    <AiFillPlusCircle className="bg-primary rounded m-1" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
