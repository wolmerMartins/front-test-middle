class HttpRequest {
    static get(url, params = {}) {
        return HttpRequest.request('GET', url);
    }

    static request(method, url, params = {}) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.open(method, url);

            xhr.addEventListener('load', e => {
                let response = {};
                
                try {
                    response = JSON.parse(e.target.responseText);
                    resolve(response);
                } catch(e) {
                    reject(e);
                }
            });

            xhr.addEventListener('error', e => {
                reject(e);
            });

            xhr.send(JSON.stringify(params));
        });
    }
}