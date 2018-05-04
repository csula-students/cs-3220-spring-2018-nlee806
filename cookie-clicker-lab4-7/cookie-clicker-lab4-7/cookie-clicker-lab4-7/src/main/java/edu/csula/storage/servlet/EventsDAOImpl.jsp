<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>HelloJSTL</title>
</head>
<body>
 <c:out value="Hello JSTL" />
</body>
</html>
<%--
package edu.csula.storage.servlet;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import javax.servlet.ServletContext;

import edu.csula.storage.EventsDAO;
import edu.csula.models.Event;

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
public class EventsDAOImpl implements EventsDAO {
	private final ServletContext context;
	protected static final String CONTEXT_NAME = "events";

	public EventsDAOImpl(ServletContext context) {
		this.context = context;
	}

	@Override
	public List<Event> getAll() {
		// TODO: read a list of events from context
		Object data = context.getAttribute(CONTEXT_NAME);
		if (data == null){
			return new ArrayList<>();
		}
		return (List<Event>) data;
//		return (Collection<Event>) context.getAttribute(CONTEXT_NAME);
		//return new ArrayList<>();
	}

	@Override
	public Optional<Event> Event(int id) {
		Collection<Event> list = getAll();
		<c:forEach items="${getAll()}">
			<c:if >${}
				
			</c:if>
		</c:forEach>
		for(int a=0;a<list.size();a++){
			if(a==context.getById(id)){
				return list.getById(a);
			}
		}
//		for through, get index, send back
		// TODO: get a certain event given its id from context (see getAll() on
		// getting a list first and get a certain one from the list)
		
		return Optional.empty();
	}

	@Override
	public void set(int id, Event event) {
		Collection<Event> list = getAll();
		for(int a=0;a<list.size();a++){
			if(a==context.getById(id)){
				list.set(a, event);
				list.setAttribute();
			}
		}
		
//		for through, get index, send back, 
//		call setAttribute after mutation
		
		// TODO: set a certain event given id to be different from context
	}

	@Override
	public void add(Event event) {
		context.add(event);
		// TODO: add a new event to the context
	}

	@Override
	public void remove(int id) {
		context.remove(id);
		// TODO: remove a single event given id
	}
}
--%>
