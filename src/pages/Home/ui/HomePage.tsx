import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation('home');
  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <div>
      {t('Home')}
    </div>
  );
};

export default HomePage;
