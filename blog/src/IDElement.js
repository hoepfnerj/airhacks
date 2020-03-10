import { render } from "./lib/lit-html.js";
import { store } from "./store.js";

export default class IDElement extends HTMLElement { 
    constructor() { 
        super();
        this.state = {}
    }

    connectedCallback() { 
        store.subscribe(_ => this.triggerUpdate());
        this.triggerUpdate();
    }
    
    triggerUpdate() { 
        this.state = store.getState();
        const template = this.view();
        render(template,this);
    }
    view() { 

    }


}