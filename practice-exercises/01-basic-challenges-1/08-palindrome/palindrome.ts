export function isPalindrome(str: string): boolean {
  const filteredStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const reversedStr = filteredStr.split('').reverse().join('');
  return filteredStr === reversedStr;
}
