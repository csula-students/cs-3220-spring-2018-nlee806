export default function (store) {
	return class GeneratorComponent extends window.HTMLElement {
		constructor () {
			super();
			this.store = store;
<<<<<<< HEAD
			
			// TODO: add click event    DOM rendering, event binding to buy
=======
			this.onStateChange = this.handleStateChange.bind(this);

			// TODO: render generator initial view

			// TODO: subscribe to store on change event

			// TODO: add click event

		}

		handleStateChange (newState) {
		}

		connectedCallback () {
			this.store.subscribe(this.onStateChange);
		}

		disconnectedCallback () {
			this.store.unsubscribe(this.onStateChange);
>>>>>>> Added changes to files and am very confused.
		}
	};
}
