export default function reducer (state, action) {
	switch (action.type) {
	case 'EXAMPLE_MUTATION':
		state.example = action.payload;
		return state;
		break;
	case 'BUY_GENERATOR':
		state.counter = action.payload;
		state.generator = action.payload;
		return state;
		break;
	default:
		return state;
	}
}

