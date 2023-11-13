import ArticleFilter from "@/components/ArticleFilter/ArticleFilter";
import SearchBar from "@/components/SearchBar/SearchBar";

const SearchAndFilter: React.FC = () => {
  return (
    <div className="flex md:flex-row flex-col gap-6">
      <SearchBar />
      <ArticleFilter />
    </div>
  );
};

export default SearchAndFilter;
