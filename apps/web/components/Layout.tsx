import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import Bar, { LogoContainer, Util } from "./Bar";
import Container from "./Container";
import Header from "./Header";
import Icon from "./Icon";
import Logo from "./Logo";
import Nav, { NavItem } from "./Nav";
import Search from "./Search";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
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
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
