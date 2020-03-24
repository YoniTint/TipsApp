import React from 'react';

import MaterialTable from 'material-table';

import TimePicker from '../time-picker/time-picker.component';

import { format, parse } from 'date-fns';

const Table = () => {	

	const [state, setState] = React.useState({
		columns: [
		  { title: 'Name', field: 'name' },
		  { title: 'Surname', field: 'surname' },
  		  { 
	          title: 'From',
	          field: 'from',
	          editComponent: ({ value, onChange }) => <TimePicker label='From' value={value} onChange={onChange} />,
	          render: ({ from }) => `${from.getHours()}:${from.getMinutes()}`
	      },
	      {
	       	  title: 'Until',
	       	  field: 'until',
	       	  editComponent: ({ value, onChange }) => <TimePicker label='Until' value={value} onChange={onChange} />,
	       	  render: ({ until }) => `${until.getHours()}:${until.getMinutes()}`
	      },
		],
		data: [
		  { 
	          name: 'Yonatan',
	          surname: 'Tintpulver', 
	          from: new Date(),
	          until: new Date()
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