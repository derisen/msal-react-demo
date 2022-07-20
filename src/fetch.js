export const fetchData = (endpoint, accessToken) => {
    if (!endpoint) {
        return Promise.reject(new Error("Endpoint is required"));
    }

    if (!accessToken) {
        return Promise.reject(new Error("Access token is required"));
    }

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