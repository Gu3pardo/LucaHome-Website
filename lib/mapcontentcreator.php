<?php

function GetMapTypeTextColor($type) {
	switch ($type) {
	    case "WirelessSocket":
	        return "white";
	    case "LAN":
	        return "black";
	    case "MediaServer":
	        return "black";
	    case "RaspberryPi":
	        return "black";
	    case "NAS":
	        return "white";
	    case "LightSwitch":
	        return "black";
	    case "Temperature":
	        return "black";
	    case "PuckJS":
	        return "white";
	    case "Menu":
	        return "black";
	    case "ShoppingList":
	        return "white";
	    case "Camera":
	        return "white";
	    case "Meter":
	        return "white";
    	default:
			return "black";
	}
}

function GetMapTypeBackgroundColor($type) {
	switch ($type) {
	    case "WirelessSocket":
	        return "red";
	    case "LAN":
	        return "orange";
	    case "MediaServer":
	        return "darkslateblue";
	    case "RaspberryPi":
	        return "darkyellow";
	    case "NAS":
	        return "grey";
	    case "LightSwitch":
	        return "lightblue";
	    case "Temperature":
	        return "lightgreen";
	    case "PuckJS":
	        return "darkgreen";
	    case "Menu":
	        return "yellow";
	    case "ShoppingList":
	        return "purple";
	    case "Camera":
	        return "black";
	    case "Meter":
	        return "darkblue";
    	default:
			return "lightseagreen";
	}
}

?>
