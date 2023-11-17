export type ArticleFilterProps = {
  datePicker: {
    label: string;
    handleDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selectedDate: string;
  },
  select: {
    selectLabel: string;
    name: string;
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
    selectedItem: string;
  }
}

export type SearchAndFilterProps = {
  handleSearch:  (event: React.ChangeEvent<HTMLInputElement> ) => void;
  handleSearchNews: () => void;
  handlefilterByDate: (searchParams: string) => void;
  handlefilterBySource: (searchParams: string) => void;
  handlefilterByCategory: (searchParams: string) => void;
}

export type FiltersProps = Omit<SearchAndFilterProps, 'handleSearch' | 'handleSearchNews'>

export type SelectProps = Pick<ArticleFilterProps, 'select'>

export type DatePickerProps = Pick<ArticleFilterProps, 'datePicker'>

export type SearchBarProps = Pick<SearchAndFilterProps, 'handleSearch'> & {
  searchLabel: string;
}

export type CardProps = {
  title: string;
  content: string;
  imageUrl: string;
  source?: string;
}

export type CardListProps = {
  articles: Array<CardProps>
}

export type NavBarProps = {
  title: string;
  link: string;
}

export type MultiSelectProps = {
  options: string[];
  selectedOptions: string[];
  handleToggleOption: (option: never) => void;
  label: string
}

export type ModalProps = {
  subtitle: string;
}

export type fetchNewsFromAPIProps = {
  url: string,
  source: string,
  params: Record<string, string> | URLSearchParams
}

export type apiClientFunctionProps = (params: fetchNewsFromAPIProps) => Promise<any>;

export type fetchAllNewsParamsProps = Partial<{
  newApi: { country: string, q: string, from: string},
  guardianNews: {country: string, q: string, 'from-date'?: string},
  newYorkTimes: { query: string, 'begin_date': string},
}>;
