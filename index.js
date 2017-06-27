function printString(s) {
  console.log(s[0])
  if (s.length > 1) {
    let s_s = s.substring(1, s.length)
    printString(s_s)
  } else {
    return true
  }
}

function reverseString(s) {
  if (s.length > 1) {
    return reverseString(s.substring(1)) + s[0]
  } else {
    return s
  }
}

function isPalindrome(s) {
  if (s.length <= 1)
    { return true }
  else if (s[s.length-1] === s[0])
    { return isPalindrome(s.substring(1, s.length-1)) }
  else
    { return false }
}

function addUpTo(a, i) {
  return i ? a[i] + addUpTo(a, --i) : a[i]
}

function maxOf(a) {
    if (a.length > 1) {
      // (a[0] < a[a.length-1] ? a.shift() : a.pop() )
      // return maxOf(a)
      return maxOf( a[0] < a[a.length-1] ? a.slice(1) : a.slice(0, a.length-1) )
    }
   else
    { return a[0] }
}

function includesNumber(a, n) {
  if (a.length > 0) {
    return (a[0] == n ? true : includesNumber( a.slice(1), n ))
    }
  else
    { return false }
}
