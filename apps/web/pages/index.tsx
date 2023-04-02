import Image from "next/image";
import Link from "next/link";
import Categories from "../components/Categories";
import Header, { HeaderUtil } from "../components/Header";
import Icon from "../components/Icon";
import Layout from "../components/Layout";
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
        <Layout>
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
                <Icon />
              </Link>
              <Link href="/cart">
                <Icon />
              </Link>
            </MainUtil>
          </Main>
        </Layout>
      </Header>
      <Layout>
        <Slide />
        <MerchadiseMain>
          <Categories />
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
      </Layout>
    </>
  );
}
