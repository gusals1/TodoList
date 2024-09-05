// import "antd/dist/antd.css";
import { globalStyles } from "@/src/common/styles/globalStyles";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
