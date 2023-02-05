export const romanToDecimal = (roman => {
    if (!roman) return null;

    const romanToDecimalEquivalents = [
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]

    const romanNumerals = romanToDecimalEquivalents.map(el => el[0]);

    let decimal = 0, lastEquivalent = 0, lastEquivalentIndex = 0, thisEquivalent = 0;

    for (const character of roman.split("")) {
        console.log(character);
        //find the index of this character and return null if it is not found
        const thisEquivalentIndex = romanNumerals.indexOf(character);
        if (thisEquivalentIndex === -1) return null;

        //get the decimal equivalent
        thisEquivalent = romanToDecimalEquivalents[thisEquivalentIndex][1];

        //check if this decimal equivalent is higher than the previous one for cases like 'IV'
        if (lastEquivalent !== 0 && thisEquivalent > lastEquivalent) {
            //check if this is a valid Roman numeral (e.g. not 'XM')
            //if we have X, C or M, we cannot have a gap of more than 2 between the current and last equivalents, otherwise we cannot have a gap of more than 1
            if ([2, 4, 6].indexOf(thisEquivalentIndex) > -1) {
                if (thisEquivalentIndex - lastEquivalentIndex > 2) return null;
            } else if (thisEquivalentIndex - lastEquivalentIndex > 1) return null;

            //remove twice the previous equivalent because we have already added it and now we want to subtract it instead of adding it
            decimal -= 2 * lastEquivalent;
        }

        decimal += thisEquivalent;

        lastEquivalent = thisEquivalent;
        lastEquivalentIndex = thisEquivalentIndex;
    }
    return decimal;
});