async function Fetch(location, page) {
  const url = `https://api.github.com/search/users?q=location:${location}&page=${page}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch ({ status }) {
    throw status;
  }
}

export default Fetch;
