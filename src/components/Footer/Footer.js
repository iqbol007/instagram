import React from "react";

export default function Footer(props) {
  return (
    <div className="footer-buttons fa-xl size-xl">
      <i className="fa fa-home fa-xl size-xl" />
      <i className="fa fa-search fa-xl size-xl" />
      <i onClick={props.onAddButtonClick} className="fa fa-plus-square fa-xl size-xl" >00</i>
      <i className="fa fa-heart fa-xl size-xl" />
      <i className="fa fa-user fa-xl size-xl"></i>
    </div>
  );
}
