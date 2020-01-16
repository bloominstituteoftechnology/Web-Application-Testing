import {addBall} from './addBall'

test('Adds 1 to score', ()=> {
  expect(addBall(1)).toBe(2)
})