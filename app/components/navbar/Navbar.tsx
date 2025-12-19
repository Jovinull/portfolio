import HeaderBackground from './header/HeaderBackground';
import Logo from './header/Logo';
import MenuLinks from './header/MenuLinks';
import NavbarClient from './NavbarClient';

export default function Navbar() {
  return (
    <div className="relative">
      <HeaderBackground />

      <header className="fixed top-0 left-0 z-50 w-full">
        <nav className="border-theme bg-theme/70 supports-[backdrop-filter]:bg-theme/60 mx-auto flex max-w-[1280px] items-center justify-between border-b px-6 py-5 shadow-sm backdrop-blur-md md:px-8">
          {/* Esquerda */}
          <div className="flex items-center gap-3">
            <Logo />
          </div>

          {/* Centro */}
          <div className="hidden md:flex">
            <MenuLinks variant="desktop" />
          </div>

          {/* Direita + Mobile */}
          <NavbarClient />
        </nav>
      </header>
    </div>
  );
}
