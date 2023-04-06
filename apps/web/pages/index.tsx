import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Icon from "../components/Icon";
import Logo from "../components/Logo";
import Main, { MainLogo, MainUtil } from "../components/Main";
import MerchadiseMain from "../components/MerchadiseMain";
import MerchandiseItem from "../components/MerchandiseItem";
import MerchandiseList from "../components/MerchandiseList";
import Nav, { NavItem } from "../components/Nav";
import Search from "../components/Search";
import Slide from "../components/Slide";

export default function Web() {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <NavItem href="/signin">로그인/회원가입</NavItem>
          </Nav>
          <Main>
            <MainLogo>
              <Link href="/">
                <Logo />
              </Link>
            </MainLogo>
            <Search />
            <MainUtil>
              <Link href="/profile">
                <Icon src="/assets/user.svg" name="나의 상회" />
              </Link>
              <Link href="/cart">
                <Icon src="/assets/cart.svg" name="장바구니" />
              </Link>
            </MainUtil>
          </Main>
        </Container>
      </Header>
      <Container>
        <Slide />
        <MerchadiseMain>
          <Categories categories={[]} />
          <MerchandiseList>
            <MerchandiseItem />
            <MerchandiseItem />
            <MerchandiseItem />
            <MerchandiseItem />
            <MerchandiseItem />
            <MerchandiseItem />
          </MerchandiseList>
          <MerchandiseList>
            <MerchandiseItem />
            <MerchandiseItem />
            <MerchandiseItem />
            <MerchandiseItem />
            <MerchandiseItem />
            <MerchandiseItem />
          </MerchandiseList>
          <MerchandiseList>
            <MerchandiseItem />
            <MerchandiseItem />
            <MerchandiseItem />
            <MerchandiseItem />
            <MerchandiseItem />
            <MerchandiseItem />
          </MerchandiseList>
          <MerchandiseList>
            <MerchandiseItem />
            <MerchandiseItem />
            <MerchandiseItem />
            <MerchandiseItem />
            <MerchandiseItem />
            <MerchandiseItem />
          </MerchandiseList>
        </MerchadiseMain>
      </Container>
    </>
  );
}
