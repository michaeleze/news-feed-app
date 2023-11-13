
export type AppProps = {
  title: string;
  content: string;
  imageUrl: string;
  link: string;
  date: string;
  searchLabel: string;
}

export type ArticleCardProps = Pick<AppProps, 'title' | 'content' | 'imageUrl'>

export type ArticleCardListProps = {
  listItems: Array<ArticleCardProps>
}

export type NavBarProps = Pick<AppProps, 'title' | 'link'>

export type SearchBarProps = Pick<AppProps, 'searchLabel'>
