function finalScore(omr) {
    let right = omr.right;
    let wrong = omr.wrong;
    let skip = omr.skip;

    if (right + wrong + skip !== 100) {
        return "Invalid";
    }

    let score = (right * 1) - (wrong * 0.5);

    let finalresult = Math.round(score);
    
    return finalresult;
}

let score = finalScore({"right":67,"wrong":23,"skip":10});
let score2 = finalScore({"right":80,"wrong":25,"skip":0});
console.log(score); // 67
console.log(score2); // 80