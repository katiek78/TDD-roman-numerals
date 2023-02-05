import { romanToDecimal } from "../src/TDD-roman-numerals.js";

describe("romanToDecimal", () => {
    test('Returns null when empty', () => {
        expect(romanToDecimal("")).toEqual(null);
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