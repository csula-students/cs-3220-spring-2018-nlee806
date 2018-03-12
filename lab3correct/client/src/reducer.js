export default function reducer (state, action) {
	switch (action.type) {
	case 'EXAMPLE_MUTATION':
		state.example = action.payload;
		return state;
	case 'BUY_GENERATOR':
//		state.counter = state.counter - state.generators,{unlockValue};
//		state.counter = state.counter-state.generators,{baseCost};
		state.counter = state.counter - 10;
		state.generators.name = action.payload.name;//, action.payload.quantity};
		state.generators.quantity = action.payload.quantity;
console.log(state.generators.quantity); //1
console.log(action.payload.quantity); //1
//Both are 1, but returns quantity 0(?).
//		state.generators.Object.quantity = action.payload.quantity;
		return state;
	case 'INCREMENT':
//state.data = action.payload;
		state.counter = action.payload;
//		state.generators = action;
//		state.stories = action;
		return state;
	case 'CHECK_STORY':
//state.data = action;
//		state.counter = action;
//		state.generators = action;
		state.story = action;
		return state;
	default:
		return state;
	}
}

