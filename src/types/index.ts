export type ArticleFilterProps = {
    label: string;
    handlefilterByDate: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selectedDate: string | undefined;
    name: string;
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
    selectedItem: Record<string, string> ;
}

export type SearchAndFilterProps = Pick<ArticleFilterProps, 'handlefilterByDate' | 'selectedDate' | 'selectedItem' | 'handleChange'> & {
  handleSearch:  (event: React.ChangeEvent<HTMLInputElement> ) => void;
  handleSearchNews?: () => void;
}

export type FiltersProps = Omit<SearchAndFilterProps, 'handleSearch' | 'handleSearchNews'>

export type SelectProps = Omit<ArticleFilterProps, 'handlefilterByDate' | 'selectedDate' | 'label'> & {
  selectLabel: string;
}

export type DatePickerProps = Pick<ArticleFilterProps,'handlefilterByDate' | 'selectedDate' | 'label'>

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

export type fetchAllNewsParamsProps = {
  newApi: Partial<{ country: string, q: string, to: string}>,
  guardianNews: Partial<{country: string, q: string, 'to-date'?: string}>,
  newYorkTimes: Partial<{ q: string, 'end_date': string}>,
};
