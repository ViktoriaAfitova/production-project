import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';

export const ArticleEditPage = () => {
  const { t } = useTranslation();
  const { id } = useParams<{id: string}>();
  const isEdit = Boolean(id);

  return (
    <Page>
      {isEdit
        ? t('Edit') + id
        : t('Create')}
    </Page>
  );
};

export default ArticleEditPage;
