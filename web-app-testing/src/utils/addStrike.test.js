import {addStrike} from './addStrike'

test('Adds 1 to score', ()=> {
  expect(addStrike(1)).toBe(2)
})