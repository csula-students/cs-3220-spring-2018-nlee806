package edu.csula.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Collection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/admin/auth")
public class AuthenticationServlet extends HttpServlet {
	@Override
	public void doGet( HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO: render the authentication page HTML
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		String html;
		html = "<form>";  
		out.println(html += "Name:<input type=\"text\" name=\"name\"><br>"  
			+ "Password:<input type=\"password\" name=\"password\"><br>"  
			+ "<input type=\"submit\" value=\"login\">"
			+ "</form>"  
			+ request.getRequestDispatcher("AdminEventsServlet.jsp").include(request, response)
		); 
		//request.getRequestDispatcher(html).include(request, response);  
        //String name=request.getParameter("name");  
        //String password=request.getParameter("password");  
//        if(password.equals("admin123")){  
//        out.print("Welcome, "+name);  
//        HttpSession session=request.getSession();  
//        session.setAttribute("name",name);  
//        }  
//        else{  
//            out.print("Sorry, username or password error!");  
//            request.getRequestDispatcher("login.html").include(request, response);  
//        }  
//        out.close(); 
        
		//out.println("<h1>Hello login servlet!</h1>");
	}

	@Override
	public void doPost( HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO: handle login
		response.setContentType("text/html");  
        PrintWriter out=response.getWriter();  
        //request.getRequestDispatcher("doGet()").include(request, response);  
        doGet(request, response);
        String username=request.getParameter("username");  
        String password=request.getParameter("password");  
        UsersDAOImpl us = new UsersDAOImpl();
        us.authenticate(username, password);
 /*       
        if(username.equals("admin") && password.equals("cs3220password")){  
            out.print("Welcome, "+username);  
            HttpSession session=request.getSession();  
            session.setAttribute("username",username);  
            session.setAttribute("password", password);
//            context.setAttribute("username",username);  
//            context.setAttribute("password", password);
//            Cookie ck = new Cookie("user",username);
//            response.addCookie(ck);
//           return true;
            }  
            else{  
                out.print("Sorry, username or password error!");
                response.sendRedirect("AdminEventsServlet.jsp");
//                AuthenticationServlet tryAgain = new AuthenticationServlet();
//                tryAgain.doGet(request, response);
                //request.getRequestDispatcher("login.html").include(request, response);
//                return false;
            }  */
            out.close();  
	}

    @Override
    public void doDelete( HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO: handle logout  
        //request.getRequestDispatcher("link.html").include(request, response);
 //       doGet(request, response);
  
        HttpSession session=request.getSession(true);  
        session.invalidate(); 
        response.setContentType("text/html");  
        PrintWriter out=response.getWriter();
//        Cookie ck = new Cookie("user", "");
//        response.addCookie(ck);
        out.print("Logged out.");  
        out.close();  
    }
}
