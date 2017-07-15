<?php
include ('logger.php');
include ('lucahome.php');

/* ================== Get Informations ================= */
function GetInformations() {
	return Send ( "$LOCAL_USER:$LOCAL_PASSWORD:INFORMATION:GET:WEBSITE" );
}

/* ===================== Get Changes =================== */
function GetChanges() {
	return Send ( "$LOCAL_USER:$LOCAL_PASSWORD:CHANGE:GET:WEBSITE" );
}

/* ======================= Get Area ==================== */
function GetArea() {
	return Send ( "$LOCAL_USER:$LOCAL_PASSWORD:REMOTE:GET:AREA" );
}

/* =================== Get Temperature ================= */
function GetTemperature() {
	return Send ( "$LOCAL_USER:$LOCAL_PASSWORD:TEMPERATURE:GET:WEBSITE" );
}

/* ============== Get Temperature Graph URL ============ */
function GetTemperatureGraphUrl() {
	return Send ( "$LOCAL_USER:$LOCAL_PASSWORD:REMOTE:GET:URL:TEMPERATURE" );
}

/* ============== Get Main URL ============ */
function GetMainUrl() {
	return Send ( "$LOCAL_USER:$LOCAL_PASSWORD:REMOTE:GET:URL:MAIN" );
}

/* ============== Get Camera URL ============ */
function GetCameraUrl() {
	return Send ( "$LOCAL_USER:$LOCAL_PASSWORD:REMOTE:GET:URL:CAMERA" );
}

/* ============== Get MOTION State ============ */
function GetMotionState() {
	$motionState = Send ( "$LOCAL_USER:$LOCAL_PASSWORD:CAMERA:GET:MOTION:STATE" );
	if ($motionState == "STATE:ON") {
		return true;
	} else {
		return false;
	}
}

/* ===================== Get MapContent =================== */
function GetMapContent() {
	return Send ( "$LOCAL_USER:$LOCAL_PASSWORD:MAPCONTENT:GET:ALL:WEBSITE" );
}

/* ===================== Get Menu =================== */
function GetMenu() {
	return Send ( "$LOCAL_USER:$LOCAL_PASSWORD:MENU:GET:MENU:WEBSITE" );
}

/* ===================== Get ShoppingList =================== */
function GetShoppingList() {
	return Send ( "$LOCAL_USER:$LOCAL_PASSWORD:SHOPPINGLIST:GET:ALL:WEBSITE" );
}

?>
