import Component from './Component.js';
import Entry from './Entry.js';

class Pokedex extends Component {
    onRender(dom) {
        const pokemon = (this.props.pokemon).sort(function (a, b) {
            return a.id - b.id;
        });
        pokemon.forEach(poke => {
            const props = { poke };
            const entry = new Entry(props);
            const entryDOM = entry.renderDOM();
            dom.appendChild(entryDOM);
        });
    }

    renderHTML() {
        return /*html*/ `
            <main class="pokedex">

            </main>
        `;
    }
}

export default Pokedex;