export async function filterFetch(url, options) {
  return await fetch(url, options)
    .then((res) => {
      console.log('Resssss',res);
      if (res.status !== 401 && res.status !== 200 && res.status !== 404) {
        throw new Error(`${res.status}: Error Internal Server`);
      } else {
        return res.json();
      }
    })
    .then((json) => {
      if (json.response === 401) {
        throw new Error(JSON.stringify(json));
      } else if (json.response !== 200) {
        throw new Error(json.message || 'Error API fetch data');
      }
      return json.result;
    });
}
