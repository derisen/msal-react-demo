export const fetchData = (endpoint, accessToken) => {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;
    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(endpoint, options)
        .then(result => result.json())
        .catch(error => console.log(error));
}