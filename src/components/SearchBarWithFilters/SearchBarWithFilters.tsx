import { SEARCH_LABEL } from "@/constants";
import { SearchAndFilterProps } from "@/types/";
import dynamic from "next/dynamic";

const SearchBar = dynamic(() => import('@/components/SearchBar/SearchBar'))

const Filters = dynamic(() => import('@/components/Filters/Filters'))

const SearchAndFilter: React.FC<SearchAndFilterProps> = (props) => {
  const {
    handleSearch,
    handleSearchNews,
    handlefilterByDate,
    handlefilterBySource,
    handlefilterByCategory
  } = props
  return (
    <div className="flex md:flex-row flex-col gap-6 w-fit">
      <SearchBar searchLabel={SEARCH_LABEL} handleSearch={handleSearch}/>
      <Filters
        handlefilterByDate={handlefilterByDate}
        handlefilterBySource={handlefilterBySource}
        handlefilterByCategory={handlefilterByCategory}
      />
      <button className="btn btn-primary place-content-center self-end" onClick={handleSearchNews}>{SEARCH_LABEL}</button>
    </div>
  );
};

export default SearchAndFilter;
