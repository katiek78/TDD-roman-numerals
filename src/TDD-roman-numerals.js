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
    let decimal = 0;
    for (let i = 0; i < roman.length; i++) {
        decimal += romanToDecimalEquivalents[romanToDecimalEquivalents.map(el => el[0]).indexOf(roman[i])][1];
    }    
    return decimal;
});