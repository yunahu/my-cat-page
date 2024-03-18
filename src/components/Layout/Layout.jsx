import styled from "styled-components";

export const SectionContainer = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 60px;
`;

export const Section = styled.div`
	width: ${props => props.theme.contentWidth};
	padding: 40px 0px;
`;

export const SectionTitle = styled.div`
	font-size: 25px;
	margin-bottom: 15px;
`;

export const SectionContentContainer = styled.div`
	display: flex;
`;

export const SectionContent = styled.div`
	font-size: 18px;
`;