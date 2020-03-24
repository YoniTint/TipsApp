import React from 'react';

import MaterialTable from 'material-table';

const Table = () => {	

	const [state, setState] = React.useState({
		columns: [
		  { title: 'Name', field: 'name' },
		  { title: 'Surname', field: 'surname' },
  		  { 
	          title: 'From',
	          field: 'from',
	          type: 'time',
	      },
	      {
	       	  title: 'Until',
	       	  field: 'until',
	     	  type: 'time',
	      },
		],
		data: [
		  { 
	          name: 'Alumni',
	          surname: 'Hello', 
	          until: new Date(),
	          from: new Date(), 
	      },
	      {
	          name: 'Someone',
	          surname: 'Random',
	          until: new Date(),
	          from: new Date(),	
	      },
		],
	});

	return (
		<MaterialTable
			title='Tips'
			columns={state.columns}
			data={state.data}
			options={{
				showFirstLastPageButtons: false,
			}}
			editable={{
				onRowAdd: newData => 
					new Promise( resolve => {
						setTimeout(() => {
							resolve();
							setState(prevState => {
								const data = [...prevState.data];
								data.push(newData);
								return { ...prevState, data };
							});
						}, 600);
					}),
				onRowUpdate: (newData, oldData) => 
					new Promise( resolve => {
						setTimeout(() => {
							resolve();
							if (oldData) {
								setState(prevState => {
									const data = [...prevState.data];
									data[data.indexOf(oldData)] = newData;
									return { ...prevState, data };
							 });
						    }
						}, 600);
					}),
				onRowDelete: oldData => 
					new Promise( resolve => {
						setTimeout(() => {
							resolve();
							setState(prevState => {
								const data = [...prevState.data];
								data.splice(data.indexOf(oldData), 1);
								return { ...prevState, data };
							});
						}, 600);
					}),	
			}}
		/>
	 );
	}

export default Table;