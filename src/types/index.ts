
export type AppProps = {
  title: string;
  content: string;
  imageUrl: string;
  link: string;
  date: string;
  searchLabel: string;
}

export type ArticleFilerProps = {
  selectLabel?: string;
  name: string;
  handleChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  selectedItem?: string;
  label: string;
  handleDateChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedDate: string
}

export type CardProps = Pick<AppProps, 'title' | 'content' | 'imageUrl'>

export type ArticleCardListProps = {
  articles: Array<CardProps>
}

export type NavBarProps = Pick<AppProps, 'title' | 'link'>

export type SearchBarProps = Pick<AppProps, 'searchLabel'>

export type SelectProps = Pick<ArticleFilerProps, 'selectLabel' | 'name' | 'handleChange' | 'options' | 'selectedItem'>

export type MultiSelectProps = {
  options: string[];
  selectedOptions: string[];
  handleToggleOption: (option: never) => void;
  label: string
}

export type DatePickerProps = Pick<ArticleFilerProps, 'label' | 'handleDateChange' | 'selectedDate'>

export type ModalProps = {
  subtitle: string;
}
