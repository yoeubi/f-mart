import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { Main } from "next/document";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import Container from "../components/Container";
import Header from "../components/Header";
import Icon from "../components/Icon";
import Logo from "../components/Logo";
import Bar, { LogoContainer, Util } from "../components/Bar";
import Nav, { NavItem } from "../components/Nav";
import Search from "../components/Search";
import { GlobalStyle } from "../style";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

const queryClient = new QueryClient();

export type NextPageWithLayout<P = {}, IP = {}> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Global styles={GlobalStyle} />
        {getLayout(<Component {...pageProps} />)}
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default MyApp;
