import React from 'react';
import MaterialTable from 'material-table';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker} from '@material-ui/pickers';



export default function MaterialTableDemo(props) {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { 
        title: 'From',
        field: 'from',
        type: 'time',
        editComponent: ({value, onChange}) => ( 
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
            minutesStep={15}
            format='HH:MM'
            ampm={false}
            margin="normal"
            id="time-picker"
            value={value}
            onChange={onChange}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
          />
        </MuiPickersUtilsProvider>
        ), 
      },
      { 
        title: 'Until',
        field:'until',
        type: 'time',
        editComponent: ({value, onChange}) => ( 
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
            minutesStep={15}
            format='HH:MM'
            ampm={false}
            margin="normal"
            id="time-picker"
            value={value}
            onChange={onChange}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
          />
        </MuiPickersUtilsProvider>
        ),
      }, 
      { title: '%', field: 'percentage', type: 'numeric'},
    ],
    data: [
      { 
        name: 'Yonatan',
        surname: 'Tintpulver', 
        until: new Date(),
        from: new Date(),
        percentage: 100, 
      },
      {
        name: 'Lea',
        surname: 'Burstein',
        until: new Date(),
        from: new Date(),
        percentage: 100,
      },
    ],
  });
  return (
    <MaterialTable
      title={'Tips'}
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
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
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  console.log(oldData);
                  console.log(newData);
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
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
