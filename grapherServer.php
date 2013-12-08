<?php
	// Configuration of the mysql connection
	$host = "localhost";
	$port = 3307;
	$user = "root";
	$password = "";
	$dbname = "grapher";

	// This function is used to create the grapher database.
	function createGrapherDatabase( $host, $port, $user, $password, $dbname) {

		// Connect to mysql server
		$connection = mysqli_connect( $host . ":" . $port,
																	$user,
																	$password);

		// Create database
		$sql = "CREATE DATABASE " . $dbname . ";";

		// Execute query
		if( mysqli_query( $connection, $sql )) {
			echo "Database " . $dbname . " created successfully.";
		}
		else {
			echo "Error creating database: " . mysqli_error($connection);
		}
	}
	// This function is used to create the expression table in the grapher db.
	function createExpressionTable( $host, $port, $user, $password, $dbname ) {

		// Connect to mysql server
		$connection = mysqli_connect( $host . ":" . $port,
																	$user,
																	$password,
																	$dbname  );

		// Create expression table
		$sql = "CREATE TABLE expressions 
		        (
		        	ID INT NOT NULL AUTO_INCREMENT,
		        	PRIMARY KEY(ID),
		        	Expression TINYBLOB,
		        	Xmin INT,
		        	Xmax INT,
		        	Ymin INT,
		        	Ymax INT
		        );";

		// Execute query
		if( mysqli_query( $connection, $sql )) {
			echo "Table expressions created successfully.";
		}
		else {
			echo "Error creating table: " . mysqli_error($connection);
		}


		// Close connection
		mysqli_close($connection);

	}

	// Main processing for grapher application

	// Client request to create a new expression entry
	if( $_GET["action"] == "saveExpression") {

		// Check all required fields
		if( !isset($_GET["expression"]) ) {
			die("Expression not set.");
		}
		if( !isset($_GET["xmin"])  ) {
			die("Xmin not set.");
		}
		if( !isset($_GET["xmax"])  ) {
			die("Xmax not set.");
		}
		if( !isset($_GET["ymin"])  ) {
			die("Ymin not set.");
		}
		if( !isset($_GET["ymax"])  ) {
			die("Ymax not set.");
		}

		// Collect variables from the URL
		$expression = $_GET["expression"];


		$xmin = $_GET["xmin"] ;
		$xmax = $_GET["xmax"] ;
		$ymin = $_GET["ymin"] ;
		$ymax = $_GET["ymax"] ;

		// Connect to database
		$connection = mysqli_connect( $host . ":" . $port,
																	$user,
																	$password,
																	$dbname  );
		// add connect check

		// Build query
		$sql = "INSERT INTO expressions (Expression, Xmin, Xmax, Ymin, Ymax) 
						VALUES( '" . $expression . "', " . $xmin . ", " . $xmax . ", "
							      . $ymin . ", " . $ymax . ")";

		// Execute query
		if( mysqli_query( $connection, $sql )) {
			
			echo "OK";
																		
		}
		else {
			echo "Error saving expression: " . mysqli_error($connection);
		}

		// Close connection
		mysqli_close($connection);

	}
	// This gets the information for a specific expression in the database
	elseif( $_GET["action"] == "loadExpression" ) {

		if( isset( $_GET["id"]) ) {
		  $id = $_GET["id"];
		}
		else {
			die("No ID set.");
		}
		// Connect to database
		$connection = mysqli_connect( $host . ":" . $port,
																	$user,
																	$password,
																	$dbname  );
		// add connect check

		// Query database
		$sql = "SELECT * FROM expressions WHERE ID=" . $id;

		// Get the result
		$result = mysqli_query( $connection, $sql);
		while( $row = mysqli_fetch_array( $result ) ) {

			echo  $row["Expression"] . " "
					 .$row["Xmin"] . " "
					 .$row["Xmax"] . " "
					 .$row["Ymin"] . " "
					 .$row["Ymax"];
		}
		// Close connection
		mysqli_close($connection);
	}

	// This loads the expressions from the database and creates a select html tag
	// with the data
	elseif( $_GET["action"] == "loadExpressions" ) {
		
		// Connect to database
		$connection = mysqli_connect( $host . ":" . $port,
																	$user,
																	$password,
																	$dbname  );
		// add connect check

		// Query database
		$sql = "SELECT * FROM expressions";

		// Build html for selector
		$result = mysqli_query( $connection, $sql);
		echo "Load expression: <select id='expressions' tabindex='6' onchange='updateFields()'>";
		while( $row = mysqli_fetch_array( $result ) ) {

			echo "<option value='" . $row['ID'] . "'>" . $row['Expression'] 
														 . " Domain: [" . $row['Xmin'] . "," 
														 . $row['Xmax'] . "]"
														 . " Range: [" . $row['Ymin'] . "," 
														 . $row['Ymax'] . "]"
														 . "</option>";


		}
		echo "</select>";

		// Close connection
		mysqli_close($connection);
	}
	// Invalid request
	else {
		die();
	}
?>