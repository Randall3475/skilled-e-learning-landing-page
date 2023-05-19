import Logo from './Logo';
import Button from './Button';
export default function Footer() {
  return (
    <>
      <footer className="bg-pr-dark-purple">
        <div className="container mx-auto flex justify-between items-center py-8 desktop:px-4 tablet:px-[39px] px-4">
          <Logo />
          <Button text="Get started" type="style-3" />
        </div>
      </footer>
    </>
  );
}
