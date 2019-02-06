import { render } from 'react-testing-library';

import Display from './index.js';

describe('The Display Component', () => {
    it('renders the correct count of balls and strikes', () => {
        const component = render(<Display balls="2" strikes="1" />);
        component.getByText(/2 balls/i);
        component.getByText(/1 strikes/i);
    });
})
//expect button.text to be "click me!"
// - display the count of `balls` and `strikes` for the at-bat.
// - resets both balls and strikes to 0 when a player reaches 3 strikes or 4 balls.
// - resets both balls and strikes to 0 when a player connects any type of hit.
// - should be updated when the user records activity on the `Dashboard` component.