import {reset} from './reset';

test('count resets to zero', () => {
    expect(reset(5)).toEqual(0);
    expect(reset(0)).toEqual(0);
    expect(reset(5)).not.toEqual(5);
})