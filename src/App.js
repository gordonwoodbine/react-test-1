import { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import MyAlert from './MyAlert';
import Trigger from './Trigger';

const alertTypes = {
  info: {
    type: 'info',
    title: 'Information',
    content: 'This is an information message',
  },
  warning: {
    type: 'warning',
    title: 'Warning',
    content: 'This is a warning message',
  },
  error: {
    type: 'error',
    title: 'Error',
    content: 'This is an error message',
  },
};

const App = () => {
  const [activeAlert, setActiveAlert] = useState('info');

  const handleChange = (e) => {
    setActiveAlert(e.target.value);
  };

  return (
    <Stack sx={{ width: '600px', padding: '20px' }} spacing={2}>
      <Typography variant={'h4'}>Alerts</Typography>
      <MyAlert alert={alertTypes[activeAlert]} />
      <Trigger
        activeAlert={activeAlert}
        handleChange={handleChange}
        // send as array so we can map over it
        alertTypes={Object.values(alertTypes)}
      />
    </Stack>
  );
};

export default App;
