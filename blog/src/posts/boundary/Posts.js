import { html,render } from "../../lib/lit-html.js";

class Posts extends HTMLElement { 

    constructor() {
        super();
        this.post = {};
    }

    connectedCallback() { 

        const template = this.view();
        render(template,this);

    }

    input(name) { 
        return html`
            <input name="${name}" @change=${e => this.changed(e)}>
        `;

    }

    view() { 
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
        console.log('save',this.post);
    }

}

customElements.define('a-posts',Posts);