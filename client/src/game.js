<<<<<<< HEAD
=======
// default interval as 1 second
>>>>>>> Added changes to files and am very confused.
const interval = 1000;

/**
 * loop is main loop of the game, which will be executed once every second (
 * based on the interval variable configuration)
 */
export function loop (store) {
	// TODO: increment counter based on the generators in the state
	// hint: read how many "generators" in store and iterate through them to
	//       count how many value to increment to "resource"
<<<<<<< HEAD
=======
	// hint: remember to change event through `store.dispatch`
>>>>>>> Added changes to files and am very confused.


	// TODO: triggers stories from story to display state if they are passed
	//       the `triggeredAt` points
<<<<<<< HEAD
	setTimeout(loop.bind(this, store), interval);
}

export function increment (state, modifier = 1) {
	return state.counter + 1 * modifier;
=======
	// hint: use store.dispatch to send event for changing events state

	// recursively calls loop method every second
	setTimeout(loop.bind(this, store), interval);
>>>>>>> Added changes to files and am very confused.
}
