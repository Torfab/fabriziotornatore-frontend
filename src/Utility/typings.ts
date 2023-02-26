export interface MetadatiDidattica {
  nextPage?: string,
  previousPage?: string,
  title?: string
}

export interface ArticleRoute {
  title: string;
  name: string;
  subLink: Array<ArticleRoute>
}

export interface Didattica {
  categoryTitle: string,
  categoryName: string,
  articles: Array<ArticleRoute>
}