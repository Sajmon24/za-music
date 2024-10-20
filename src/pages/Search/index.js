import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SearchIcon from "assets/icons/search.svg";
import { InputWrapper, NotFountText, TableTitle, Wrapper } from "./styled";
import { search } from "services/api";
import TracksTable from "components/TracksTable";
import Input from "components/ui/Input";

function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [tracks, setTracks] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // TODO: Add debounce
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await search(searchQuery);
        setTracks(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchQuery) loadData();
  }, [searchQuery]);

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          startIcon={SearchIcon}
        />
      </InputWrapper>
      {searchQuery && (
        <div>
          <TableTitle>Result by:{searchQuery}</TableTitle>
          {(isLoading || (!isLoading && tracks?.length > 0)) && (
            <TracksTable isLoading={isLoading} tracks={tracks} />
          )}
        </div>
      )}
      {searchQuery && !isLoading && tracks?.length <= 0 && (
        <NotFountText> Nothing was found :(</NotFountText>
      )}
    </Wrapper>
  );
}

export default Search;
