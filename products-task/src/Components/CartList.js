import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class CartList extends Component {
  render() {
    return (
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Category Id</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Units in Stock</th>
              <th>Quantity per Unit</th>
              <th>Your Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item) => (
              <tr key={item.product.id}>
                <th scope="row">{item.product.id}</th>
                <td>{item.product.categoryId}</td>
                <td>{item.product.productName}</td>
                <td>{item.product.unitPrice}</td>
                <td>{item.product.unitsInStock}</td>
                <td>{item.product.quantityPerUnit}</td>
                <td>{item.quantity}</td>
                <td>
                  <Button
                    onClick={() => this.props.removeFromCart(item.product)}
                    color="danger"
                  >
                    Remove
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
