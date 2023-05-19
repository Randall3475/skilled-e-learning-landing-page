import Logo from './Logo';
import Button from './Button';
export default function Header() {
  return (
    <>
      <header className="z-50 relative">
        <div className="container mx-auto flex justify-between items-center pt-6 desktop:px-4 tablet:px-[39px] px-4 pt-4">
          <Logo inverted />
          <Button text="Get started" />
        </div>
      </header>
    </>
  );
}
