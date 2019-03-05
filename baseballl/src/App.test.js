import React from 'react';
import {render} from 'react-testing-library';
import 'jest-dom/extend-expect'
import App from './Components/App';
import Display from './Components/Display';
import Dashboard from './Components/Dashboard';

describe('Tests app component', () =>{
  it('renders without crashing', () => {
    render(<App/>)
    
  });
});

describe('Tests Dashboard component', () =>{
  it('renders without crashing', () =>{
    render(<Dashboard />);
  });
  test('if display component contains a ball count header', () =>{
    const component = render(<Dashboard />);
    const fowlButton = component.getByText('Fowl');
    expect(fowlButton).toHaveTextContent('Fowl');
  });
  it('checks for bawl button header', () =>{
    const component = render(<Dashboard />);
    const title = component.getByTestId('bawl-header');
    expect(title).toHaveTextContent(/bawl/i);
  })
});

// describe('Tests Display component' ,() =>{
//   it('renders without crashing', () =>{
//     render(<Display />);
//   });
// });

