import { Alert, AlertTitle } from '@mui/material/';
import PropTypes from 'prop-types';

const MyAlert = ({ alert }) => {
  return (
    <Alert severity={alert.type}>
      <AlertTitle>{alert.title}</AlertTitle>
      {alert.content}
    </Alert>
  );
};

MyAlert.propTypes = {
  alert: PropTypes.object.isRequired,
};

export default MyAlert;
