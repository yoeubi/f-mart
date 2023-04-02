import styled from "@emotion/styled";
import Link, { LinkProps } from "next/link";
import { FC, PropsWithChildren } from "react";

const PureNav = styled.nav`
  height: 46px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const Nav: FC<PropsWithChildren> = (props) => {
  return <PureNav {...props} />;
};

const PureNavItem = styled(Link)`
  background: transparent;
  border: none;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.2px;
  font-weight: 500;
  color: rgb(177, 179, 181);
  cursor: pointer;
`;

export const NavItem: FC<PropsWithChildren<LinkProps>> = (props) => {
  return <PureNavItem {...props} />;
};

export default Nav;
