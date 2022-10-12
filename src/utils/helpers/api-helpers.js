export const queryStringFromJSON = (params) => {
    return Object.keys(params).map(key => key + '=' + params[key]).join('&');
}