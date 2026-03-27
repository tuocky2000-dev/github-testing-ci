const isPalindrome = require("./palindrome");

describe("Palindrome Checker", () => {
  test("returns true for a simple palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test("returns true for a phrase palindrome", () => {
    expect(isPalindrome("Never odd or even")).toBe(true);
  });

  test("returns false for a non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });
});