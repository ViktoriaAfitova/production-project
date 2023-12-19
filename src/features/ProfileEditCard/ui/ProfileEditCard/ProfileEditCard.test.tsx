import userEvent from '@testing-library/user-event';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';
import { Profile } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { screen } from '@testing-library/react';
import { ProfileEditCard } from './ProfileEditCard';
import { profileReducer } from '../../store';
import { api } from 'shared/api/api';

const profile: Profile = {
  id: '1',
  firstName: 'admin',
  lastName: 'admin',
  age: 37,
  currency: Currency.EUR,
  country: Country.Belarus,
  city: 'Minsk',
  username: 'admin123',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {
        id: '1',
        username: 'admin',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('ProfileEditCard', () => {
  test('readonly mode should switch', async () => {
    renderComponent(<ProfileEditCard id="1" />, options);
    await userEvent.click(screen.getByTestId('ProfileHeader.EditButton'));
    expect(screen.getByTestId('ProfileHeader.CancelButton')).toBeInTheDocument();
  });

  test('when canceling the values must be reset', async () => {
    renderComponent(<ProfileEditCard id="1" />, options);
    await userEvent.click(screen.getByTestId('ProfileHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));

    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user');
    await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'user');

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('user');
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('user');

    await userEvent.click(screen.getByTestId('ProfileHeader.CancelButton'));

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('admin');
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('admin');
  });

  test('an error should appear', async () => {
    renderComponent(<ProfileEditCard id="1" />, options);
    await userEvent.click(screen.getByTestId('ProfileHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));

    await userEvent.click(screen.getByTestId('ProfileHeader.SaveButton'));

    expect(screen.getByTestId('ProfileCard.Error.Paragraph')).toBeInTheDocument();
  });

  test('no validation errors, a PUT request should be sent to the server', async () => {
    const mockPutRequest = jest.spyOn(api, 'put');
    renderComponent(<ProfileEditCard id="1" />, options);
    await userEvent.click(screen.getByTestId('ProfileHeader.EditButton'));

    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user');

    await userEvent.click(screen.getByTestId('ProfileHeader.SaveButton'));

    expect(mockPutRequest).toHaveBeenCalled();
  });
});
