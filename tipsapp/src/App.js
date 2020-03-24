import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Table from './components/Table/Table.component';

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

class App extends React.Component {



render() {

  		return (
    		<div className="App">
    			<Particles 
    			    className='particles'
    				param={particlesParams}
    			/>
    			<Table />
   			</div>
  		);
	}

}
export default App;
