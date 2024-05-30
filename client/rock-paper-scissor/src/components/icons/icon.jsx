import React from "react";
import Icons from "../../assets/game-sprite.svg";

export const Icon = ({ name, color, size }) => (
  <svg fill={color} width={size} height={size}>
    <use href={`${Icons}#${name}`} />
  </svg>
);

Icon.defaultProps = {
  size: 30,
  color: "black",
};
