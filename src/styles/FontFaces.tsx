import { Global, css } from "@emotion/react";

const fontFaces = css`
  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/fonts/Montserrat-Regular.woff) format("woff"),
      url(/fonts/Montserrat.woff2) format("woff2");
  }
`;

export const FontFaces = () => {
  return <Global styles={fontFaces} />;
};
