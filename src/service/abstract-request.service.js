class AbstractRequestService {
  makeRequest(url, method, headers = []) {
    var request = new XMLHttpRequest()
  
    return new Promise(function (resolve, reject) {
      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status >= 200 && request.status < 300) {
            resolve(request.response)
          } else {
            reject({
              status: request.status,
              statusText: request.statusText
            })
          }
        }
      }
  
      request.open(method, url)
  
      request.responseType = `json`
  
      headers.forEach(header => {
        request.setRequestHeader(header.name, header.value)
      })
  
      request.send()
    })
  }
}

export default new AbstractRequestService()