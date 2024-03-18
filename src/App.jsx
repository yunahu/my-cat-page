import styled, { createGlobalStyle } from "styled-components";
import React from 'react';
import Navbar from 'src/components/Navbar/Navbar';
import Footer from 'src/components/Footer/Footer';
import Home from "./pages/Home/Home";

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}
	
	body {
		margin: 0px;
		min-width: 1440px;
	}	
`;

const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

const App = () => { 
  return (
		<Container>
			<GlobalStyle />
			<Navbar />
			<Home />
			<Footer />
		</Container>
	);
};

export default App;
