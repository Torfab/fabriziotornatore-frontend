export interface MetadatiDispatching {
  nextPage?: string,
  previousPage?: string,
  title?: string
}

export interface ArticleRoute {
  title: string;
  name: string;
  subLink: Array<ArticleRoute>
}

export interface ArticleDispatching {
  categoryTitle: string,
  categoryName: string,
  articles: Array<ArticleRoute>
}