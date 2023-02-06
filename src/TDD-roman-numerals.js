export const romanToDecimal = (roman => {
    if (!roman || typeof roman !== 'string') return null;

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

export const decimalToRoman = (decimal => {
    if (!decimal || isNaN(decimal)) return null;

    const romanToDecimalEquivalents = [
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]

    const decimals = romanToDecimalEquivalents.map(el => el[1]);

    let remaining = decimal, roman = "";

    while (remaining > 0) {
        let nextDecimalIndex = 0;

        //loop over list of decimals from highest to lowest and when you reach a value lower than the remaining amount, divide remaining by this number
        for (let i = decimals.length - 1; i >= 0; i--) {
            if (decimals[i] === remaining) {
                roman += romanToDecimalEquivalents[i][0];
                remaining = 0;
                break;
            }

            if (decimals[i] < remaining) {
                //If the decimal begins with 4 or 9, need to do something different
                if (remaining.toString()[0] === '4' || remaining.toString()[0] === '9') {
                    //If it starts with 4, need to add next lower character + next higher
                    //If it starts with 9, need to add next-but-one lower + next higher
                    roman += (remaining.toString()[0] === '4' ? romanToDecimalEquivalents[i][0] : romanToDecimalEquivalents[i - 1][0]) + romanToDecimalEquivalents[i + 1][0];
                    remaining -= (remaining.toString()[0] === '4' ? decimals[i] : decimals[i - 1]) * parseInt(remaining.toString()[0]);
                    break;
                } else {
                    nextDecimalIndex = i;
                    const romanEquivalent = romanToDecimalEquivalents[nextDecimalIndex][0];
                    roman += romanEquivalent.repeat(Math.floor(remaining / decimals[nextDecimalIndex]));
                    remaining = remaining % decimals[nextDecimalIndex];
                    break;
                }
            }
        }
    }
    return roman;
});