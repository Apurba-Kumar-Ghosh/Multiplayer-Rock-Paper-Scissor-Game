export const mixinTextSize = ({ size = "normal" }) => {
  if (typeof size === "number") return `font-size: ${size}px`;
  return `font-size: ${FontSize[size]}`;
};

export const FontSize = {
  small: "14px",
  normal: "16px",
  large: "18px",
  xLarge: "22px",
};

export const createMixinFontWeight = ({ weight = "light" }) => {
  let computedWeight = typeof weight === "number" ? weight : FontWeight[weight];

  return `font-weight: ${computedWeight}`;
};

export const FontWeight = {
  light: "400",
  mediumStrong: "600",
  normal: "500",
  strong: "700",
};
