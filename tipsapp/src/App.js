import React, {Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import MaterialTableDemo from './components/Table/Table';

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
    		<div className="">
    			<Particles 
    			    className='particles'
    				param={particlesParams}
    			/>
    			<MaterialTableDemo />
   			</div>
  		);
	}

}
export default App;
