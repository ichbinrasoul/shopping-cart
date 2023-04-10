import React, { Component } from "react";
import Product from "./Product";
import Social from "./Social";
import CartProduct from "./CartProduct";

export default class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                    id: 1,
                    title: "dress 1",
                    price: 25,
                    img: "images/album1.jpg",
                },
                {
                    id: 2,
                    title: "dress 2",
                    price: 45,
                    img: "images/album2.jpg",
                },
                {
                    id: 3,
                    title: "dress 3",
                    price: 30,
                    img: "images/album3.jpg",
                },
                {
                    id: 4,
                    title: "dress 4",
                    price: 100,
                    img: "images/album4.jpg",
                },
                {
                    id: 5,
                    title: "dress 5",
                    price: 65,
                    img: "images/album5.jpg",
                },
                {
                    id: 6,
                    title: "dress 6",
                    price: 80,
                    img: "images/album6.jpg",
                },
            ],
            shoppingCart: [],
            socials: [
                {
                    id: 1,
                    href: "https://www.youtube.com",
                    img: "images/youtubelogo.png",
                },
                {
                    id: 2,
                    href: "https://www.spotify.com",
                    img: "images/spotifylogo.png",
                },
                {
                    id: 3,
                    href: "https://www.twitter.com",
                    img: "images/twitterlogo.png",
                },
            ],
        };

        this.addProductToCart = this.addProductToCart.bind(this);
        this.emptyShoppingCart = this.emptyShoppingCart.bind(this);
        this.removeProductFromCart = this.removeProductFromCart.bind(this);
    }

    addProductToCart(productId) {
        console.log(productId);

        let mainProduct = this.state.products.find((product) => {
            return product.id === productId;
        });
        this.setState((prevState) => {
            return {
                shoppingCart: [...prevState.shoppingCart, mainProduct],
            };
        });
    }

    emptyShoppingCart() {
        this.setState({
            shoppingCart: [],
        });
    }

    removeProductFromCart (productId) {
        let newShoppingCart = this.state.shoppingCart.filter(product => {
            return product.id !== productId
        })

        this.setState({
            shoppingCart: newShoppingCart
        })
    }

    render() {
        return (
            <>
                <header class="main-header">
                    <nav class="main-nav nav">
                        <ul>
                            <li>
                                <a href="#">HOME</a>
                            </li>
                            <li>
                                <a href="#">STORE</a>
                            </li>
                            <li>
                                <a href="#">ABOUT</a>
                            </li>
                        </ul>
                    </nav>
                    <h1 class="band-name ">Yola Shop</h1>
                </header>

                <section class="container content-section">
                    <div class="shop-items">
                        {this.state.products.map((product) => (
                            <Product
                                {...product}
                                onAddProduct={this.addProductToCart}
                            />
                        ))}
                    </div>
                </section>

                <section class="container content-section">
                    <h2 class="section-header">CART</h2>
                    <div class="cart-row">
                        <span class="cart-item cart-header cart-column">
                            ITEM
                        </span>
                        <span class="cart-price cart-header cart-column">
                            PRICE
                        </span>
                        <span class="cart-quantity cart-header cart-column">
                            Doing
                        </span>
                    </div>
                    <div class="cart-items">
                        {this.state.shoppingCart.map((product) => (
                            <CartProduct {...product} onRemove={this.removeProductFromCart} />
                        ))}
                    </div>

                    <button
                        onClick={this.emptyShoppingCart}
                        class="btn btn-purchase"
                        type="button"
                    >
                        Empty Cart
                    </button>
                </section>

                <footer class="main-footer">
                    <div class="container main-footer-container">
                        <h3 class="band-name">Contact</h3>
                        <ul class="nav footer-nav">
                            {this.state.socials.map(social => (
                                <Social {...social}/>
                            ))}
                        </ul>
                    </div>
                </footer>
            </>
        );
    }
}
