<?php

function var2console($var, $name = '', $now = false) {
	if ($var === null)
		$type = 'NULL';
	else if (is_bool ( $var ))
		$type = 'BOOL';
	else if (is_string ( $var ))
		$type = 'STRING[' . strlen ( $var ) . ']';
	else if (is_int ( $var ))
		$type = 'INT';
	else if (is_float ( $var ))
		$type = 'FLOAT';
	else if (is_array ( $var ))
		$type = 'ARRAY[' . count ( $var ) . ']';
	else if (is_object ( $var ))
		$type = 'OBJECT';
	else if (is_resource ( $var ))
		$type = 'RESOURCE';
	else
		$type = '???';
	if (strlen ( $name )) {
		str2console ( "$type $name = " . var_export ( $var, true ) . ';', $now );
	} else {
		str2console ( "$type = " . var_export ( $var, true ) . ';', $now );
	}
}
function str2console($str, $now = false) {
	if ($now) {
		echo "<script type='text/javascript'>\n";
		echo "//<![CDATA[\n";
		echo "console.log(", json_encode ( $str ), ");\n";
		echo "//]]>\n";
		echo "</script>";
	} else {
		register_shutdown_function ( 'str2console', $str, true );
	}
}

?>
