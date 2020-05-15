import { aver } from '../src';

test('aver', () => {
    expect(aver(5, 3)).toBe(4);
    expect(aver(6)).toBe(6);
});
