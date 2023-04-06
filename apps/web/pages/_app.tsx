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

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Global styles={GlobalStyle} />
        <Header>
          <Container>
            <Nav>
              <NavItem href="/signin">로그인/회원가입</NavItem>
            </Nav>
            <Bar>
              <LogoContainer>
                <Link href="/">
                  <Logo />
                </Link>
              </LogoContainer>
              <Search />
              <Util>
                <Link href="/profile">
                  <Icon src="/assets/user.svg" name="나의 상회" />
                </Link>
                <Link href="/cart">
                  <Icon src="/assets/cart.svg" name="장바구니" />
                </Link>
              </Util>
            </Bar>
          </Container>
        </Header>
        <Container>
          <Component {...pageProps} />
        </Container>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default MyApp;
