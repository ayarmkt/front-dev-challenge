export const fetchResult = async (input, setResults) => {
  const fetchData = async () => {
    const response = await fetch(
      `https://thawing-scrubland-03171.herokuapp.com/https://skincare-api.herokuapp.com/product?q=${input}`
    );

    if (!response.ok) {
      throw new Error('cannot get search results');
    }

    const data = await response.json();
    return data;
  };

  try {
    const data = await fetchData();
    setResults(data);
  } catch (error) {
    console.error(error);
  }
};
