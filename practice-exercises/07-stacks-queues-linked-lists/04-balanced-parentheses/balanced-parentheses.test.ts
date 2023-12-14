import { balancedParentheses } from './balanced-parentheses';

describe('balancedParentheses', () => {
  test('should return true for balanced parentheses', () => {
    expect(balancedParentheses('()')).toBe(true);
    expect(balancedParentheses('(())')).toBe(true);
    expect(balancedParentheses('(()())')).toBe(true);
    expect(balancedParentheses('((()))')).toBe(true);
    expect(balancedParentheses('()()()')).toBe(true);
    expect(balancedParentheses('()((()))()')).toBe(true);
    expect(balancedParentheses('((()()(())))')).toBe(true);
  });

  test('should return false for unbalanced parentheses', () => {
    expect(balancedParentheses(')(')).toBe(false);
    expect(balancedParentheses('((')).toBe(false);
    expect(balancedParentheses('))')).toBe(false);
    expect(balancedParentheses('())')).toBe(false);
    expect(balancedParentheses('(()(()')).toBe(false);
    expect(balancedParentheses('(()())(')).toBe(false);
    expect(balancedParentheses('((()()(()))')).toBe(false);
  });
});
