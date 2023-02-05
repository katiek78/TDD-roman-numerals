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
    let decimal = 0, lastEquivalent = 0, thisEquivalent = 0;    
    for (let i = 0; i < roman.length; i++) {      
        thisEquivalent = romanToDecimalEquivalents[romanToDecimalEquivalents.map(el => el[0]).indexOf(roman[i])][1];
        if (i > 0 && thisEquivalent > lastEquivalent) {
            decimal -= 2 * lastEquivalent;
        }
        decimal += thisEquivalent;    
        lastEquivalent = thisEquivalent;
    }    
    return decimal;
});