import React from "react";
import Icons from "../../assets/game-sprite.svg";

export const Icon = ({
  name,
  color = CONSTANTS.color,
  size = CONSTANTS.size,
}) => (
  <svg fill={color} width={size} height={size}>
    <use href={`${Icons}#${name}`} />
  </svg>
);

const CONSTANTS = {
  size: 30,
  color: "black",
};
