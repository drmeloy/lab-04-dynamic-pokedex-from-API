import Component from './Component.js';

class Entry extends Component {
    renderHTML() {
        const poke = this.props.poke;

        return /*html*/ `
        <figure class="entry">
            <div class="info">
                <p>Name: ${poke.pokemon}</p>
                <p>Number: ${poke.id}</p>
                <p>Type: ${poke.type_1}</p>
                <p>HP: ${poke.hp}</p>
                <p>Attack: ${poke.attack}</p>
                <p>Defense: ${poke.defense}</p>
            </div>
            <img src="${poke.url_image}" alt="${poke.pokemon}" class="poke-pic" />
            <p class="description">There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.</p>
        </figure>
        `;
    }
}

export default Entry;