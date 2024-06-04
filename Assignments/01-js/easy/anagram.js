/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const cleanstr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const cleanstr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

  const sortedstr1 = cleanstr1.split('').sort().join('');
  const sortedstr2 = cleanstr2.split('').sort().join('');

  return sortedstr1 === sortedstr2;
}

module.exports = isAnagram;
