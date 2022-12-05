import classNames from "classnames";
import {Container} from "layout/Container";
import { ReactComponent as LogoIcon } from "assets/icons/logo.svg";

import "./Header.scss";
import { NavLink } from 'react-router-dom'
import {CartButton} from "../CartButton";

interface HeaderProps {
  className?: string
}

export const Header = ({ className = '', ...attrs }: HeaderProps) => {
  const classes = classNames('Header', className);
  const menuListStyle = classNames('MenuList', 'flex pb-3 pt-3')

  const menuLinks = [
    {
      title: 'Home',
      alias: '/'
    },
    {
      title: 'About',
      alias: '/about'
    },{
      title: <CartButton />,
      alias: '/cart'
    }
  ]

  const menuItems = menuLinks.map(({ title, alias }) => (
    <li key={alias}>
      <NavLink to={alias}>
        <div className="ui-button isLink">
          {title}
        </div>
      </NavLink>
    </li>
  ))

  return (
    <header className={classes} {...attrs}>
      <Container>
        <div className='flex justify-between'>
          <div className="Logo">
            <LogoIcon />
            <span>React template </span>
          </div>
          <ul className={menuListStyle}>{menuItems}</ul>
        </div>
      </Container>
    </header>
  );
}
