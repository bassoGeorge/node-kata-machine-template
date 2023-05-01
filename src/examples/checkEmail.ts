/* function to check if the given string is a valid email address */
export function checkEmail(email: string): boolean {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}