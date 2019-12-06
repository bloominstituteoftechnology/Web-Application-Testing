import {ballCount} from './ballCount';

test('adds a ball until 4 and then resets', () => {
    expect(ballCount(0)).toEqual(1);
    expect(ballCount(1)).toEqual(2);
    expect(ballCount(2)).toEqual(3);
    expect(ballCount(3)).toEqual(0);
    expect(ballCount(3)).not.toEqual(4);
})
