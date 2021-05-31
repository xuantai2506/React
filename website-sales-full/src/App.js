import React, { useState, useEffect } from 'react';
import './App.css';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json';
import store from './store';
import { Provider } from 'react-redux';
function App() {
  const [listProducts, setProducts] = useState({
    products: data.products,
    size: "highest",
    sort: "XL",
  })
  const [cart, setToCart] = useState((localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []))
  // filter product
  const filterProducts = (event) => {
    if (event.target.value === "") {
      setProducts({
        ...listProducts,
        products: data.products,
        sort: event.target.value
      })
    } else {
      setProducts({
        ...listProducts,
        sort: event.target.value,
        // eslint-disable-next-line eqeqeq
        products: data.products.filter(product =>
          product.availableSizes.indexOf(event.target.value) !== -1
        )
      })
    }
  }
  // sort product
  const sortProducts = (event) => {
    const sort = event.target.value;
    setProducts({
      ...listProducts,
      size: sort,
      products: data.products.sort((a, b) =>
        sort === "lowest"
          ? a.price < b.price
            ? 1
            : -1 :
          sort === "highest"
            ? a.price > b.price
              ? 1
              : -1 :
            ""
      ),
    })
  }
  // Add Product 
  const addToCart = (product) => {
    let checkIssetItem = false;
    const listCartItem = cart.slice();
    listCartItem.forEach(item => {
      if (item._id === product._id) {
        item.count++;
        checkIssetItem = true;
      }
    })
    if (!checkIssetItem) {
      listCartItem.push({ ...product, count: 1 })
    }
    setToCart(listCartItem);
    localStorage.setItem("cart", JSON.stringify(listCartItem));
  }
  // remove Product
  const removeFromCart = (product) => {
    // create new array cart contain list cart 
    const listCart = cart.slice();
    const listCartAfterRemove = listCart.filter((x) => x._id !== product._id);
    setToCart(listCartAfterRemove);
    localStorage.setItem("cart", JSON.stringify(listCartAfterRemove));
  }
  // order 
  const order = (checkout) => {
    console.log(checkout);
  }
  return (
    <Provider store={store} >
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={listProducts.products.length}
                size={listProducts.size}
                sort={listProducts.sort}
                filterProducts={filterProducts}
                sortProducts={sortProducts}
              />
              <Products products={listProducts.products} addToCart={addToCart} />
            </div>
            <div className="sidebar">
              <Cart cart={cart} removeFromCart={removeFromCart} order={order} />
            </div>
          </div>
        </main>
        <footer>
          All right is reverved
      </footer>
      </div>
    </Provider>
  );
}

export default App;
