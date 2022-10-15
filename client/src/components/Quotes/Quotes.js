import { requirePropFactory } from "@mui/material";
import React from "react";
import "./Quotes.css";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const host = require("../../img/host.jpg");

export default function Quotes() {
  return (
    <div className="quotes-wrapper">
      <div className="quotes">
        <img src={host}></img>
        <div className="quote-info">
        <p className="quote-text"> <FormatQuoteIcon style={{color: "#ffb606", marginRight: "15px"}} transform = "scale(3)"/>     Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse curcus mal suada faci lisis. Lorem ipsum dolor sit ametion consectetur elit. Vesti bulum nec odio ipsum. Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios. Suspe ndisse curcus suada faci lisis.</p>
        <p className="quoted-by">- Sanel Pajić</p>
        <p className="quoted-by-title">Host of Pansion Villa Anja</p>
        </div>
      </div>
    </div>
  );
}
