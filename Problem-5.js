function analyzeText(str) {
    if (typeof str !== "string") {
        return "Invalid";
    } else if (str.length === 0) {
        return "Invalid";
    }

    let noSpaceText = str.split(" ").join("");
    let tokenCount = noSpaceText.length;

    let words = str.split(" ");
    let longestWord = words[0];

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return {
        longwords: longestWord,
        token: tokenCount,
    };
}


let result = analyzeText("I am a little honest person");
let result2 = analyzeText(12345);
console.log(result); // { wordCount: 6, charCount: 29, averageWordLength: 4.83 }
console.log(result2); // "Invalid"