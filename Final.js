// Problem-01: New Price for Eid Sale //
function newPrice(currentPrice, discount) {
    if (typeof currentPrice !== "number" || typeof discount !== "number") {
        return "Invalid"
    } else if (discount < 0 || discount > 100) {
        return "Invalid"
    }

    let discountedPrice = (currentPrice * discount) / 100;
    let newPrice = currentPrice - discountedPrice;
    return newPrice.toFixed(3);
}

// Problem-02: OTP Validation for Zapshift //
function validOtp(otp) {
    if (typeof otp !== 'string') {
        return "Invalid";
    } else if (otp.length !== 8) {
        return false;
    } else if (!otp.startsWith("ph-")) {
        return false;
    } else {
        return true;
    }
}

// Problem-03: BCS Final Score Calculator //
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

// Problem-04: Upcoming Gono Vote //
function gonoVote(array) {
    if (!Array.isArray(array)) {
        return "Invalid";
    }

    let haCount = 0;
    let naCount = 0;

    for (let vote of array) {
        if (vote === "ha") {
            haCount++;
        } else if (vote === "na") {
            naCount++;
        }
    }

    if (haCount > naCount) {
        return true;
    } else if (haCount === naCount) {
        return "equal";
    } else {
        return false;
    }       
}

// Problem-05: Text Analyzer for an AI Company //
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