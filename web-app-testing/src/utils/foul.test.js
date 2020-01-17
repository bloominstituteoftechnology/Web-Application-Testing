import {addFoul} from './foul'

test('Adds 1 to score', ()=> {
  expect(addFoul(1)).toBe(2)
})