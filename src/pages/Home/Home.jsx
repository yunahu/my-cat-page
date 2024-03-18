import Communications from "./components/Communication/Communications";
import Credits from "./components/Credits/Credits";
import Overview from "./components/Overview/Overview";
import Whiskers from "./components/Whiskers/Whiskers";


const Home = () => {
  return (
		<div>
			<Overview />
			<Communications />
			<Whiskers />
			<Credits />
		</div>
  );
};

export default Home;
