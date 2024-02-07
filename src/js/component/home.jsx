import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<div class="container jumbotron">
				<Jumbotron />
			</div>
		</div>
		
	);
};

export default Home;
