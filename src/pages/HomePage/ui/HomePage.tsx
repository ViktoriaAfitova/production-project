import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t } = useTranslation('home');

  return <div>{t('Home')}</div>;
}

export default HomePage;
