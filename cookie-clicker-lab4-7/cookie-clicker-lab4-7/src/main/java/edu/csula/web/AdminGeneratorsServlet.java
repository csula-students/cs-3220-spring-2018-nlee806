package edu.csula.web;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/admin/generators")
public class AdminGeneratorsServlet extends HttpServlet {
	@Override
	public void doGet( HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO: render the generators page HTML
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		String html;
		html = "<form action="LoginServlet" method="post">";  
		out.println(html += "Name:<input type="text" name="name"><br>"  
			+ "Password:<input type="password" name="password"><br>"  
			+ "<input type="submit" value="login">"
			+ "</form>"  
			+ request.getRequestDispatcher("generators.html").include(request, response)
		); 
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
		
		//out.println("<h1>Hello generators servlet!</h1>");
	}


	@Override
	public void doPost( HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO: handle upsert transaction
//		UsersDAOImpl check = new UsersDAOImpl();
//		if(){
//			response.sendRedirect("");  
//		}
		 try{  
			    response.setContentType("text/html");  
			    PrintWriter out = response.getWriter();  
			          
			    String n=request.getParameter("username");  
			    out.print("Welcome "+n);  
			  
			    Cookie ck=new Cookie("username",n);//creating cookie object  
			    response.addCookie(ck);//adding cookie in the response  
			  
//			    //creating submit button  
//			    out.print("<form action='servlet2'>");  
//			    out.print("<input type='submit' value='go'>");  
//			    out.print("</form>");  
			    Cookie ck[]=request.getCookies();  
			    out.print("Hello "+ck[0].getValue());  
			    
			    out.close();  
			  
			    }catch(Exception e){System.out.println(e);}  
			  }  		
}
