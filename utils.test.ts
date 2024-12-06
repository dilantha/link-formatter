import { formatLinkList } from './utils';

describe('formatLinkList', () => {
    it('should format a single markdown link into a list item', () => {
        const input = '[Example](https://example.com)';
        const expected = '- [Example](https://example.com)';
        expect(formatLinkList(input)).toBe(expected);
    });

    it('should handle multiple links', () => {
        const input = '[Example1](https://example1.com) [Example2](https://example2.com)';
        const expected = '- [Example1](https://example1.com)\n- [Example2](https://example2.com)';
        expect(formatLinkList(input)).toBe(expected);
    });

    it('should remove duplicate URLs keeping the first occurrence', () => {
        const input = '[First](https://example.com) [Second](https://example.com)';
        const expected = '- [First](https://example.com)';
        expect(formatLinkList(input)).toBe(expected);
    });

    it('should handle links with no title', () => {
        const input = '[](https://example.com)';
        const expected = '- [https://example.com](https://example.com)';
        expect(formatLinkList(input)).toBe(expected);
    });

    it('should handle empty input', () => {
        expect(formatLinkList('')).toBe('');
    });

    it('should handle input with no links', () => {
        expect(formatLinkList('just some text')).toBe('');
    });
});
