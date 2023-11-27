import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png'

export default function Header() {
  return (
    <div className="header">
      <img
        src={logo}
        height="100"
        width="250"
        alt="BK services logo"
      />
      
    </div>
  );
}
