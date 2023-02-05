import { romanToDecimal, decimalToRoman } from "../src/TDD-roman-numerals.js";

describe("romanToDecimal", () => {
    test('Returns null if input is empty', () => {
        expect(romanToDecimal("")).toEqual(null);
    });
    test('Returns null if input is not a string', () => {
        expect(romanToDecimal(3)).toEqual(null);
    });
    test('Returns null when input contains non-Roman characters', () => {
        expect(romanToDecimal("MJS")).toEqual(null);
    });
    test('Returns null when a lower character comes before a non-adjacent Roman character, e.g. XM', () => {
        expect(romanToDecimal("XM")).toEqual(null);
    });
    test('Returns decimal equivalent of a single Roman character', () => {
        expect(romanToDecimal("V")).toEqual(5);
    });
    test('Returns decimal equivalent of a double Roman character', () => {
        expect(romanToDecimal("XX")).toEqual(20);
    });
    test('Returns decimal equivalent of a Roman numeral with different characters', () => {
        expect(romanToDecimal("XXV")).toEqual(25);
    });
    test('Returns decimal equivalent of a Roman numeral where the decimal equivalent of a character is lower than the next', () => {
        expect(romanToDecimal("IV")).toEqual(4);
        expect(romanToDecimal("MD")).toEqual(1500);
        expect(romanToDecimal("MCMLXXVIII")).toEqual(1978);
    });
});

describe("decimalToRoman", () => {
    test('Returns null if input is empty', () => {
        expect(decimalToRoman()).toEqual(null);
    });
    test('Returns null if input is not a number', () => {
        expect(decimalToRoman("foo")).toEqual(null);
    });
    test('Returns Roman equivalent of a decimal number that has a Roman equivalent', () => {
        expect(decimalToRoman(10)).toEqual("X");
    });
    test('Returns Roman equivalent of a decimal number that is a multiple of a number with a Roman equivalent', () => {
        expect(decimalToRoman(20)).toEqual("XX");
    });
    test('Returns Roman equivalent of a decimal number that requires multiple Roman characters', () => {
        expect(decimalToRoman(25)).toEqual("XXV");
    });
    test('Returns Roman equivalent of a decimal number that would require a shortcut like IV', () => {
        expect(decimalToRoman(24)).toEqual("XXIV");
        expect(decimalToRoman(59)).toEqual("LIX");
        expect(decimalToRoman(1978)).toEqual("MCMLXXVIII");
        expect(decimalToRoman(406)).toEqual("CDVI");
    });    
});