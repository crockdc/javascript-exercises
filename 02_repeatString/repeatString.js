const repeatString = function(word, num) {
    var combinedWord = "";
    if (num < 0)
        return "ERROR"
    for (i = 0; i < +num; i++)
        combinedWord += word;
    return combinedWord;
};

// Do not edit below this line
module.exports = repeatString;
