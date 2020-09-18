// Semantic Versioning

// In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.

//     The first number is the major version.
//     The second number is the minor version.
//     The third number is the patch (bug fixes).

// Write three separate functions, one to retrieve each element in the semantic versioning specification.
// Examples

// // 6.1.9
// retrieveMajor("6.1.9") ➞ "6"

// retrieveMinor("6.1.9") ➞ "1"

// retrievePatch("6.1.9") ➞ "9"

// // 2.1.0
// retrieveMajor("2.1.0") ➞ "2"

// retrieveMinor("2.1.0") ➞ "1"

// retrievePatch("2.1.0") ➞ "0"


function retrieveMajor(semver) {
  const major = semver.split('.');
  return major[0];
}

function retrieveMinor(semver) {
	const minor = semver.split('.');
  return minor[1];
}

function retrievePatch(semver) {
	const patch = semver.split('.');
  return patch[2];
}

// // 6.1.9
console.log(retrieveMajor("6.1.9"))

console.log(retrieveMinor("6.1.9"))

console.log(retrievePatch("6.1.9"))

// 2.1.0
console.log(retrieveMajor("2.1.0"))

console.log(retrieveMinor("2.1.0"))

console.log(retrievePatch("2.1.0"))