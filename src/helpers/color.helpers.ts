const hexPrefix = "#";
const cssVarPrefix = "--";
const cssVarContrastTextPostfix = "-contrast-text-color";
const hexBlack = "#000000";
const hexWhite = "#ffffff";

export const parseColor = (color: string) => {
  if (!color) return undefined;
  if (color.startsWith(hexPrefix)) return color;
  if (color.startsWith(cssVarPrefix)) return `var(${color})`;
};

export const getContrastYIQ = (hex: string) => {
  if (!hex || !hex.startsWith(hexPrefix)) return hexBlack;

  // Remove the '#' if it's there
  hex = hex.replace(/^#/, "");

  // Parse the r, g, b values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 2), 16);
  const b = parseInt(hex.substring(4, 2), 16);

  // Calculate the brightness using the YIQ formula
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black for bright colors, white for dark colors
  return yiq >= 128 ? hexBlack : hexWhite;
};

export const getContrastTextColor = (bgColor: string) => {
  if (!bgColor) return undefined;
  if (bgColor.startsWith(hexPrefix)) return getContrastYIQ(bgColor);
  if (bgColor.startsWith(cssVarPrefix))
    return `var(${bgColor}${cssVarContrastTextPostfix}, ${hexBlack})`;
};
