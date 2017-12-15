<?php

function GetMapTypeBackgroundColor($type) {
	switch ($type) {
	    case "WirelessSocket":
	        return "blue";
	    case "LAN":
	        return "orange";
	    case "MediaServer":
	        return "lightgreen";
	    case "RaspberryPi":
	        return "darkyellow";
	    case "NAS":
	        return "grey";
	    case "LightSwitch":
	        return "red";
	    case "Temperature":
	        return "brown";
	    case "PuckJS":
	        return "darkgreen";
	    case "Menu":
	        return "lightyellow";
	    case "ShoppingList":
	        return "purple";
	    case "Camera":
	        return "black";
    	default:
					return "white";
	}
}

?>
