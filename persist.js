var charSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'K', 'L', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];

function generateCharacter() {
	return charSet[Math.floor(Math.random() * (charSet.length - 1))];
}

function generateHash() {
	return generateCharacter() + generateCharacter() + generateCharacter() + generateCharacter() + generateCharacter();
}


module.exports = {
	getHash: generateHash
};