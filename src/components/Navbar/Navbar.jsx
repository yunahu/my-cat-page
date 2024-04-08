import styled from "styled-components";
import logo from "src/assets/images/logo.webp";

const Container = styled.div`
	position: fixed;
	height: ${props => props.theme.navHeight};
	width: 100%;
	border-bottom: 1px solid ${props => props.theme.grey};
	display: flex;
	justify-content: center;
	background-color: white;
`;

const Content = styled.div`
	width: ${props => props.theme.contentWidth};
	display: flex;
	justify-content: space-between;
`;

const LogoContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
`;

const Logo = styled.img`
	width: 180px;
	height: 43px;

	&:hover {
    cursor: pointer;
  }
`;

const Menu = styled.div`
	display: flex;
`;

const MenuItemContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	padding: 0px 20px;
	height: 100%;
	color: ${props => props.theme.black};
	text-decoration: none;

	&:hover {
    cursor: pointer;
  }
`;

const MenuItem = (props) => {
  const jump = () => {
    const element = document.getElementById(props.target);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return <MenuItemContent onClick={jump}>{props.children}</MenuItemContent>;
};

const Navbar = () => {
  return (
		<Container>
			<Content>
			<MenuItem target="overview">
				<LogoContainer>
					<Logo src={logo} alt="my cat page logo" />
				</LogoContainer>
			</MenuItem>
			<Menu>
				<MenuItem target="overview">Overview</MenuItem>
				<MenuItem target="communications">Communications</MenuItem>
				<MenuItem target="whiskers">Whiskers</MenuItem>
				<MenuItem target="credits">Credits</MenuItem>
			</Menu>
		</Content>
	</Container>	
	);
};

export default Navbar;
