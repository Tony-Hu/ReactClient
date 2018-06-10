export function getResponse(endpoint, tag) {
    const url = "https://web-server-endpoints.appspot.com/parse?endpoint="+ endpoint + "&tag=" + tag;
    const response = new XMLHttpRequest();
    response.open("GET", url, false);
    response.send();
    console.log(response.responseText);
    return {type : "GET_HTML_BY_TAG_SUCCESS", payload : response.responseText};
}