import {NotificationManager} from 'react-notifications';


// 
const Flash = (type,message,title,dismiss) => {
      switch (type) {
        case 'info':
          NotificationManager.info(message,title,dismiss);
          break;
        case 'success':
          NotificationManager.success(message,title,dismiss);
          break;
        case 'warning':
          NotificationManager.warning(message,title,dismiss);
          break;
        case 'error':
          NotificationManager.error(message,title,dismiss);
          break;
          default:
            break
      }
  };

  export default Flash;