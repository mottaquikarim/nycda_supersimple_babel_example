export const GET = (url) => {
    return new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.open('GET', url);
        http.onload = () => {
            try {
                const data = JSON.parse(http.responseText);
                resolve(data);
            } catch (e) {
                reject(e);
            }
        };
        http.onerror = () => {

        };
        http.send();
    });
}
