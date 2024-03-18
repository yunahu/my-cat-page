import Communications from "./components/Communication/Communications";
import Overview from "./components/Overview/Overview";
import Whiskers from "./components/Whiskers/Whiskers";


const Home = () => {
  return (
		<div>
			<Overview />
			<Communications />
			<Whiskers />
		</div>
  );
};

export default Home;
