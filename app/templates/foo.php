<?php
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);


	class Option {
		var $text = null;
		var $val = null;
		var $filterEnable = null;
		var $children = [];
	}

	class Attributes {
		var $name = null;
		var $options = [];
	}

	class OutputItem {
		var $type = null;
		var $id = null;
		var $attributes = null;
	}

	class Output {
		var $data = [];
	}


	$server = 'localhost';
	$user = 'data_chart_ro';
	$pass = 'manofsteel';
	$db = 'data_chart';


	// $item = new Option;
	// $item->text = "text";
	// $item->children[] = "c1";
	// $item->children[] = "c2";

	// $select = new Select;
	// $select->name = "name";
	// $select->options[] = $item;

	// $outputItem = new OutputItem;
	// $outputItem->attributes = $select;

	// $output = new Output;
	// $output->data[] = $outputItem;


	// echo $output->data[0]->attributes->options[0]->text;
	// echo "<br><br>";


	// Create connection
	$conn = new mysqli($server, $user, $pass, $db);
	// Check connection
	if ($conn->connect_error) {
	  die("Connection failed: " . $conn->connect_error);
	} 


	$sql = '
		select name_id, option_text, option_value
		from param_dropdown_option
		order by name_id asc, order_num asc
	';


	$result = $conn->query($sql);


	if ($result->num_rows > 0) {
		$output = new Output;
		$type = 'fieldChooseSelects';
		$id = 1;	//Initialize.
		$prev_name_id = null;	//Initialize.

		while($row = $result->fetch_assoc()) {
			$name_id = $row['name_id'];
			$option_text = $row['option_text'];
			$option_value = $row['option_value'];

			if ($name_id !== $prev_name_id) {
				if ($prev_name_id) {
					$id++;
					$output->data[] = $outputItem;
				}

				$outputItem = new OutputItem;
				$outputItem->type = $type;
				$outputItem->id = $id;
				$outputItem->attributes = new Attributes;
				$outputItem->attributes->name = $name_id;
				// echo $name_id . " " . $id . "<br>";
			}

			$option = new Option;
			$option->text = $option_text;
			$option->value = $option_value;
			$option->filterEnable = true;

			$outputItem->attributes->options[] = $option;

			$prev_name_id = $name_id;
		}


		// echo $output->data[0]->type . "<br>";

		// echo "<pre>";
		// print_r($output);
		// echo "</pre>";
	}


	if ($output) {
		// echo "<pre>";
		// print_r($output);
		// echo "</pre>";

		echo json_encode($output);
	}


	$conn->close();

?>