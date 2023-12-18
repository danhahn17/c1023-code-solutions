export function countVowels(str: string): number {
  const filterLowerStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let vowelCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      filterLowerStr.charAt(i) === 'a' ||
      filterLowerStr.charAt(i) === 'e' ||
      filterLowerStr.charAt(i) === 'i' ||
      filterLowerStr.charAt(i) === 'o' ||
      filterLowerStr.charAt(i) === 'u'
    ) {
      vowelCount += 1;
    }
  }
  return vowelCount;
}
