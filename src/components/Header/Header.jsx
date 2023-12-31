import { Container } from "./Header.styled";
import Navigation from 'components/Navigation/Navigation';
import AuthNav from "components/AuthNav/AuthNav";
import Logo from "components/Logo/Logo";

const Header = () => {
  

  return (
    <Container>
      <Logo />

      <>
        <div style={{ display: 'flex', gap: '40px' }}>
          <Navigation />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <AuthNav />
        </div>
      </>
    </Container>
  );
};

export default Header;
