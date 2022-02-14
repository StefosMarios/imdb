import React from 'react';
import { NavbarBrand } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';

export const BrandIcon = props => (
  <div {...props} className="brand-icon">
    <img src="/content/images/imdb.png" alt="Logo" />
  </div>
);

export const Brand = () => (
  <NavbarBrand tag={Link} to="/" className="brand-logo">
    <BrandIcon />
    <span className="brand-title">Imdb</span>
    <span className="navbar-version">{VERSION}</span>
  </NavbarBrand>
);
