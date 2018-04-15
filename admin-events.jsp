<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>CS 3220 Practice Lab</title>
<style>
button {
	color: #fff;
	background-color: #FFFFFF;
	font-size: 16px;
	padding: 0.5em 1em;
}
table {
	border: 1px solid red;
}
tr {
	background-color: #ccc;
}
input {
	font-size: 16px;
	padding: 0.5em 1em;
}
ul{
	list-style-type:none;
	margin:0;
	padding:0;
}
li{
	border-right: 1px solid #000000;
	display:inline;

}
</style>
</head>
<body>
	<h1>Incremental Game Framework</h1>
	<ul>
		<li><a href="<c: url value='admin-info.html'/>">Game Information</a></li>
		<li><a href="<c: url value='admin-events.html'/>">Events</a></li>
		<li><a href="<c: url value='admin-generators.html'/>">Generators</a></li>
	</ul>
	
	<h3>Events</h3>
	<form action="/action_page.php">
		Event Description<br>
		<input type="text" name="eventdescription" value="${"Lorem..."}">
		<br>
		Trigger At<br>
		<input type="text" name="triggerat" value="${"10"}">
		<br>
		<input type="submit" value="${"{Add|Edit}"}">
	</form>
</body>
</html>