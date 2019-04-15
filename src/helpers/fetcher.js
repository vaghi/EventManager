import Toaster from './toaster';

const toaster = new Toaster();

export default class Fetcher {
    get(url, successCallback, failureCallback) {
        fetch(url)
        .then(res => handleErrors(res))
        .then(res => successCallback(res))
        .catch(error => {
            toaster.error("There was an error during the request");
            console.log(error)

            if(failureCallback !== undefined) {
                failureCallback();
            }
        });
    }

    post(url, data, successCallback, failureCallback) {
        requestWithBody(url, data, successCallback, failureCallback, "POST");
    }

    put(url, data, successCallback, failureCallback) {
        requestWithBody(url, data, successCallback, failureCallback, "PUT");
    }


}

const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}

const requestWithBody = (url, data, successCallback, failureCallback, verb) => {
    fetch(url, {
        method: verb,
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(res => handleErrors(res))
    .then(res => successCallback(res))
    .catch(error => {
        toaster.error("There was an error during the request");
        console.log(error)

        if(failureCallback !== undefined) {
            failureCallback();
        }
    });
}
