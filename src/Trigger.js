import { MenuItem, TextField } from '@mui/material';
import { PropTypes } from 'prop-types';

const Trigger = ({ activeAlert, handleChange, alertTypes }) => {
  return (
    <TextField label='Alert' select value={activeAlert} onChange={handleChange}>
      {alertTypes.map((alert) => (
        <MenuItem key={alert.type} value={alert.type}>
          {alert.title}
        </MenuItem>
      ))}
    </TextField>
  );
};

Trigger.propTypes = {
  activeAlert: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  alertTypes: PropTypes.array.isRequired,
};

export default Trigger;
