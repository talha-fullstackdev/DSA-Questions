function countVowelsAndConsonants(str) {
    let vowels = "aeiouAEIOU";
    let vowelCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') { // Check if it's a letter
            if (vowels.includes(char)) {
                vowelCount++; // If vowel, increase vowel count
            } else {
                consonantCount++; // Otherwise, increase consonant count
            }
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}

// Example usage
let inputString = "Hello World!";
console.log(countVowelsAndConsonants(inputString));
