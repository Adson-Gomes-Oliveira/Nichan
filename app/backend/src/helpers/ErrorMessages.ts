enum ErrorMessages {
  INVALID_ID_ERROR = 'Id must have 24 valid hexadecimal characters',
  PAYLOAD_INCORRECT = 'Data received is not the expected shape',
  OBJECT_NOT_EXIST = 'Requested ID not exist on database',
  UNAUTHORIZED = 'Token is wrong or missing',
  NO_USER = 'User not found!',
  WRONG_PASSWORD = 'Password is incorrect',
  EMAIL_ALREADY_EXIST = 'Email already registered',
}

export default ErrorMessages;
