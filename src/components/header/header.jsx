import Logo from '../logo/logo';
import Menu from '../menu/menu';

function Header() {
  return (
    <header class="header">
      <div class="header__inner">
        <Logo />
        <Menu />
      </div>
    </header>
  );
}

export default Header;