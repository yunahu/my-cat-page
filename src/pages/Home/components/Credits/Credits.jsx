import { SectionContainer, Section, SectionTitle, SectionContentContainer, SectionContent } from "src/components/Layout/Layout";
import styled from "styled-components";
import cat from "src/assets/images/cat.webp";

const Photo = styled.img`
	height: 400px;
	margin-top: 20px;
`;

const PhotoContainer = styled.div`
	margin-right: 100px;
`;

const Credits = () => {
  return (
		<SectionContainer id="credits">
			<Section>
				<SectionTitle>
					Extra credit
				</SectionTitle>
					<SectionContentContainer>
						<PhotoContainer>
							<Photo src={cat} alt="a cat icon" />
						</PhotoContainer>
						<SectionContent>
							The favicon used in this website
							<p>
								By <a target="_blank" href="https://www.freepik.com/">Freepik</a> on <a target="_blank" href="https://www.flaticon.com/free-icon/cat_1864514?term=cat&page=1&position=2&origin=tag&related_id=1864514">Flaticon</a>.
							</p>
						</SectionContent>
					</SectionContentContainer>
			</Section>
		</SectionContainer>
  );
};

export default Credits;
