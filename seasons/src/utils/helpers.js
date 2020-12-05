export const buildQueryString = (filters) => {
    const filtersArray = Object.entries(filters);
    let querystring = "?";
    filtersArray.forEach((filter) => {
      if (filter[1] !== 0) {
        querystring += `${filter[0]}=${filter[1]}&`;
      }
    });
    if (querystring.endsWith("&")) {
      querystring = querystring.slice(0, -1);
    }
    return querystring;
  };
