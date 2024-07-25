import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const showEndMeditationDialog = (onConfirm) => {
  confirmAlert({
    title: 'End Meditation',
    message: 'Are you sure you want to end your meditation?',
    buttons: [
      {
        label: 'Yes',
        onClick: () => onConfirm(),
      },
      {
        label: 'No',
      },
    ],
  });
};

export default showEndMeditationDialog;