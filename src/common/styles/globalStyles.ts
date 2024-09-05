import { css } from "@emotion/react";

export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: "Noto Sans KR", "sans-serif";
    /* font-size: 14px; */
  }

  img {
    width: 100%;
    display: block;
  }
  ul,
  ol,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #000;
  }
  input[type="search"]::-webkit-search-clear-button {
    -webkit-appearance: none;
  }

  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  input[type="search"]::-webkit-search-input {
    -webkit-appearance: none;
  }

  input[type="search"]::-moz-clear {
    display: none;
  }
`;
