import React from "react";

interface IProp {
  name: string;
  img: string;
}

function Logo(props: IProp) {
  return (
    <img
      className="production-logo"
      src={"images/marvel/" + props.img}
      alt={props.name}
    />
  );
}

export default Logo;
