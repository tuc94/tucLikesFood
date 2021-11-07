import * as React from 'react';
import "./AppSlider.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function AppSlider() {
  const [value, setValue] = React.useState<string>("5");
  const [show, setShow] = React.useState<boolean>(true);
  const marks = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 5,
      label: '5',
    },
    {
      value: 6,
      label: '6',
    },
    {
      value: 7,
      label: '7',
    },
    {
      value: 8,
      label: '8',
    },
    {
      value: 9,
      label: '9',
    },
    {
      value: 10,
      label: '10',
    }
  ];
  

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setValue( e.currentTarget.value);
  };

  const changeShow = () => {
    setShow(false);
  };

  return (
    <div>
      {show ? (
        <div>
        <input type="text" value={value} onChange={onChange} />
        <p>{value}</p>
        <Button variant="contained" onClick={() => changeShow()}>Submit</Button>
        </div>
      ): <div> </div>}
    </div>
  );
}

export default AppSlider;
