import { checkEmail } from "./check";

describe('checkEmail', () => {
  it('should check that the given string is an email type', () => {
    expect(checkEmail('anish@gmail.com')).toBe(true);
    expect(checkEmail('blsdm')).toBe(false);
  })

  it('should have another test', () => {
    expect(checkEmail('test@gmail.com')).toBe(true);
  })
});