package edu.csula.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Collection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import edu.csula.storage.servlet.EventsDAOImpl;
import edu.csula.storage.EventsDAO;
import edu.csula.models.Event;

@WebServlet("/admin/events")
public class AdminEventsServlet extends HttpServlet {
	@Override
	public void doGet( HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		// TODO: render the events page HTML
		ArrayList<Entry> entries = (ArrayList<Entry>) getServletContext().getAttribute("events");
//		html +="<form>";
		EventsDAO dao = new EventsDAOImpl(getServletContext());
		Collection<Event> events = dao.getAll();
		System.out.println(events);
		out.println("<h1>events servlet</h1>");
//		html +=”<tr>”
//		for(Entry entry: entries){
//			html += entry.getAll();
//		}
//		html += "<form>";
//		html +=”</table>”
//		html +=”<form>”
//		html +=”<h2>Add comment</h2>”
//		html +=”<input name = ‘name’>”
//		html +=”<button>Submit<button>”
//		html +=”</td><td><a href=’/entries/edit?id=” +entry.getAll = ”>”
	}
//public void init(){
//entries.add(new Entry(entries.size(), ))
//}
	@Override
	public void doPost( HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO: handle upsert transaction
		EventsDAO dao = new EventsDAOImpl(getServletContext());
		Collection<Event> entries = dao.getAll();
	//	ArrayList<GuestbookEntry> entries = (ArrayList<GuestBookEntry>) getServletContext().getAttribute(“guestbook-entries”);
	//parsing
		//String username = request.getParameter(“username”);
//String username = request.getParameter("event-1");
		//String comment = request.getParameter(“comment”);
//String comment = request.getParameter("generator-1");
//		Event entry = new Event()entries.size(), username), comment);
	dao.add(entries);
	response.sendRedirect("/events");
//		entries.add(entry);
//		getServletContext().setAttribute(“”,entries);
//		response.sendRedirect(“/guestbook”);
//		doGet(request, response);
	}
}
