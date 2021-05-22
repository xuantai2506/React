import React from 'react'

export default function Filter(props) {
    const {count,size,sort,filterProducts,sortProducts}= props;
    return (
        <div className="filter">
            <div className="filter-result">{count} Products</div>
            <div className="filter-sort">
                Order {" "}
                <select name="filter-sort" value = {size} onChange={sortProducts}>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className="filter-size">Filter{" "}
                <select name="filter-size"  value={sort} onChange={filterProducts}>
                    <option value="">All</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
    )
}
