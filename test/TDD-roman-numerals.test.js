import { romanToDecimal } from "../src/TDD-roman-numerals.js";

describe("romanToDecimal", () => {
    test('Returns null when empty', () => {
        expect(romanToDecimal("")).toEqual(null);
    });
    test('Returns decimal equivalent of a single Roman character', () => {
        expect(romanToDecimal("V")).toEqual(5);
    });
    test('Returns decimal equivalent of a double Roman character', () => {
        expect(romanToDecimal("XX")).toEqual(20);
    });
});