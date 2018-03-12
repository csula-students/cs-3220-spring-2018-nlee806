export default function (store) {
	return class StoryBookComponent extends window.HTMLElement {
		constructor () {
			super();
			this.store = store;
			// TODO: initial DOM rendering of story itself
			this.onStateChange = this.handleStateChange.bind(this);
		}

		handleStateChange (newState) {
			// TODO: display story based on the state "resource" and "stories"
			console.log('WebComponent#stateChange', this, this.store.state);
            // remove any existing counters (if any)
            //counter.forEach(c => {
            //    this.classList.remove(c);
            //});
            if (newState.counter) {
                // render up to date counter
                this.classList.add(newState.counter);
            }
			generators.forEach(c => {
                this.classList.remove(c);
            });
            if (newState.generators) {
                // render up to date generator
                this.classList.add(newState.generators);
			}
		}

		connectedCallback () {
			this.store.subscribe(this.onStateChange);
		}

		disconnectedCallback () {
			this.store.unsubscribe(this.onStateChange);
		}
	};
}

