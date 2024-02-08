import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import Cards from "./Cards";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<div className="container">
				<div className="jumbotron">
					<Jumbotron />
				</div>
				<Cards />
			</div>
			<Footer />
		</div>
		
	);
};

export default Home;
