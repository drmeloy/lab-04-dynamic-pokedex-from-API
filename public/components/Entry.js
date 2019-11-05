import Component from './Component.js';

class Entry extends Component {
    renderHTML() {
        const poke = this.props.poke;
        const capitalize = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };

        return /*html*/ `
        <figure class="entry ${poke.type_1}">
            <div class="info">
                <p>Name: ${capitalize(poke.pokemon)}</p>
                <p>Number: ${poke.id}</p>
                <p>Type: ${capitalize(poke.type_1)}</p>
                <p>HP: ${poke.hp}</p>
                <p>Attack: ${poke.attack}</p>
                <p>Defense: ${poke.defense}</p>
            </div>
            <img src="${poke.url_image}" alt="${poke.pokemon}" class="poke-pic" />
        </figure>
        `;
    }
}

export default Entry;