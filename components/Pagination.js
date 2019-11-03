import Component from './Component.js';

class Pagination extends Component {
    onRender(dom) {
        const prevButton = dom.querySelector('.prev-button');
        const nextButton = dom.querySelector('.next-button');

        if (!prevButton){
            return;
        }

        let page = 1;

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);
            const parsedPage = parseInt(searchParams.get('page'));
            if (isNaN(parsedPage)){
                page = 1;
            }
            else {
                page = parsedPage;
            }
        }

        updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        });

        function updatePage(increment) {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);
            searchParams.set('page', page + increment);
            window.location.hash = searchParams.toString();
        }

        prevButton.addEventListener('click', () => {
            updatePage(-1);
        });

        nextButton.addEventListener('click', () => {
            updatePage(1);
        });
    }

    renderHTML() {
        const perPage = 20;
        const totalResults = this.props.totalResults;
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);

        let page = 1;
        const parsedPage = parseInt(searchParams.get('page'));
        if (isNaN(parsedPage)){
            page = 1;
        }
        else {
            page = parsedPage;
        }

        if (!totalResults){
            return /*html*/ `
                <p class="no-results-notification">No results, please try another search</p>
            `;
        }

        const lastPage = Math.ceil(totalResults / perPage);

        return /*html*/ `
        <section class="pagination">
            <p>Showing <span class="number-shown"></span> of <span class="number-total"></span></p>
            <div class="page-selector">
            <button class="prev-button" ${page === 1 ? 'disabled' : ''}>◀</button><p>Page <span class="page-shown"></span> of <span class="page-total"></span></p><button class="next-button" ${page === lastPage ? 'disabled' : ''}>▶</button>
            </div>
        </section>
        `;
    }
}

export default Pagination;