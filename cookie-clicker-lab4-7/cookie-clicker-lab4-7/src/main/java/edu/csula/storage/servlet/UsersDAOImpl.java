package edu.csula.storage.servlet;

import java.util.Collection;
import java.util.ArrayList;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import edu.csula.models.User;
import edu.csula.storage.UsersDAO;

/**
 * To abstract the storage access from the business layer using HttpSession
 */
public class UsersDAOImpl implements UsersDAO {
	private final HttpSession context;
	protected static final String CONTEXT_NAME = "users";

	public UsersDAOImpl(HttpSession context) {
		this.context = context;
	}

	@Override
	public boolean authenticate(String username, String password) {
		// TODO: check if username/password combination is valid and store the
		//       username/password into the session
		response.setContentType("text/html");  
        PrintWriter out=response.getWriter();  
        //String username=request.getParameter("username");  
        //String password=request.getParameter("password");   
        if(username.equals("admin") && password.equals("cs3220password")){  
        out.print("Welcome, "+username);  
        HttpSession session=request.getSession();  
        session.setAttribute("username",username);  
        session.setAttribute("password", password);
        context.setAttribute("username",username);  
        context.setAttribute("password", password);
        Cookie ck = new Cookie("user",username);
        response.addCookie(ck);
        return true;
        }  
        else{  
            out.print("Sorry, username or password error!");
            response.sendRedirect("AdminEventsServlet.jsp");
//            AuthenticationServlet tryAgain = new AuthenticationServlet();
//            tryAgain.doGet(request, response);
            //request.getRequestDispatcher("login.html").include(request, response);
            return false;
        }  
        out.close();  
	}

	@Override
	public Optional<User> getAuthenticatedUser() {
		// TODO: return the authenticated user if there is any
		if((context.username != null)&&(context.password != null)){
			return context;
		}
//		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//
//		if (principal instanceof UserDetails) {
//		String username = ((UserDetails)principal).getUsername();
//		} else {
//		String username = principal.toString();
//		}
		else{
		return Optional.empty();
		}
	}

	@Override
	public void logout() {
		HttpSession session = request.getSession(true);
		session.invalidate();
//        context.invalidate();
 //       Cookie ck = new Cookie("user", "");
//        response.addCookie(ck);
		// TOOD: log user out using `invalidate`
	}
}
