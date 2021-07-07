// fetch("https://api.kanye.rest/")
//   .then((response) => {
//     if (!response.ok) throw response.statusText;
//     return response.json();
//   })
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));

// Doing same functionality as above with async/await
/*async function fetchData() {
  try {
    const response = await fetch("https://api.kanye.rest/");
    if(!response.ok) throw response.statusText
    return await response.json();
  } catch (error) {
      const json = {err : error}
      console.log('Fetch failed', json)
  }
}

async function showData() {
  const response = await fetchData();
  console.log(response);
}

showData();*/

// Getting video length in
/*fetch('https://cdn.api.video/vod/vi3FrFlStpE8rtMLt93N5fBk/mp4/1080/source.mp4', {method: "HEAD"})
.then(response => {
    if(!response.ok) throw response.statusText
    console.log(response.headers.get('content-length')) //return size in bytes
})
*/
