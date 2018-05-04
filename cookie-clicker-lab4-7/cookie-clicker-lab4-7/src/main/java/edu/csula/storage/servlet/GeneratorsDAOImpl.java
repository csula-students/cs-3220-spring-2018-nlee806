package edu.csula.storage.servlet;

import java.util.Collection;
import java.util.ArrayList;
import java.util.Optional;

import javax.servlet.ServletContext;

import edu.csula.storage.GeneratorsDAO;
import edu.csula.models.Generator;

/**
 * To abstract the storage access from the business layer using ServletContext
 * (application scope). This implementation will store the underlying data under
 * the application scope and read from it accordingly.
 *
 * As ServletContext is like a global HashMap, it's important for you to add a
 * context name to separate out the different section of data (e.g. events vs
 * generators) so that you can have the application scope looks like below:
 *
 * ```json
 * {
 *   "events": [
 *     { "id": 0, "name": "event-1", "description": "..." }
 *   ],
 *   "generators": [
 *     { "id": 0, "name": "generator-1", "description": "..." }
 *   ]
 * }
 * ```
 */
public class GeneratorsDAOImpl implements GeneratorsDAO {
	private final ServletContext context;
	protected static final String CONTEXT_NAME = "generators";

	public GeneratorsDAOImpl(ServletContext context) {
		this.context = context;
	}

	@Override
	public Collection<Generator> getAll() {
		// TODO: get a list of generators from the context
		Object data = context.getAttribute(CONTEXT_NAME);
		if (data == null){
			return new ArrayList<>();
		}
		return (List<Event>) data;
//		return (Collection<Event>) context.getAttribute(CONTEXT_NAME);
		//return new ArrayList<>();
	}

	@Override
	public Optional<Generator> getById(int id) {
		// TODO: get a certain generator from context
		Collection<Event> list = getAll();
		for(int a=0;a<list.size();a++){
			if(a==context.getById(id)){
				return list.getById(a);
			}
		}
//		for through, get index, send back
		return Optional.empty();
	}

	@Override
	public void set(int id, Generator generator) {
		// TODO: change a certain generator from context
		Collection<Event> list = getAll();
		for(int a=0;a<list.size();a++){
			if(a==context.getById(id)){
				list.set(a, event);
				list.setAttribute();
			}
		}
	}

	@Override
	public void add(Generator generator) {
		// TODO: add a new generator to the context
		context.add(generator);
	}
}
