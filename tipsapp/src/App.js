import React, {Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';

const particlesParams = {
	    particles: {
	        number: {
	            value: 50,
	        },
	        size: {
	            value: 3,
	        },
	    },
	    interactivity: {
	        events: {
	            onhover: {
	                enable: true,
	                mode: "repulse",
	            },
	        },
	    },
	  }

class App extends Component {
    

	render() {
  		return (
    		<div className="App">
    			<Particles 
    				param={particlesParams}
    				style={
    					{
    						width: '100%',	
    					}
    				}
    			/>		
   			</div>
  		);
	}

}
export default App;
