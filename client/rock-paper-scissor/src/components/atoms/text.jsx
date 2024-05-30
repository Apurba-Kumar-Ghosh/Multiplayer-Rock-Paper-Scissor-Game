import styled from "styled-components";
import {
  createMixinFontWeight,
  mixinTextSize,
} from "../../utils/style-helpers/mixins";

export const Text = styled.span`
  &&& {
    ${mixinTextSize};
    ${createMixinFontWeight};
    color: ${({ type = "default", color }) =>
      color !== undefined ? color : "black"};
    display: ${({ inline = true }) =>
      inline === true ? "inline-block" : "block"};
    ${({ underline = false }) =>
      underline ? "text-decoration: underline;" : ""};
    ${({ deleted = false }) =>
      deleted ? "text-decoration: line-through;" : ""};
    ${({ ellipsis = false }) =>
      ellipsis
        ? "  white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
        : ""};
    ${({ preWrap = false }) => (preWrap ? "  white-space: pre-wrap;" : "")};
    ${({ clickable = false }) => (clickable ? " cursor: pointer;" : "")};
    ${({ textAlign }) =>
      textAlign !== undefined ? `text-align: ${textAlign};` : ""};
    ${({ lineHeight }) =>
      lineHeight !== undefined ? `line-height: ${lineHeight};` : ""};
    ${({ margin }) => (margin !== undefined ? `margin: ${margin};` : "")};
    ${({ disabled }) => (disabled ? "cursor: not-allowed" : "")};
  }
`;
