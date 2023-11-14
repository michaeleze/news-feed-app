import Filters from "@/components/Filters/Filters";
import SearchBar from "@/components/SearchBar/SearchBar";
import { SEARCH_LABEL } from "@/constants";

const SearchAndFilter: React.FC = () => {
  return (
    <div className="flex md:flex-row flex-col gap-6">
      <SearchBar searchLabel={SEARCH_LABEL}/>
      <Filters />
    </div>
  );
};

export default SearchAndFilter;
