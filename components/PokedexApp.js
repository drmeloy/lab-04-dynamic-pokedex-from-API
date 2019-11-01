import Component from './Component.js';
import Header from './Header.js';
import SearchOptions from './SearchOptions.js';
import Pagination from './Pagination.js';
import Pokedex from './Pokedex.js';
import { getPokemon } from '../services/pokemon-api.js';


class PokedexApp extends Component {
    async onRender(dom) {
        const headerSection = dom.querySelector('.header-div');
        const header = new Header();
        headerSection.appendChild(header.renderDOM());

        const theRest = dom.querySelector('.the-rest');
        const searchOptions = new SearchOptions();
        theRest.appendChild(searchOptions.renderDOM());

        const pagination = new Pagination();
        theRest.appendChild(pagination.renderDOM());

        const pokedex = new Pokedex({ pokemon: [] });
        theRest.appendChild(pokedex.renderDOM());

        const response = await getPokemon();
        const pokemon = response.results;
        pokedex.update({ pokemon: pokemon });
    }

    renderHTML() {
        return /*html*/ `
            <div>
                <div class="header-div">
                
                </div>
                <div class="the-rest">
                
                </div>
            </div>
        `;
    }
}

export default PokedexApp;