import { SEARCH_LABEL } from "@/constants";
import dynamic from "next/dynamic";

const SearchBar = dynamic(() => import('@/components/SearchBar/SearchBar'))

const Filters = dynamic(() => import('@/components/Filters/Filters'))

const SearchAndFilter: React.FC = () => {
  return (
    <div className="flex md:flex-row flex-col gap-6 w-fit">
      <SearchBar searchLabel={SEARCH_LABEL}/>
      <Filters />
    </div>
  );
};

export default SearchAndFilter;
