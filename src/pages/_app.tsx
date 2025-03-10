import "@/styles/globals.css";
import Layout from "@/widgets/Layout/Layout";
import { NextPage } from "next";
import type { AppProps } from "next/app";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPageWithLayout }) {
  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page);

  return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>;
}
