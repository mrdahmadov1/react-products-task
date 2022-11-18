import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";

export default class CartSummary extends Component {
  render() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Your Cart
          </DropdownToggle>
          <DropdownMenu end>
            {this.props.cart.map((item) => (
              <DropdownItem
                className="d-flex justify-content-between align-items-center"
                key={item.product.id}
              >
                {item.product.productName}
                <div>
                  <Badge color="success">{item.quantity}</Badge>
                  <Badge
                    onClick={() => this.props.removeFromCart(item.product)}
                    color="danger"
                  >
                    x
                  </Badge>
                </div>
              </DropdownItem>
            ))}
            <DropdownItem divider />
            <DropdownItem>
              <Link to="cart">Go to Cart</Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
}
