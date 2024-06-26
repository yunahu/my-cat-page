import { SectionContainer, Section, SectionTitle, SectionContentContainer, SectionContent } from "src/components/Layout/Layout";
import styled from "styled-components";
import blue from "src/assets/images/blue.webp";

const Photo = styled.img`
	height: 400px;
	width: 400px;
`;

const PhotoContainer = styled.div`
	margin-right: 100px;
`;

const Overview = () => {
  return (
		<SectionContainer id="overview">
			<Section>
				<SectionTitle>
					Overview
				</SectionTitle>
					<SectionContentContainer>
						<PhotoContainer>
							<Photo src={blue} alt="an orange cat with green eyes" />
							Photo by Cedric VT on <a target="_blank" href="https://unsplash.com/photos/silver-tabby-cat-IuJc2qh2TcA">Unsplash</a>
						</PhotoContainer>
						<SectionContent>
						The cat (Felis catus), commonly referred to as the domestic cat or house cat, is the only domesticated species in the family Felidae. Recent advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC. It is commonly kept as a house pet and farm cat, but also ranges freely as a feral cat avoiding human contact. It is valued by humans for companionship and its ability to kill vermin. Because of its retractable claws, it is adapted to killing small prey like mice and rats. It has a strong, flexible body, quick reflexes, sharp teeth, and its night vision and sense of smell are well developed. It is a social species, but a solitary hunter and a crepuscular predator. Cat communication includes vocalizations like meowing, purring, trilling, hissing, growling, and grunting as well as cat body language. It can hear sounds too faint or too high in frequency for human ears, such as those made by small mammals. It also secretes and perceives pheromones.

						Female domestic cats can have kittens from spring to late autumn in temperate zones and throughout the year in equatorial regions, with litter sizes often ranging from two to five kittens. Domestic cats are bred and shown at events as registered pedigreed cats, a hobby known as cat fancy. Animal population control of cats may be achieved by spaying and neutering, but their proliferation and the abandonment of pets has resulted in large numbers of feral cats worldwide, contributing to the extinction of bird, mammal and reptile species.

						As of 2017, the domestic cat was the second most popular pet in the United States, with 95.6 million cats owned and around 42 million households owning at least one cat. In the United Kingdom, 26% of adults have a cat, with an estimated population of 10.9 million pet cats as of 2020. As of 2021, there were an estimated 220 million owned and 480 million stray cats in the world.
						<p>
							Source: <a target="_blank" href="https://en.wikipedia.org/wiki/Cat">Wikipedia - Cat</a>
						</p>
						</SectionContent>
					</SectionContentContainer>
			</Section>
		</SectionContainer>
  );
};

export default Overview;
