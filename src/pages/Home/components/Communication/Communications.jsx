import { SectionContainer, Section, SectionTitle, SectionContentContainer, SectionContent } from "src/components/Layout/Layout";
import styled from "styled-components";
import meow from "src/assets/images/meow.jpg";

const Photo = styled.img`
	height: 400px;
`;

const PhotoContainer = styled.div`
	margin-left: 100px;
`;

const Communications = () => {
  return (
		<SectionContainer id="communications">
			<Section>
				<SectionTitle>
					Communications
				</SectionTitle>
					<SectionContentContainer>
						<SectionContent>
						Domestic cats use many vocalizations for communication, including purring, trilling, hissing, growling/snarling, grunting, and several different forms of meowing.[103] Their body language, including position of ears and tail, relaxation of the whole body, and kneading of the paws, are all indicators of mood. The tail and ears are particularly important social signal mechanisms in cats. A raised tail indicates a friendly greeting, and flattened ears indicate hostility. Tail-raising also indicates the cat's position in the group's social hierarchy, with dominant individuals raising their tails less often than subordinate ones. Feral cats are generally silent.Nose-to-nose touching is also a common greeting and may be followed by social grooming, which is solicited by one of the cats raising and tilting its head.

Purring may have developed as an evolutionary advantage as a signaling mechanism of reassurance between mother cats and nursing kittens, who are thought to use it as a care-soliciting signal. Post-nursing cats also often purr as a sign of contentment: when being petted, becoming relaxed, or eating. Even though purring is popularly interpreted as indicative of pleasure, it has been recorded in a wide variety of circumstances, most of which involve physical contact between the cat and another, presumably trusted individual. Some cats have been observed to purr continuously when chronically ill or in apparent pain.

The exact mechanism by which cats purr has long been elusive, but it has been proposed that purring is generated via a series of sudden build-ups and releases of pressure as the glottis is opened and closed, which causes the vocal folds to separate forcefully. The laryngeal muscles in control of the glottis are thought to be driven by a neural oscillator which generates a cycle of contraction and release every 30-40 milliseconds (giving a frequency of 33 to 25 Hz).

Domestic cats observed in a rescue facility have total of 276 distinct facial expressions based on 26 different facial movements; each facial expression corresponds to different social functions that are likely influenced by domestication.
							<p>
							Source: <a target="_blank" href="https://en.wikipedia.org/wiki/Cat#Communication">Wikipedia - Cat Communications</a>
							</p>
						</SectionContent>
						<PhotoContainer>
							<Photo src={meow} alt="a meowing cat" />
								Photo by Jae Park on  <a target="_blank" href="https://unsplash.com/photos/brown-tabby-cat-7GX5aICb5i4">Unsplash</a>
						</PhotoContainer>
					</SectionContentContainer>
			</Section>
		</SectionContainer>
  );
};

export default Communications;
