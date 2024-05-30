import styled from "styled-components";
import {
  createMixinFontWeight,
  mixinTextSize,
} from "../../utils/style-helpers/mixins";

export const Text = styled.span`
  &&& {
    ${mixinTextSize};
    ${createMixinFontWeight};
    color: ${({ color }) => (color !== undefined ? color : "black")};
    display: ${({ inline = "true" }) =>
      inline === "true" ? "inline-block" : "block"};
    ${({ ellipsis = "false" }) =>
      ellipsis === "true"
        ? "  white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
        : ""};
    ${({ textalign }) =>
      textalign !== undefined ? `text-align: ${textalign};` : ""};
    ${({ lineheight }) =>
      lineheight !== undefined ? `line-height: ${lineheight};` : ""};
    ${({ margin }) => (margin !== undefined ? `margin: ${margin};` : "")};
    ${({ disabled }) => (disabled ? "cursor: not-allowed" : "")};
  }
`;
