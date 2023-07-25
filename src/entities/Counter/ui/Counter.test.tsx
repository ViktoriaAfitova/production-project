// import { screen } from '@testing-library/react';
// import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';
// import { Counter } from './Counter';

// describe('Counter', () => {
//   test('render', () => {
//     renderComponent(<Counter />, {
//       initialState: { counter: { value: 10 } },
//     });
//     expect(screen.getByTestId('value-title')).toHaveTextContent(10);
//   });

//   test('increment', () => {
//     renderComponent(<Counter />, {
//       initialState: { counter: { value: 10 } },
//     });
//     userEvent.click(screen.getByTestId('increment-button'));
//     expect(screen.getByTestId('value-title')).toHaveTextContent('11');
//   });

//   test('decrement', () => {
//     renderComponent(<Counter />, {
//       initialState: { counter: { value: 10 } },
//     });
//     userEvent.click(screen.getByTestId('decrement-button'));
//     expect(screen.getByTestId('decrement-button')).toHaveTextContent('9');
//   });
// });
