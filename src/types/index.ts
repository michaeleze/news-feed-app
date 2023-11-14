export type ArticleFilterProps = {
  datePicker:{
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

export type SelectProps = Pick<ArticleFilterProps, 'select'>

export type DatePickerProps = Pick<ArticleFilterProps, 'datePicker'>

export type CardProps = {
  title: string;
  content: string;
  imageUrl: string;
  source?: string;
}

export type ArticleCardListProps = {
  articles: Array<CardProps>
}

export type NavBarProps = {
  title: string;
  link: string;
}

export type SearchBarProps = {
  searchLabel: string;
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
