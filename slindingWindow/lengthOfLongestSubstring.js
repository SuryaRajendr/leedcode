function lengthOfLongestSubstring(s) {
  let seen = new Set();
  let longest = 0;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    while (seen.has(s[r])) {
      seen.delete(s[l]);
      l++;
    }
    seen.add(s[r]);
    console.log("seen",seen,"==================",r)
    longest = Math.max(longest, r - l + 1);
    console.log("longest",longest,"==================","r",r,"l",l)
  }
  return longest;
};

console.log("lengthOfLongestSubstring result",lengthOfLongestSubstring("abcabcbb"))