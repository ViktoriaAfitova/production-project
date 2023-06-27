import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import {
  rendeWithTranslation,
} from '../../../../shared/lib/tests/renderwithTranslation/renderWithTranslation';

describe('classNames', () => {
  test('render', () => {
    rendeWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    rendeWithTranslation(<Sidebar />);
    const toggleButton = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getAllByTestId('sidebar-toggle')).toHaveClass('collapsed');
  });
});
