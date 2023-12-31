import { useMemo, useState } from "react";

export function useSearch(currentResturants) {
  const [search, setSearch] = useState('');
  const filteredRestaurants = useMemo(() => {
    return search ? currentResturants.filter(r => {
      if(r.type==="restaurant"){
        return r.name.toLowerCase().includes(search.toLowerCase()) || r.cuisine.some(c=>c.toLowerCase().includes(search.toLowerCase()));
      }
    })
       : currentResturants
  }, [search, currentResturants]);
    return {search,setSearch,filteredRestaurants};
};