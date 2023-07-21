import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t } = useTranslation('home');

  return (
    <div>
      {t('Home')}
      <Counter />
    </div>
  );
}

export default HomePage;
