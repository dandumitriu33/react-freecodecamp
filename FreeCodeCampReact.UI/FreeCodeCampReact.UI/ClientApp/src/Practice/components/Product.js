import React from "react";

function Product(props) {
    return (
        <div>
            <p>Name: {props.product.name}</p>
            <p>Price: {props.product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})} </p>
            <p>Description: {props.product.description} </p>
        </div>
        );
}

export default Product;