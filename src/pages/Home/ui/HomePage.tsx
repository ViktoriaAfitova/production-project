import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const HomePage = () => {
  const { t } = useTranslation('home');
  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <Page>
      {t('Home')}
    </Page>
  );
};

export default HomePage;
