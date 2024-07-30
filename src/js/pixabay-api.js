export default function searchImagesByQuery(query) {
    const URL = "https://pixabay.com/api/"; 
    const API_KEY = "45193678-2f5a0ec58b1b4d5be4b3075ec";

    return fetch(`${URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`).then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      }).catch((error) => {
        iziToast.error({
          position: "topRight",
            message: `${error}`,
        });
      })
}