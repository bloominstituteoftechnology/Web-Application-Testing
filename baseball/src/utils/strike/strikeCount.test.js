import {strikeCount} from './strikeCount';


test('adds a strike until three and then resets', () => {
    expect(strikeCount(0)).toBe(1);
    expect(strikeCount(1)).toBe(2);
    expect(strikeCount(2)).toEqual(0);
    expect(strikeCount(2)).not.toEqual(3);
})