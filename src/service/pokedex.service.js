import AbstractRequestService from './abstract-request.service'

class PokeDexService {

  getPokeInfo(pokemon) {
    const url = `/api/v2/pokemon/${pokemon}`
    const method = `GET`

    return AbstractRequestService.makeRequest(url, method)
  }
}

export default new PokeDexService()
