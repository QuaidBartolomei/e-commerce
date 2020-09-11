export const HelperText = {
  lowercase: 'Passwords must contain at least 1 lowercase letter.',
  uppercase: 'Passwords must contain at least 1 uppercase letter.',
  number: 'Passwords must contain at least 1 number.',
  characters:
    'Passwords may only use the following special characters !@#$%^&*.?',
  length: 'Passwords must be between 8 and 60 characters long',
};
export const defaultHelperText = [
  HelperText.lowercase,
  HelperText.uppercase,
  HelperText.number,
  HelperText.characters,
];

export function passwordValidator(
  password: string,
  options: { minLength: number; maxLength: number }
) {
  let errorMessages: string[] = [];
  let validation = {
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasCorrectCharacters: /^[a-zA-Z0-9!@#$%^&*.?]*$/.test(password),
    isCorrectLength:
      password.length >= options.minLength &&
      password.length <= options.maxLength,
  };
  if (!validation.hasLowercase) errorMessages.push(HelperText.lowercase);
  if (!validation.hasUppercase) errorMessages.push(HelperText.uppercase);
  if (!validation.hasNumber) errorMessages.push(HelperText.number);
  if (!validation.isCorrectLength) errorMessages.push(HelperText.length);
  if (!validation.hasCorrectCharacters)
    errorMessages.push(HelperText.characters);
  return {
    ...validation,
    errorMessages,
    error: errorMessages.length > 0,
  };
}
