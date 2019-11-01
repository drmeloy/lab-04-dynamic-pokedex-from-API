import Component from './Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/ `
        <div class="header-div">
        <header>
            <img src="./assets/img/pokeball.png" alt="pokeball" />
            <h1>Dan's Pokedex!!!</h1>
            <img src="./assets/img/pokeball.png" alt="pokeball" />
        </header>
        <nav>
            <a href="../index.html">Home</a>
            <a href="https://www.youtube.com/watch?v=Offw-N3PkoA">About</a>
            <a href="../pokedex.html">Pokemon</a>
        </nav>
    </div>
        `;
    }
}

export default Header;