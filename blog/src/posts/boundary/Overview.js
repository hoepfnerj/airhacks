import IDElement from "../../IDElement.js";
import { html } from "../../lib/lit-html.js";

class Overview extends IDElement {

    view() {
        return html`
        <ol>
            ${this.state.posts.posts.map(({ title, content }) => html`
                <li>${title}, ${content}</li>       
            `)}
        </ol>
        `;
    }

}

customElements.define('a-overview', Overview);