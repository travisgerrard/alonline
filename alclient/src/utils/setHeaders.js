
export function setHeaders(headers) {
  if (localStorage.jwtToken) {
    console.log("This ran");
    return {
      ...headers,
      'Authorization': `Bearer ${localStorage.jwtToken}`
    }
  } else {
    return headers;
  }
}
