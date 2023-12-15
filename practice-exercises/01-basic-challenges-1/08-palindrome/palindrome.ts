export function isPalindrome(str: string): boolean {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i]) {
      return false;
    }
  }
}
