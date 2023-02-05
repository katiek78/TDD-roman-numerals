export const romanToDecimal = (roman => {
    const romanToDecimalEquivalents = [
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]


    if (!roman) return null;
    let decimal = 0, lastEquivalent = 0, lastEquivalentIndex = 0, thisEquivalent = 0;

    for (let i = 0; i < roman.length; i++) {
        //find the index of this character and return null if it is not found
        const thisEquivalentIndex = romanToDecimalEquivalents.map(el => el[0]).indexOf(roman[i]);
        if (thisEquivalentIndex === -1) return null;

        //get the decimal equivalent
        thisEquivalent = romanToDecimalEquivalents[thisEquivalentIndex][1];

        //check if this decimal equivalent is higher than the previous one for cases like 'IV'
        if (i > 0 && thisEquivalent > lastEquivalent) {
            //check if this is a valid Roman numeral
            //if we have X, C or M, we cannot have a gap of more than 2 between the current and last equivalents, otherwise we cannot have a gap of more than 1
            if ([2, 4, 6].indexOf(thisEquivalentIndex) > -1) {
                if (thisEquivalentIndex - lastEquivalentIndex > 2) return null;
            } else if (thisEquivalentIndex - lastEquivalentIndex > 1) return null;
            decimal -= 2 * lastEquivalent;
        }

        decimal += thisEquivalent;

        lastEquivalent = thisEquivalent;
        lastEquivalentIndex = thisEquivalentIndex;
    }
    return decimal;
});