import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/men">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/women">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/children">
              Children
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/accessories">
              Accessories
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            WestWorld
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="#">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="#">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="#">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchOutlinedIcon />
            <PersonOutlineOutlinedIcon />
            <div className="favouriteIcon">
              <FavoriteOutlined />
            </div>
            <div className="carticon">
              <ShoppingCartOutlinedIcon />
              <span className="cartCount">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
