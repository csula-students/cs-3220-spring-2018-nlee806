package edu.csula.storage.mysql;

import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import java.sql.*;

import edu.csula.storage.EventsDAO;
import edu.csula.storage.Database;
import edu.csula.models.Event;

public class EventsDAOImpl implements EventsDAO {
	private final Database context;

	// TODO: fill the Strings with the SQL queries as "prepated statements" and
	//       use these queries variable accordingly in the method below
	protected static final String getAllQuery = "SELECT * FROM events;";
	protected static final String getByIdQuery = "SELECT * FROM events WHERE id = ?;";
	protected static final String setQuery = "UPDATE events SET id = ?, name = ?, description = ?, triggerAt = ? WHERE id = ?;";
	protected static final String addQuery = "INSERT INTO events(id,name,description,triggerAt) VALUES (?,?,?,?); ";
	protected static final String removeQuery = "DELETE FROM events WHERE id = ?;";

	public EventsDAOImpl(Database context) {
		this.context = context;
	}

	@Override
	public List<Event> getAll() {
		// TODO: get all events from jdbc
	List<Event> lall = new ArrayList<>();
	try(Connection c = context.getConnection(); Statement pstmt1 = c.createStatement()){
	ResultSet rs=pstmt1.executeQuery(getAllQuery); 
	while(rs.next()){
		Event es = new Event((rs.getInt(1)),(rs.getString(2)),(rs.getString(3)),(rs.getInt(4)));
		es.setId(rs.getInt(1));
		es.setName(rs.getString(2));
		es.setDescription(rs.getString(3));
		es.setTriggerAt(rs.getInt(4));
		lall.add(es);
		}  
	c.close();
	}
	catch(SQLException | NullPointerException e){
		e.printStackTrace();
		return new ArrayList<Event>();
	}
	finally{
		
	}
	return lall;
	}

	@Override
	public Optional<Event> getById(int id) {
		// TODO: get specific event by id
	Event es = new Event(0,null,null,0);
	try(Connection c = context.getConnection(); PreparedStatement pstmt2 = c.prepareStatement(getByIdQuery)){
	pstmt2.setInt(1, id);
//	pstmt2.executeUpdate();
	ResultSet rs=pstmt2.executeQuery();  
	while(rs.next()){  
//		Event es = new Event((rs.getInt("id")),(rs.getString("name")),(rs.getString("description")),(rs.getInt("triggerAt")));
		es.setId(rs.getInt(1));
		es.setName(rs.getString(2));
		es.setDescription(rs.getString(3));
		es.setTriggerAt(rs.getInt(4));
		}  
	c.close();
	}
	catch(SQLException | NullPointerException e){
		e.printStackTrace();
		return Optional.empty();
		}
	finally{
		
	}
	return Optional.of(es);
	}

	@Override
	public void set(int id, Event event) {
		// TODO: update specific event by id
	try(Connection c = context.getConnection(); PreparedStatement pstmt3 = c.prepareStatement(setQuery)){
	pstmt3.setInt(1,event.getId());
	pstmt3.setString(2,event.getName());
	pstmt3.setString(3,event.getDescription());
	pstmt3.setInt(4,event.getTriggerAt());
	pstmt3.setInt(5,id);
	pstmt3.executeUpdate();
/*	ResultSet rs=pstmt3.executeQuery();  
	while(rs.next()){  
		Event es = new Event((rs.getInt("id")),(rs.getString("name")),(rs.getString("description")),(rs.getInt("triggerAt")));
		es.setId(rs.getInt(1));
		es.setName(rs.getString(2));
		es.setDescription(rs.getString(3));
		es.setTriggerAt(rs.getInt(4));
		}*/  
	c.close();
	}
	catch(SQLException | NullPointerException e){
		e.printStackTrace();
	}
	finally{
		
	}
	}

	@Override
	public void add(Event event) {
		// TODO: implement jdbc logic to add a new event
	try(Connection c = context.getConnection(); PreparedStatement pstmt4 = c.prepareStatement(addQuery)){
	pstmt4.setInt(1, event.getId());
	pstmt4.setString(2, event.getName());
	pstmt4.setString(3, event.getDescription());
	pstmt4.setInt(4, event.getTriggerAt());
	pstmt4.executeUpdate();
	c.close();
	}
	catch(SQLException | NullPointerException e){
		e.printStackTrace();
	}
	finally{
		
	}
	}

	@Override
	public void remove(int id) {
		// TODO: implement jdbc logic to remove event by id
	try(Connection c = context.getConnection(); PreparedStatement pstmt5 = c.prepareStatement(removeQuery)){
	pstmt5.setInt(1, id);
	pstmt5.executeUpdate();
	c.close();
	}
	catch(SQLException | NullPointerException e){
		e.printStackTrace();
	}
	finally{
		
	}
	}
}
