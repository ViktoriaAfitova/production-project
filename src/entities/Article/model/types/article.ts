import { User } from 'entities/User';
import { ArticleBlockType, ArticleType } from '../constants/constants';

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase{
  type: ArticleBlockType.IMAGE
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase{
  type: ArticleBlockType.TEXT
  paragraphs: string[];
  title?: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export interface Article {
  id: string;
  title: string;
  userId: User;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
