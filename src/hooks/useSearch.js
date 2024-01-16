import { useMemo, useState } from "react";

export function useSearch(currentResturants) {
  const [search, setSearch] = useState('');
  const searchedRestaurants = useMemo(() => {
    return search ? currentResturants.filter(r => {
        return r.info.name.toLowerCase().includes(search.toLowerCase()) || r.info.cuisines.some(c=>c.toLowerCase().includes(search.toLowerCase()));
    })
       : currentResturants
  }, [search, currentResturants]);
    return {search,setSearch,searchedRestaurants};
};