<?php

function ParseInformations($data) {
	$values = GetValues ( $data, 'information:' );
	$informations = array ();
	for($i = 0; $i < count ( $values ); $i ++) {
		$informations [] = array (
				'key' => trim ( $values [$i] [1] ),
				'value' => trim ( $values [$i] [2] ) 
		);
	}
	return $informations;
}

function ParseChanges($data) {
	$values = GetValues ( $data, 'change:' );
	$changes = array ();
	for($i = 0; $i < count ( $values ); $i ++) {
		$changes [] = array (
				'type' => trim ( $values [$i] [1] ),
				'hour' => trim ( $values [$i] [2] ),
				'minute' => trim ( $values [$i] [3] ),
				'day' => trim ( $values [$i] [4] ),
				'month' => trim ( $values [$i] [5] ),
				'year' => trim ( $values [$i] [6] ),
				'user' => trim ( $values [$i] [7] ) 
		);
	}
	return $changes;
}

function ParseMapContent($data) {
	$values = GetValues ( $data, 'mapcontent:' );
	$mapContent = array ();
	for($i = 0; $i < count ( $values ); $i ++) {
		$positionString = trim ( $values [$i] [2] );
		$position [] = explode ( '|', $positionString );

		$scheduleString = trim ( $values [$i] [4] );
		$schedules [] = explode ( '|', $scheduleString );

		$socketString = trim ( $values [$i] [5] );
		$sockets [] = explode ( '|', $socketString );

		$mapContent [] = array (
				'id' => trim ( $values [$i] [1] ),
				'position' => $position,
				'type' => trim ( $values [$i] [3] ),
				'schedules' => $schedules,
				'sockets' => $sockets,
				'temperatureArea' => trim ( $values [$i] [6] ),
				'visibility' => trim ( $values [$i] [7] )
		);
	}
	return $mapContent;
}

function ParseMenu($data) {
	$values = GetValues ( $data, 'menu:' );
	$menus = array ();
	for($i = 0; $i < count ( $values ); $i ++) {
		$menus [] = array (
				'weekday' => trim ( $values [$i] [1] ),
				'day' => trim ( $values [$i] [2] ),
				'month' => trim ( $values [$i] [3] ),
				'year' => trim ( $values [$i] [4] ),
				'title' => trim ( $values [$i] [5] ),
				'description' => trim ( $values [$i] [6] )
		);
	}
	return $menus;
}

function ParseShoppingList($data) {
	$values = GetValues ( $data, 'shopping_entry:' );
	$menus = array ();
	for($i = 0; $i < count ( $values ); $i ++) {
		$menus [] = array (
				'name' => trim ( $values [$i] [2] ),
				'group' => trim ( $values [$i] [3] ),
				'quantity' => trim ( $values [$i] [4] )
		);
	}
	return $menus;
}

?>
