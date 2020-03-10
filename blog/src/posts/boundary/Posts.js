import { savePost } from "../control/PostsControl.js";
import { html, render } from "../../lib/lit-html.js";
import IDElement from "../../IDElement.js";

class Posts extends IDElement { 

    constructor() {
        super();
        this.post = {};
    }


    input(name) { 
        return html`
            <input name="${name}" @change=${e => this.changed(e)}>
        `;

    }
    view() { 
        console.log('rerendering',this.state);
        return html`
            <h2>posts</h2>
            ${this.input('title')}
            ${this.input('content')}
            <button @click=${e=>this.savePost(e)}>save</button>
        `;

    }

    changed({ target: { value,name}}) { 
        console.log(value, name);
        this.post[name] = value;
    }
    savePost(e) { 
        console.log('save', this.post);
        savePost(this.post);
    }

}

customElements.define('a-posts',Posts);