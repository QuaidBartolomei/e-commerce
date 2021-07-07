const errorTypes = [
  {
    type: 'hasUppercase',
    message: 'Passwords must contain at least 1 uppercase letter.',
    validation: /[A-Z]/,
  },
  {
    type: 'hasLowercase',
    message: 'Passwords must contain at least 1 lowercase letter.',
    validation: /[a-z]/,
  },
  {
    type: 'hasNumber',
    message: 'Passwords must contain at least 1 number.',
    validation: /[0-9]/,
  },
  {
    type: 'hasCorrectCharacters',
    message:
      'Passwords may only use the following special characters !@#$%^&*.?',
    validation: /^[a-zA-Z0-9!@#$%^&*.?]*$/,
  },
  {
    type: 'isCorrectLength',
    message: 'Passwords must be between 8 and 60 characters long',
    validation: /^.{8,60}$/,
  },
];

export function passwordValidator(password: string): string {
  return errorTypes
    .filter((x) => !x.validation.test(password))
    .map((x) => x.message)
    .join('\n');
}
