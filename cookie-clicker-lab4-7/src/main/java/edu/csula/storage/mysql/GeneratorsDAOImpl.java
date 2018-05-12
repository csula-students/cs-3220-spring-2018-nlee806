package edu.csula.storage.mysql;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import edu.csula.storage.GeneratorsDAO;
import edu.csula.storage.Database;
import edu.csula.models.Generator;

public class GeneratorsDAOImpl implements GeneratorsDAO {
	private final Database context;

	// TODO: fill the Strings with the SQL queries as "prepated statements" and
	//       use these queries variable accordingly in the method below
	protected static final String getAllQuery = "SELECT * FROM generators;";
	protected static final String getByIdQuery = "SELECT * FROM generators WHERE id = ?;";
	protected static final String setQuery = "UPDATE generators SET id = ?, name = ?, description = ?, rate = ?, baseCost = ?, unlockAt = ? WHERE id = ?;";
	//UPDATE generators SET id = ?, name = ?, description = ?, triggerAt = ? WHERE id = ?;
	protected static final String addQuery = "INSERT INTO generators(id,name,description,rate, baseCost, unlockAt) VALUES (?,?,?,?,?,?); ";
	//INSERT INTO generators(id,name,description,triggerAt) VALUES (?,?,?,?); 
	protected static final String removeQuery = "DELETE FROM generators WHERE id = ?;";

	public GeneratorsDAOImpl(Database context) {
		this.context = context;
	}

	@Override
	public List<Generator> getAll() {
		// TODO: get all generators from jdbc
		List<Generator> lall = new ArrayList<>();
		try(Connection c = context.getConnection(); Statement pstmt1 = c.createStatement()){
		ResultSet rs=pstmt1.executeQuery(getAllQuery); 
		while(rs.next()){
			Generator es = new Generator((rs.getInt(1)),(rs.getString(2)),(rs.getString(3)),(rs.getInt(4)),(rs.getInt(5)),(rs.getInt(6)));
			es.setId(rs.getInt(1));
			es.setName(rs.getString(2));
			es.setDescription(rs.getString(3));
			es.setRate(rs.getInt(4));
			es.setBaseCost(rs.getInt(5));
			es.setUnlockAt(rs.getInt(6));
			lall.add(es);
			}  
		c.close();
		}
		catch(SQLException | NullPointerException e){
			e.printStackTrace();
			return new ArrayList<Generator>();
		}
		finally{
		}
		return lall;
	}

	@Override
	public Optional<Generator> getById(int id) {
		// TODO: get specific generator by id
		Generator es = new Generator(0,null,null,0,0,0);
		try(Connection c = context.getConnection(); PreparedStatement pstmt2 = c.prepareStatement(getByIdQuery)){
		pstmt2.setInt(1, id);
//		pstmt2.executeUpdate();
		ResultSet rs=pstmt2.executeQuery();  
		while(rs.next()){  
//			Event es = new Event((rs.getInt("id")),(rs.getString("name")),(rs.getString("description")),(rs.getInt("triggerAt")));
			es.setId(rs.getInt(1));
			es.setName(rs.getString(2));
			es.setDescription(rs.getString(3));
			es.setRate(rs.getInt(4));
			es.setBaseCost(rs.getInt(5));
			es.setUnlockAt(rs.getInt(6));
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
	public void set(int id, Generator generator) {
		// TODO: update specific generator by id
		try(Connection c = context.getConnection(); PreparedStatement pstmt3 = c.prepareStatement(setQuery)){
			pstmt3.setInt(1,generator.getId());
			pstmt3.setString(2,generator.getName());
			pstmt3.setString(3,generator.getDescription());
			pstmt3.setInt(4,generator.getRate());
			pstmt3.setInt(5,generator.getBaseCost());
			pstmt3.setInt(6,generator.getUnlockAt());
			pstmt3.setInt(7,id);
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
	public void add(Generator generator) {
		// TODO: implement jdbc logic to add a new generator
		try(Connection c = context.getConnection(); PreparedStatement pstmt4 = c.prepareStatement(addQuery)){
			pstmt4.setInt(1, generator.getId());
			pstmt4.setString(2, generator.getName());
			pstmt4.setString(3, generator.getDescription());
			pstmt4.setInt(4, generator.getRate());
			pstmt4.setInt(5, generator.getBaseCost());
			pstmt4.setInt(6, generator.getUnlockAt());
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
		// TODO: implement jdbc logic to remove generator by id
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
