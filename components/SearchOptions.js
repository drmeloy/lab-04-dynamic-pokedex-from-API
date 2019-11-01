import Component from './Component.js';

class SearchOptions extends Component {
    renderHTML() {
        return /*html*/ `
        <section class="search-and-sort">
        <label class="search-bar">
            <p>SEARCH:</p>
            <input type="text" />
        </label>
        <div class="sort">
        <p id="sort-title">SORT:</p>
            <label>
                <input type="radio" name="sort" value="type" id="sort1">TYPE
            </label>
            <label>
                <input type="radio" name="sort" value="number" id="sort2">NUMBER
            </label>
            <label>
                <input type="radio" name="sort" value="attack" id="sort3">ATTACK
            </label>
            <label>
                <input type="radio" name="sort" value="defense" id="sort4">DEFENSE
            </label>
        </div>
    </section>
        `;
    }
}

export default SearchOptions;