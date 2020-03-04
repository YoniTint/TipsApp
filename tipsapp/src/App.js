import React, {Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import MaterialTable from 'material-table';

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
		const data = [
			{
				name: 'Yonatan',
				surname: 'Tintpulver'
			},

			];

  		return (
    		<div className="">
    			<Particles 
    			    className='particles'
    				param={particlesParams}
    			/>
    			<div className='table'>
	    			<MaterialTable 
	    			    columns={[
	    			    	{ title: 'Name', field: 'name' },
	    			    	{title: 'Surname', field: 'surname'},		
	    			    ]}
	    			    options={{
	    			    	search: false,
	    			    }}
	    			    data={data}
	            		actions={[  /* !!! need to check if there is onRowChange and if not, write it !!! */ 
	              		  {
	              		  	icon: 'd',
	                		tooltip: 'Delete User',
	                		//onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
	              	      }
	                    ]}
	                />	
                </div>		
   			</div>
  		);
	}

}
export default App;
