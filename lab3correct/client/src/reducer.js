export default function reducer (state, action) {
	switch (action.type) {
	case 'EXAMPLE_MUTATION':
		state.example = action.payload;
		return state;
		break;
	case 'BUY_GENERATOR':
//		state.counter = action.payload;
		state.generators.name = action.payload.name;
		state.generators.quantity = action.payload.quantity;
		return state;
		break;
	case 'INCREMENT':
//state.data = action.payload;
		state.counter = action.payload;
//		state.generators = action;
//		state.stories = action;
		return state;
		break;
	case 'CHECK_STORY':
state.data = action;
//		state.counter = action;
//		state.generators = action;
		state.story = action;
		return state;
		break;
	default:
		return state;
	}
}

