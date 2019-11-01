import Component from './Component.js';

class Pagination extends Component {
    renderHTML() {
        return /*html*/ `
        <section class="pagination">
            <p>Showing <span class="number-shown">1</span> of <span class="number-total">151</span></p>
            <p>Page <span class="page-shown">1</span> of <span class="page-total">50</span></p>
        </section>
        `;
    }
}

export default Pagination;