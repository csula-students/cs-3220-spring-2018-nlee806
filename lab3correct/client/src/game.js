// default interval as 1 second
const interval = 1000;

/**
 * loop is main loop of the game, which will be executed once every second (
 * based on the interval variable configuration)
 */
export function loop (store) {
	// TODO: increment counter based on the generators in the state	
	// hint: read how many "generators" in store and iterate through them to
	//       count how many value to increment to "resource"
	// hint: remember to change event through `store.dispatch`
	var genArray = window.store.state.generators;
	var numGenerators = genArray.length;
	var amountGen = 0;
	for(var i = 0; i<numGenerators;i++){
		Generator next = new Generator(genArray[i]);
		amountGen=amountGen+next.generate();
	}
	const actionGen = {
		type: constants.actions.INCREMENT,
		payload: amountGen;
	};
	window.store.dispatch(actionGen);
	// TODO: triggers stories from story to display state if they are passed
	//       the `triggeredAt` points
																				//	setTimeout(loop.bind(this, store), interval);
																				//}
	// hint: use store.dispatch to send event for changing events state
																				//export function increment (state, modifier = 1) {
																				//	return state.counter + 1 * modifier;
	var storyArray = window.store.state.story;
	var numStories = storyArray.length;
	for(var j = 0; j<numStories;j++){
		Story next = new Story(storyArray[j]);
		if((next.isUnlockYet()).equals(true)){
			next.unlock();
			const actionStory = {
			type: constants.actions.CHECK_STORY,
			};
			window.store.dispatch(actionGen);
		}
	}
	// recursively calls loop method every second
	setTimeout(loop.bind(this, store), interval);
 }
}
