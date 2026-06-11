import React from "react";
import { Link, Outlet } from "react-router-dom";
export const Products = () => {
  return (
    <div>
      <h2>PRODUCTS</h2>
      <>
        <Link to="mob">Mobile</Link> |<Link to="lap">Laptop</Link>
      </>
      <Outlet />
    </div>
  );
};
export default Products;
