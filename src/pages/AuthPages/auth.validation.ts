export const emailValidation = {
  required: 'Email is required',
  pattern: {
    value: /^\S+@\S+$/i,
    message: 'Invalid email address',
  },
};

export const passwordValidation = {
  required: 'Password is required',
  minLength: {
    value: 6,
    message: 'Minimum 6 characters',
  },
};

export const usernameValidation = {
  required: 'Username is required',
  minLength: {
    value: 3,
    message: 'Minimum 3 characters',
  },
};
