export default function (store) {
	return class GeneratorComponent extends window.HTMLElement {
		constructor () {
			super();
			this.store = store;
			
			this.onStateChange = this.handleStateChange.bind(this);
 			// TODO: render generator initial view
				this.root.innerHTML = `<ul>
				${this.store.subscribe()}
				</ul>`
 			// TODO: subscribe to store on change event
				const store = Store(reducer, {});
				//const state = store.state;
				store.subscribe(state=>{
					console.log(state);
				});
				store.dispatch({
						type: 'TEST';
						payload: 'Hi world';
				});
 			// TODO: add click event
/*				document.getElementById("clickIncrease1").addEventListener("click", getCost);
				document.getElementById("counter").addEventListener("click", generate);
				document.getElementById("clickIncrease2").addEventListener("click", getCost);
				document.getElementById("counter").addEventListener("click", generate);
				document.getElementById("clickIncrease3").addEventListener("click", getCost);
				document.getElementById("counter").addEventListener("click", generate);
*/
			this.addEventListener('click', () => {
                this.store.dispatch({
                    type: 'BUY_GENERATOR',
                });
            });
 		}
		handleStateChange (newState) {
            console.log('GeneratorComponent#stateChange', this, this.store.state);
            // remove any existing counters (if any)
//          counter.forEach(c => {
//                this.classList.remove(c);
//            });
            if (newState.counter) {
                // render up to date counter
                this.classList.add(newState.counter);
            }
//			generators.forEach(c => {
//                this.classList.remove(c);
//            });
            if (newState.generators) {
                // render up to date generator
                this.classList.add(newState.generators);
            }
        }
        connectedCallback () {
            console.log('GeneratorComponent#onConnectedCallback');
            this.store.subscribe(this.onStateChange);
        }
        disconnectedCallback () {
            console.log('GeneratorComponent#onDisconnectedCallback');
            this.store.unsubscribe(this.onStateChange);
        }
		
	};
}
