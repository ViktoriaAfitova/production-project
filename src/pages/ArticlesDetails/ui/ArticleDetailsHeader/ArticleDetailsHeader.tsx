import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { selectEditArticle } from 'pages/ArticlesDetails/model/selectors/selectors';
import { selectArticleDetails } from 'entities/Article';
import style from './ArticleDetailsHeader.module.scss';

interface ArticleDetailsHeaderProps {
  className?: string;
}

export const ArticleDetailsHeader = ({
  className,
}: ArticleDetailsHeaderProps) => {
  const { t } = useTranslation('article');
  const navigate = useNavigate();
  const edit = useSelector(selectEditArticle);
  const article = useSelector(selectArticleDetails);

  const onBackToArticles = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const editArticle = useCallback(() => {
    navigate(`${RoutePath.articleDetails}${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <div className={classNames(style.header, {}, [className])}>
      <Button
        onClick={onBackToArticles}
        theme={ButtonTheme.Outline}
      >
        {t('Back to articles')}
      </Button>
      {/* {edit && ( */}
      <Button
        className={style.editButton}
        onClick={editArticle}
        theme={ButtonTheme.Outline}
      >
        {t('Edit')}
      </Button>
      {/* )} */}
    </div>
  );
};
