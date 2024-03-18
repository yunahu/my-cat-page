import styled from "styled-components";
import copyrightIcon from "../../assets/icons/copyright.svg";

const Container = styled.div`
  background-color: white;
  height: 80px;
  display: flex;
  flex-direction: column;
  padding: 20px 0px 16px 0px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-style: normal;
  line-height: 20px;
  letter-spacing: -0.14px;
	border-top: 1px solid ${props => props.theme.grey};
`;

const Email = styled.div`
  color: black;
`;

const Copyright = styled.div`
  color: black;
	display: flex;
	align-items: center;
`;

const Footer = (props) => {
  return (
    <Container>
      <Email>yhu45@mylangara.ca</Email>
      <Copyright>
				<img src={copyrightIcon}/>
				&nbsp;yunahu &nbsp;ALL RIGHTS RESERVED</Copyright>
    </Container>
  );
};

export default Footer;
