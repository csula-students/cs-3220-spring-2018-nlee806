export default function reducer (state, action) {
	switch (action.type) {
	case 'EXAMPLE_MUTATION':
		state.example = action.payload;
		return state;
<<<<<<< HEAD
		
	case 'BUY_GENERATOR':
		store.state = action.payload;
		state.counter = expected.counter;
		state.generators = expected.generators;
		return state;
	
=======
>>>>>>> Added changes to files and am very confused.
	default:
		return state;
	}
}

