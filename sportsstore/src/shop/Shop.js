import React, { Component } from "react";
import { CategoryNavigation } from "./CategoryNavigation";
import { ProductList } from "./ProductList";
import { CartSummary } from "./CartSummary";

export class Shop extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-between bg-dark text-white">
            <div className="navbar-brand p-2">SportDrop</div>
            <CartSummary {...this.props} />
          </div>
        </div>
        <div className="row">
          <div className="col-3 d-flex flex-column align-items-center p-2">
            <CategoryNavigation
              baseUrl="/shop/products"
              categories={this.props.categories}
            />
          </div>
          <div className="col-8 p-2">
            <ProductList
              products={this.props.products}
              addToCart={this.props.addToCart}
            />
          </div>
        </div>
      </div>
    );
  }
}
