export function passwordValidator(
  password: string,
  options: { minLength: number; maxLength: number }
) {
  return {
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasCorrectCharacters: /^[a-zA-Z0-9!@#$%^&*.?]*$/.test(password),
    isCorrectLength:
      password.length >= options.minLength &&
      password.length <= options.maxLength,
  };
}
