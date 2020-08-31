import React from 'react'
import { isEmpty } from 'lodash'
import './search-box.css'
import PokeDexService from '../../service/pokedex.service'

class SearchBox extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      pokemon: {},
      search: undefined
    }
  }

  //Funcao para exibir uma lista de pokemons
  pokemonList = () => {
    let pokeList = []

    /*await*/ PokeDexService.getPokeList()
      .then(response => {
        pokeList = response.results
      })

    pokeList.map(pokemon => {
      return PokeDexService.getPokeInfo(pokemon.name)
        .then((response) => {
          pokemon.type = response.types[0].type.name
          pokemon.img = response.sprites.front_default
        })
    })

    this.setState({ pokeList });
  }

  search(event) {
    const search = event.target.search.value


    PokeDexService.getPokeInfo(search)
      .then((response) => {
        this.setState({
          pokemon: response
        })
      })

    //pokemonList()

    event.preventDefault() // Tira o recarregamento da página
  }

  upadateSearch(event) {
    this.setState({
      search: event.target.value
    })
  }

  renderSearchBox() {
    return (
      <div className="img">
        <div className="container search-box">
          <form className="flex" onSubmit={this.search.bind(this)}>
            <input className="form-control form-control-lg pesquisa" name="search" placeholder="Qual o Pokémon?" onChange={this.upadateSearch.bind(this)} value={this.state.search} />
            <button className="btn btn-secondary btn-lg button-search" type="submit">Pesquisar</button>
          </form>
        </div>
      </div>
    )
  }

  renderResultBox() {
    return (
      <div className="bg-light">
        <div className="container">
          <div className="results-box">

            {/* Card */}
            <div className="card mb-3 card-color-header cards text-color"> {/*text-white bg-card*/}
              <div className="card-header nome-poke">Nome do Pokémon</div>
              <div className="card-body ">
                
                {/* Tipos */}
                <div className="box-type1">
                  <h6 className="card-title">Tipos</h6>
                  <div className="types">
                    <div className="type-poke">
                      <p>Fogo</p>
                    </div>
                    <div className="type-poke">
                      <p>Fogo</p>
                    </div>
                  </div>
                </div>
                
                {/* Fraquezas */}
                <div className="box-type2">
                  <h6 className="card-title">Fraquezas</h6>
                  <div className="types">
                    <div className="type-poke">
                      <p>Terra</p>
                    </div>
                    <div className="type-poke">
                      <p>Agua</p>
                    </div>
                  </div>
                </div>
                {/*   */}

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (

      <div>
        {this.renderSearchBox()}

        {!isEmpty(this.state.pokemon)
          ? this.renderResultBox()
          : null
        }

      </div>
    )
  }
}
export default SearchBox