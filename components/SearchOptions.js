import Component from './Component.js';

class SearchOptions extends Component {
    onRender(form){
        const userInput = form.querySelector('input[name=search-bar]');
        const radios = form.querySelectorAll('input[name=sort]');

        function updateControls(){
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            userInput.value = searchParams.get('pokemon') || searchParams.get('type_1') || searchParams.get('attack') || searchParams.get('defense') || '';

            const sort = searchParams.get('sort');
            if (sort){
                radios.forEach(radio => {
                    radio.checked = radio.value === sort;
                });
            }
        }

        updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        });

        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);

            const queryString = '';
            const searchParams = new URLSearchParams(queryString);

            searchParams.set(formData.get('sort'), formData.get('search-bar'));
            searchParams.set('page', 1);

            window.location.hash = searchParams.toString();
        });
    }

    renderHTML() {
        return /*html*/ `
        <form class="search-and-sort">
            <label for="search-bar">
            SEARCH:
            </label>
            <p><input type="text" id="search-bar" name="search-bar" /></p>
        <div class="sort">
        <p id="sort-title">SORT:</p>
            <label>
                <input type="radio" name="sort" value="pokemon" id="sort1" checked>NAME
            </label>
            <label>
                <input type="radio" name="sort" value="type_1" id="sort2">TYPE
            </label>
            <label>
                <input type="radio" name="sort" value="attack" id="sort3">ATTACK
            </label>
            <label>
                <input type="radio" name="sort" value="defense" id="sort4">DEFENSE
            </label>
        </div>
        <p><button type='submit'>SEARCH</button></p>
    </form>
        `;
    }
}

export default SearchOptions;