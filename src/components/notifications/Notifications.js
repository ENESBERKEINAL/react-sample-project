import { notification } from "antd";

export const showSuccessNotification = (type) => {
    notification[type]({
      message: 'Customer Added',
      description:
        'Customer Added successfully',
    });
  };

export const showErrorNotification = (type) => {
    notification[type]({
      message: 'Customer Added',
      description:
        'Customer Added successfully',
    });
  };

export const showSuccessDeleteNotification = (type) => {
    notification[type]({
      message: 'Customer Deleted',
      description:
        'Customer Deleted successfully',
    });
  };

export const showSuccessUpdateNotification = (type) => {
    notification[type]({
      message: 'Customer Updated',
      description:
        'Customer Updated successfully',
    });
  };

export const showFailedLoginAttemptNotification = (type) => {
    notification[type]({
      message: 'Login failed',
      description:
        'Password or username not correct. Please Try Again!',
    });
  };