import Component from './Component.js';
import Header from './Header.js';

class HomeApp extends Component {
    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
    }

    renderHTML() {
        return /*html*/ `
            <div>
                <main>
                <div>
                    <img src="https://toppng.com/public/uploads/preview/squirtle-glasses-png-squirtle-with-glasses-115630235017rf4o9g6tu.png" alt="sunglasses squirtle" />
                </div>
                <div>
                    <img src="https://i.pinimg.com/originals/16/e1/bd/16e1bd9ffbb0947fadcc53ce931afa7e.png" alt="squirtle squad" />
                </div>
                <div>
                    <img src="https://cdn.imgbin.com/4/23/5/imgbin-kamina-simon-sunglasses-pok-mon-mystery-dungeon-blue-rescue-team-and-red-rescue-team-squirtle-gurren-lagann-egvrcx5dNy73zfgVZQMJGaPKg.jpg" alt="cool squirtle" />
                </div>
                </main>
            </div>
        `;
    }
}

export default HomeApp;