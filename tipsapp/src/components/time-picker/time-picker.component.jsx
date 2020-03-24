import React from 'react';

import { format } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const TimePicker = ({ label, value, onChange }) => {
	/* const [selectedDate, setSelectedDate] = React.useState(new Date());

	const handleDateChange = date => {
		setSelectedDate(date);
	};
*/
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardTimePicker  
				label={label}
				value={value}
				onChange={onChange}
				format='p'
			/>	
		</MuiPickersUtilsProvider>		
	);
}

export default TimePicker;