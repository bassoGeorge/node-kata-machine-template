import {maybe, add} from './maybe';

describe("maybe", () => {
  it('should return null if any of the arguments are null or undefined', () => {
    expect(maybe(add)(null, 2)).toBe(null);
  })

  it('should show what is up', () => {
    expect(maybe(add)(1, 2)).toBe(3)
  })
})