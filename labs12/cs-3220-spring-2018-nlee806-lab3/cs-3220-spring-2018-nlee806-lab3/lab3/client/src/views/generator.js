export default function (store) {
	return class GeneratorComponent extends window.HTMLElement {
		constructor () {
			super();
			this.store = store;

			// TODO: render generator initial view
				this.root.innerHTML = `<ul>
				${this.store.subscribe()}
				</ul>`
			// TODO: subscribe to store on change event
				//const store = Store(reducer, {});
				const state = store.state;
				store.subscribe(state=>{
					console.log(state);
				});
/*				store.dispatch({
						type: 'TEST';
						payload: 'Hi world'
				});
*/			// TODO: add click event
				document.getElementById("clickIncrease1").addEventListener("click", getCost);
				document.getElementById("counter").addEventListener("click", generate);
				document.getElementById("clickIncrease2").addEventListener("click", getCost);
				document.getElementById("counter").addEventListener("click", generate);
				document.getElementById("clickIncrease3").addEventListener("click", getCost);
				document.getElementById("counter").addEventListener("click", generate);
		}
	};
}
