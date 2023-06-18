import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("search-bar")
export class SearchBar extends LitElement {
    static styles = css`
        #textBox {
            padding: 0.3em 1em;
            font-size: 1rem;
        }

        #textBox:focus {
            outline: none;
        }

        #submitButton {
            cursor: pointer;
            padding: 0.5em 1em;
            border-radius: 0.25em;
            border: none;
            background: #5764d3;
            color: white;
            font-size: 1rem;
        }

        #submitButton:active {
            background: #4b55b3;
        }
    `;

    @property({ type: String, reflect: true })
    query = "Input text here";

    private onInput() {
        this.query = this.renderRoot.querySelector("input")?.value ?? "";
        this.dispatchEvent(new Event("input"));
    }

    private onClick() {
        console.log("Search button clicked");
    }

    render() {
        return html`
            <input type="text" id="textBox" value=${this.query} @input=${this.onInput} />
            <button @click=${this.onClick} @change=${this.dispatchEvent(new Event("change"))} id="submitButton">
                Search
            </button>
        `;
    }
}
