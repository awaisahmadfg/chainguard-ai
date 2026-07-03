export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateRequired(value: string, fieldName: string) {
  return value.trim() ? "" : `${fieldName} is required.`;
}

export function validateEmail(email: string) {
  if (!email.trim()) {
    return "Email address is required.";
  }

  return isValidEmail(email) ? "" : "Enter a valid email address.";
}

export function validatePassword(password: string) {
  if (!password) {
    return "Password is required.";
  }

  return password.length >= 8
    ? ""
    : "Password must be at least 8 characters.";
}

export function validatePasswordMatch(password: string, confirmPassword: string) {
  if (!confirmPassword) {
    return "Confirm password is required.";
  }

  return password === confirmPassword ? "" : "Passwords do not match.";
}
