import { SectionContainer, Section, SectionTitle, SectionContentContainer, SectionContent } from "src/components/Layout/Layout";
import styled from "styled-components";
import box from "src/assets/images/box.jpg";

const Photo = styled.img`
	height: 400px;
`;

const PhotoContainer = styled.div`
	margin-right: 100px;
`;

const Whiskers = () => {
  return (
		<SectionContainer id="whiskers">
			<Section>
				<SectionTitle>
					Whiskers
				</SectionTitle>
					<SectionContentContainer>
						<PhotoContainer>
							<Photo src={box} alt="An orange cat in a box" />
								Photo by Timo Volz on <a target="_blank" href="https://unsplash.com/photos/orange-tabby-cat-in-brown-cardboard-box-mrTydVjg04o">Unsplash</a>
						</PhotoContainer>
						<SectionContent>
						To aid with navigation and sensation, cats have dozens of movable whiskers (vibrissae) over their body, especially their faces. These provide information on the width of gaps and on the location of objects in the dark, both by touching objects directly and by sensing air currents; they also trigger protective blink reflexes to protect the eyes from damage.
							<p>
								Source: 
								<a target="_blank" href="https://en.wikipedia.org/wiki/Cat#Whiskers">Wikipedia - Cat Whiskers</a>
						</p>
						</SectionContent>
					</SectionContentContainer>
			</Section>
		</SectionContainer>
  );
};

export default Whiskers;
