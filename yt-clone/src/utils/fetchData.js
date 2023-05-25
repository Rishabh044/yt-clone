async function fetchData(currentPage, itemsPerPage=10) {
  const response = await fetch(`https://internship-service.onrender.com/videos?page=${currentPage}&per_page=10`);
  const data = await response.json();
  return data;
}

export default fetchData;