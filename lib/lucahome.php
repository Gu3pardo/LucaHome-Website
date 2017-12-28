<?php

define ( 'LUCAHOMEPORT', 6677 );

/*Definition for error answers*/
define ( 'AUTHENTIFICATION_ERROR_NR_16', "Error 16:Parameter not found for authentification");
define ( 'BIRTHDAY_ERROR_NR_35', "Error 35:Parameter not found for birthday");
define ( 'REMOTE_ERROR_NR_121', "Error 121:Parameter not found for remote");
define ( 'TEMPERATURE_ERROR_NR_135', "Error 135:Parameter not found for temperature");
define ( 'MAPCONTENT_ERROR_NR_145', "Error 145:Parameter not found for mapcontent");
define ( 'SHOPPING_ERROR_NR_155', "Error 155:Parameter not found for shopping entry");
define ( 'MENU_ERROR_NR_164', "Error 164:Parameter not found for menu");
define ( 'CAMERA_ERROR_NR_173', "Error 173:Parameter not found for camera");
define ( 'METER_DATA_ERROR_NR_197', "Error 197:Parameter not found for meterdata");
define ( 'COIN_ERROR_NR_206', "Error 206:Parameter not found for coin");
define ( 'MONEY_METER_DATA_ERROR_NR_217', "Error 217:Parameter not found for moneymeterdata");
define ( 'MOVIE_ERROR_NR_400', "Error 400:Parameter not found for movie");

$user = Get ( 'user' );
$password = Get ( 'password' );
$login = "$user:$password";

$action = Get ( 'action' );

switch ($action) {

	/* ----------------------- All --------------------- */
	case 'reloadall':
		echo Send ( "$login:ALL:RELOAD:ALL" );
		break;

	/* ------------------- Birthday -------------------- */
	case 'getbirthdays' :
		echo Send ( "$login:BIRTHDAY:GET:ALL" );
		break;
	case 'addbirthday' :
		$id = Get ( 'id' );
		$name = Get ( 'name' );
		$day = Get ( 'day' );
		$month = Get ( 'month' );
		$year = Get ( 'year' );
		$group = Get ( 'group' );
		$remindme = Get ( 'remindme' );
		if ($id != '' && $name != '' && $day != '' && $month != '' && $year != '' && $group != '' && $remindme != '') {
			echo Send ( "$login:BIRTHDAY:ADD:$id:$name:$day:$month:$year:$group:$remindme" );
		} else {
			echo BIRTHDAY_ERROR_NR_35;
		}
		break;
	case 'updatebirthday' :
		$id = Get ( 'id' );
		$name = Get ( 'name' );
		$day = Get ( 'day' );
		$month = Get ( 'month' );
		$year = Get ( 'year' );
		$group = Get ( 'group' );
		$remindme = Get ( 'remindme' );
		if ($id != '' && $name != '' && $day != '' && $month != '' && $year != '' && $group != '' && $remindme != '') {
			echo Send ( "$login:BIRTHDAY:UPDATE:$id:$name:$day:$month:$year:$group:$remindme" );
		} else {
			echo BIRTHDAY_ERROR_NR_35;
		}
		break;
	case 'deletebirthday' :
		$id = Get ( 'id' );
		if ($id != '') {
			echo Send ( "$login:BIRTHDAY:DELETE:$id" );
		} else {
			echo BIRTHDAY_ERROR_NR_35;
		}
		break;
	case 'setcontroltaskbirthday' :
		$state = Get ( 'state' );
		if ($state != '') {
			echo Send ( "$login:BIRTHDAY:SETCONTROLTASK:$state" );
		} else {
			echo BIRTHDAY_ERROR_NR_35;
		}
		break;

	/* -------------------- Camera -------------------- */
	case 'startmotion' :
		echo Send ( "$login:CAMERA:START:MOTION" );
		break;
	case 'stopmotion' :
		echo Send ( "$login:CAMERA:STOP:MOTION" );
		break;
	case 'getmotionstate' :
		echo Send ( "$login:CAMERA:GET:MOTION:STATE" );
		break;
	case 'getmotioncontrol' :
		echo Send ( "$login:CAMERA:GET:MOTION:CONTROL" );
		break;
	case 'getmotiondata' :
		echo Send ( "$login:CAMERA:GET:MOTION:DATA" );
		break;
	case 'getcameraurl' :
		echo Send ( "$login:REMOTE:GET:URL:CAMERA" );
		break;
	case 'setcontroltaskcamera' :
		$state = Get ( 'state' );
		if ($state != '') {
			echo Send ( "$login:CAMERA:SETCONTROLTASK:$state" );
		} else {
			echo CAMERA_ERROR_NR_173;
		}
		break;

	/* -------------------- Changes -------------------- */
	case 'getchanges' :
		echo Send ( "$login:CHANGE:GET:ALL" );
		break;

	/* --------------------- Coins --------------------- */
	case 'getcoinsall' :
		echo Send ( "$login:COINS:GET:ALL" );
		break;
	case 'getcoinsuser' :
		echo Send ( "$login:COINS:GET:FOR_USER" );
		break;
	case 'addcoin' :
		$id = Get ( 'id' );
		$username = Get ( 'username' );
		$type = Get ( 'type' );
		$amount = Get ( 'amount' );
		if ($id != '' && $username != '' && $type != '' && $amount != '') {
			echo Send ( "$login:COINS:ADD:$id:$username:$type:$amount" );
		} else {
			echo COIN_ERROR_NR_206;
		}
		break;
	case 'updatecoin' :
		$id = Get ( 'id' );
		$username = Get ( 'username' );
		$type = Get ( 'type' );
		$amount = Get ( 'amount' );
		if ($id != '' && $username != '' && $type != '' && $amount != '') {
			echo Send ( "$login:COINS:UPDATE:$id:$username:$type:$amount" );
		} else {
			echo COIN_ERROR_NR_206;
		}
		break;
	case 'deletecoin' :
		$id = Get ( 'id' );
		if ($id != '') {
			echo Send ( "$login:COIN:DELETE:$id" );
		} else {
			echo COIN_ERROR_NR_206;
		}
		break;

	/* ---------------------- Gpio --------------------- */
	case 'getgpios' :
		echo Send ( "$login:REMOTE:GET:GPIO" );
		break;
	case 'addgpio' :
		$typeid = Get ( 'typeid' );
		$name = Get ( 'name' );
		$gpio = Get ( 'gpio' );
		if ($typeid != '' && $name != '' && $gpio != '') {
			echo Send ( "$login:REMOTE:ADD:GPIO:$typeid:$name:$gpio:0" );
		} else {
			echo REMOTE_ERROR_NR_121;
		}
		break;
	case 'updategpio' :
		$typeid = Get ( 'typeid' );
		$name = Get ( 'name' );
		$gpio = Get ( 'gpio' );
		if ($typeid != '' && $name != '' && $gpio != '') {
			echo Send ( "$login:REMOTE:UPDATE:GPIO:$typeid:$name:$gpio:0" );
		} else {
			echo REMOTE_ERROR_NR_121;
		}
		break;
	case 'deletegpio' :
		$typeid = Get ( 'typeid' );
		if ($typeid != '') {
			echo Send ( "$login:REMOTE:DELETE:GPIO:$typeid" );
		} else {
			echo REMOTE_ERROR_NR_121;
		}
		break;
	case 'setgpio' :
		$gpio = Get ( 'gpio' );
		$state = Get ( 'state' );
		if ($gpio != '' && $state != '') {
			echo Send ( "$login:REMOTE:SET:GPIO:$gpio:$state" );
		} else {
			echo REMOTE_ERROR_NR_121;
		}
		break;
	case 'activateallgpios' :
		echo Send ( "$login:REMOTE:SET:GPIO:ALL:1" );
		break;
	case 'deactivateallgpios' :
		echo Send ( "$login:REMOTE:SET:GPIO:ALL:0" );
		break;

	/* ------------------ Informations ------------------ */
	case 'getinformations' :
		echo Send ( "$login:INFORMATION:GET:ALL" );
		break;

	/* ------------------- MapContent ------------------- */
	case 'getmapcontents' :
		echo Send ( "$login:MAPCONTENT:GET:ALL" );
		break;
	case 'addmapcontent' :
		$id = Get ( 'id' );
		$type = Get ( 'type' );
		$typeId = Get ( 'typeid' );
		$position = Get ( 'position' );
		$name = Get ( 'name' );
		$shortName = Get ( 'shortname' );
		$area = Get ( 'area' );
		$visibility = Get ( 'visibility' );
		if ($id != '' && $type != ''&& $typeId != '' && $position != '' && $name != '' && $shortName != '' && $area != '' && $visibility != '') {
			echo Send ( "$login:MAPCONTENT:ADD:$id:$type:$typeId:$position:$name:$shortName:$area:$visibility" );
		} else {
			echo MAPCONTENT_ERROR_NR_145;
		}
		break;
	case 'updatemapcontent' :
		$id = Get ( 'id' );
		$type = Get ( 'type' );
		$typeId = Get ( 'typeid' );
		$position = Get ( 'position' );
		$name = Get ( 'name' );
		$shortName = Get ( 'shortname' );
		$area = Get ( 'area' );
		$visibility = Get ( 'visibility' );
		if ($id != '' && $type != ''&& $typeId != '' && $position != '' && $name != '' && $shortName != '' && $area != '' && $visibility != '') {
			echo Send ( "$login:MAPCONTENT:UPDATE:$id:$type:$typeId:$position:$name:$shortName:$area:$visibility" );
		} else {
			echo MAPCONTENT_ERROR_NR_145;
		}
		break;
	case 'deletemapcontent' :
		$id = Get ( 'id' );
		if ($id != '') {
			echo Send ( "$login:MAPCONTENT:DELETE:$id" );
		} else {
			echo MAPCONTENT_ERROR_NR_145;
		}
		break;

	/* ------------------- Menu ------------------- */
	case 'getmenu' :
		echo Send ( "$login:MENU:GET:MENU" );
		break;
	case 'updatemenu' :
		$weekday = Get ( 'weekday' );
		$day = Get ( 'day' );
		$month = Get ( 'month' );
		$year = Get ( 'year' );
		$title = Get ( 'title' );
		$description = Get ( 'description' );
		if ($weekday != '' && $day != '' && $month != '' && $year != '' && $title != '' && $description != '') {
			echo Send ( "$login:MENU:UPDATE:MENU:$weekday:$day:$month:$year:$title:$description" );
		} else {
			echo MENU_ERROR_NR_164;
		}
		break;
	case 'clearmenu' :
		$weekday = Get ( 'weekday' );
		if ($weekday != '') {
			echo Send ( "$login:MENU:CLEAR:$weekday" );
		} else {
			echo MENU_ERROR_NR_164;
		}
		break;
	case 'getlistedmenu' :
		echo Send ( "$login:MENU:GET:LISTEDMENU" );
		break;
	case 'addlistedmenu' :
		$id = Get ( 'id' );
		$title = Get ( 'title' );
		$description = Get ( 'description' );
		$rating = Get ( 'rating' );
		if ($id!= '' && $title!= '' && $description!= '' && $rating!= '') {
			echo Send ( "$login:MENU:ADD:LISTEDMENU:$id:$title:$description:$rating:0" );
		} else {
			echo MENU_ERROR_NR_164;
		}
		break;
	case 'updatelistedmenu' :
		$id = Get ( 'id' );
		$title = Get ( 'title' );
		$description = Get ( 'description' );
		$rating = Get ( 'rating' );
		$usecounter = Get ( 'usecounter' );
		if ($id!= '' && $title!= '' && $description!= '' && $rating!= '' && $usecounter!= '') {
			echo Send ( "$login:MENU:UPDATE:LISTEDMENU:$id:$title:$description:$rating:$usecounter" );
		} else {
			echo MENU_ERROR_NR_164;
		}
		break;
	case 'deletelistedmenu' :
		$id = Get ( 'id' );
		if ($id!= '') {
			echo Send ( "$login:MENU:DELETE:LISTEDMENU:$id" );
		} else {
			echo MENU_ERROR_NR_164;
		}
		break;
		
	/* ------------------- MeterData ------------------- */
	case 'getmeterdata' :
		echo Send ( "$login:METERDATA:GET:ALL" );
		break;
	case 'addmeterdata' :
		$id = Get ( 'id' );
		$type = Get ( 'type' );
		$typeid = Get ( 'typeid' );
		$day = Get ( 'day' );
		$month = Get ( 'month' );
		$year = Get ( 'year' );
		$hour = Get ( 'hour' );
		$minute = Get ( 'minute' );
		$meterid = Get ( 'meterid' );
		$area = Get ( 'area' );
		$value = Get ( 'value' );
		$imagename = Get ( 'imagename' );
		if ($id!= '' && $type!= '' && $typeid!= '' && $day!= '' && $month!= '' && $year!= '' && $hour!= '' && $minute!= '' && $meterid!= '' && $area!= '' && $value!= '' && $imagename!= '') {
			echo Send ( "$login:METERDATA:ADD:$id:$type:$typeid:$day:$month:$year:$hour:$minute:$meterid:$area:$value:$imagename" );
		} else {
			echo METER_DATA_ERROR_NR_197;
		}
		break;
	case 'updatemeterdata' :
		$id = Get ( 'id' );
		$type = Get ( 'type' );
		$typeid = Get ( 'typeid' );
		$day = Get ( 'day' );
		$month = Get ( 'month' );
		$year = Get ( 'year' );
		$hour = Get ( 'hour' );
		$minute = Get ( 'minute' );
		$meterid = Get ( 'meterid' );
		$area = Get ( 'area' );
		$value = Get ( 'value' );
		$imagename = Get ( 'imagename' );
		if ($id!= '' && $type!= '' && $typeid!= '' && $day!= '' && $month!= '' && $year!= '' && $hour!= '' && $minute!= '' && $meterid!= '' && $area!= '' && $value!= '' && $imagename!= '') {
			echo Send ( "$login:METERDATA:UPDATE:$id:$type:$typeid:$day:$month:$year:$hour:$minute:$meterid:$area:$value:$imagename" );
		} else {
			echo METER_DATA_ERROR_NR_197;
		}
		break;
	case 'deletemeterdata' :
		$id = Get ( 'id' );
		if ($id!= '') {
			echo Send ( "$login:METERDATA:DELETE:$id" );
		} else {
			echo METER_DATA_ERROR_NR_197;
		}
		break;

	/* ------------------- MoneyMeterData ------------------- */
	case 'getmoneymeterdataall' :
		echo Send ( "$login:MONEYMETERDATA:GET:ALL" );
		break;
	case 'getmoneymeterdatauser' :
		echo Send ( "$login:MONEYMETERDATA:GET:USER" );
		break;
	case 'addmoneymeterdata' :
		$id = Get ( 'id' );
		$typeid = Get ( 'typeid' );
		$bank = Get ( 'bank' );
		$plan = Get ( 'plan' );
		$amount = Get ( 'amount' );
		$unit = Get ( 'unit' );
		$day = Get ( 'day' );
		$month = Get ( 'month' );
		$year = Get ( 'year' );
		$username = Get ( 'username' );
		if ($id != '' && $typeid != '' && $bank != '' && $plan != '' && $amount != '' && $unit != '' && $day != '' && $month != '' && $year != '' && $username != '') {
			echo Send ( "$login:MONEYMETERDATA:ADD:$id:$typeid:$bank:$plan:$amount:$unit:$day:$month:$year:$username" );
		} else {
			echo MONEY_METER_DATA_ERROR_NR_217;
		}
		break;
	case 'updatemoneymeterdata' :
		$id = Get ( 'id' );
		$typeid = Get ( 'typeid' );
		$bank = Get ( 'bank' );
		$plan = Get ( 'plan' );
		$amount = Get ( 'amount' );
		$unit = Get ( 'unit' );
		$day = Get ( 'day' );
		$month = Get ( 'month' );
		$year = Get ( 'year' );
		$username = Get ( 'username' );
		if ($id != '' && $typeid != '' && $bank != '' && $plan != '' && $amount != '' && $unit != '' && $day != '' && $month != '' && $year != '' && $username != '') {
			echo Send ( "$login:MONEYMETERDATA:UPDATE:$id:$typeid:$bank:$plan:$amount:$unit:$day:$month:$year:$username" );
		} else {
			echo MONEY_METER_DATA_ERROR_NR_217;
		}
		break;
	case 'deletemoneymeterdata' :
		$id = Get ( 'id' );
		if ($id!= '') {
			echo Send ( "$login:MONEYMETERDATA:DELETE:$id" );
		} else {
			echo MONEY_METER_DATA_ERROR_NR_217;
		}
		break;

	/* --------------------- Movie --------------------- */
	case 'getmovies' :
		$movieCount = Send ( "$login:MOVIE:GET:COUNT" );
		$requestSize = 25;

		if (strpos ( $movieCount, 'Error' ) !== false) {
			echo $movieCount;
		} else {
			$movies = "";
			$startIndex = 0;
			$endIndex = $requestSize;

			while ( $startIndex < $movieCount - 1 ) {
				$response = Send ( "$login:MOVIE:GET:INDEX:$startIndex:$endIndex:ALL" );
				if (strpos ( $response, 'Error' ) !== false) {
					echo $response;
					$startIndex = $movieCount;
					break;
				} else {
					$movies .= $response;
					$startIndex += $requestSize;
					$endIndex += $requestSize;
				}
			}
			echo $movies;
		}
		break;
	case 'updatemovie' :
		$id = Get ( 'id' );
		$title = Get ( 'title' );
		$genre = Get ( 'genre' );
		$description = Get ( 'description' );
		$rating = Get ( 'rating' );
		$watched = Get ( 'watched' );
		if ($id != '' && $title != '' && $genre != '' && $description != '' && $rating != '' && $watched != '') {
			echo Send ( "$login:MOVIE:UPDATE:$id:$title:$description:$genre:$rating:$watched" );
		} else {
			echo MOVIE_ERROR_NR_400;
		}
		break;
	case 'loadmovies' :
			echo Send ( "$login:MOVIE:LOAD:ALL" );
		break;

	/* --------------------- Remote -------------------- */
	case 'getraspberry' :
		echo Send ( "$login:REMOTE:GET:RASPBERRY" );
		break;
	case 'getarea' :
		echo Send ( "$login:REMOTE:GET:AREA" );
		break;

	/* -------------------- Schedule ------------------- */
	case 'getschedules' :
		echo Send ( "$login:REMOTE:GET:SCHEDULE" );
		break;
	case 'addschedule' :
		$id = Get ( 'id' );
		$name = Get ( 'name' );
		$socket = Get ( 'socket' );
		$gpio = Get ( 'gpio' );
		$switch = Get ( 'switch' );
		$weekday = Get ( 'weekday' );
		$hour = Get ( 'hour' );
		$minute = Get ( 'minute' );
		$action = Get ( 'action' );
		$isTimer = Get ( 'isTimer' );
		if ($id != '' && $name != '' && ($socket != '' || $gpio != '' || $switch != '') && $weekday != '' && $hour != '' && $minute != '' && $action != '' && $isTimer != '') {
			echo Send ( "$login:REMOTE:ADD:SCHEDULE:$id:$name:$socket:$gpio:$switch:$weekday:$hour:$minute:$action:$isTimer:1" );
		} else {
			echo REMOTE_ERROR_NR_121;
		}
		break;
	case 'updateschedule' :
		$id = Get ( 'id' );
		$name = Get ( 'name' );
		$socket = Get ( 'socket' );
		$gpio = Get ( 'gpio' );
		$switch = Get ( 'switch' );
		$weekday = Get ( 'weekday' );
		$hour = Get ( 'hour' );
		$minute = Get ( 'minute' );
		$action = Get ( 'action' );
		$isTimer = Get ( 'isTimer' );
		$isActive = Get ( 'isactive' );
		if ($id != '' && $name != '' && ($socket != '' || $gpio != '' || $switch != '') && $weekday != '' && $hour != '' && $minute != '' && $action != '' && $isTimer != '' && $isActive != '') {
			echo Send ( "$login:REMOTE:UPDATE:SCHEDULE:$id:$name:$socket:$gpio:$switch:$weekday:$hour:$minute:$action:$isTimer:$isActive" );
		} else {
			echo REMOTE_ERROR_NR_121;
		}
		break;
	case 'deleteschedule' :
		$id = Get ( 'id' );
		if ($name != '') {
			echo Send ( "$login:REMOTE:DELETE:SCHEDULE:$id" );
		} else {
			echo REMOTE_ERROR_NR_121;
		}
		break;
	case 'setschedule' :
		$id = Get ( 'id' );
		$isActive = Get ( 'isactive' );
		if ($id != '' && $isActive != '') {
			echo Send ( "$login:REMOTE:SET:SCHEDULE:$id:$isActive" );
		} else {
			echo REMOTE_ERROR_NR_121;
		}
		break;
	case 'activateallschedules' :
		echo Send ( "$login:REMOTE:SET:SCHEDULE:ALL:1" );
		break;
	case 'deactivateallschedules' :
		echo Send ( "$login:REMOTE:SET:SCHEDULE:ALL:0" );
		break;

	/* ----------------- ShoppingList ------------------ */
	case 'getshoppinglist' :
		echo Send ( "$login:SHOPPINGLIST:GET:ALL" );
		break;
	case 'addshoppingentry' :
		$id = Get ( 'id' );
		$name = Get ( 'name' );
		$group = Get ( 'group' );
		$quantity = Get ( 'quantity' );
		$unit = Get ( 'unit' );
		if ($id != '' && $name != '' && $group != '' && $quantity != '' && $unit != '') {
			echo Send ( "$login:SHOPPINGLIST:ADD:$id:$name:$group:$quantity:$unit" );
		} else {
			echo SHOPPING_ERROR_NR_155;
		}
		break;
	case 'updateshoppingentry' :
		$id = Get ( 'id' );
		$name = Get ( 'name' );
		$group = Get ( 'group' );
		$quantity = Get ( 'quantity' );
		$unit = Get ( 'unit' );
		if ($id != '' && $name != '' && $group != '' && $quantity != '' && $unit != '') {
			echo Send ( "$login:SHOPPINGLIST:UPDATE:$id:$name:$group:$quantity:$unit" );
		} else {
			echo SHOPPING_ERROR_NR_155;
		}
		break;
	case 'deleteshoppingentry' :
		$id = Get ( 'id' );
		if ($id != '') {
			echo Send ( "$login:SHOPPINGLIST:DELETE:$id" );
		} else {
			echo SHOPPING_ERROR_NR_155;
		}
		break;

	/* ---------------- Socket ---------------- */
	case 'getsockets' :
		echo Send ( "$login:REMOTE:GET:SOCKET:ALL" );
		break;
	case 'addsocket' :
		$typeid = Get ( 'typeid' );
		$name = Get ( 'name' );
		$area = Get ( 'area' );
		$code = Get ( 'code' );
		if ($typeid != '' && $name != '' && $area != '' && $code != '') {
			echo Send ( "$login:REMOTE:ADD:SOCKET:$typeid:$name:$area:$code:0" );
		} else {
			echo REMOTE_ERROR_NR_121;
		}
		break;
	case 'updatesocket' :
		$typeid = Get ( 'typeid' );
		$name = Get ( 'name' );
		$area = Get ( 'area' );
		$code = Get ( 'code' );
		$isactivated = Get ( 'isactivated' );
		if ($typeid != '' && $name != '' && $area != '' && $code != '' && $isactivated != '') {
			echo Send ( "$login:REMOTE:UPDATE:SOCKET:$typeid:$name:$area:$code:$isactivated" );
		} else {
			echo REMOTE_ERROR_NR_121;
		}
		break;
	case 'deletesocket' :
		$typeid = Get ( 'typeid' );
		if ($typeid != '') {
			echo Send ( "$login:REMOTE:DELETE:SOCKET:$typeid" );
		} else {
			echo REMOTE_ERROR_NR_121;
		}
		break;
	case 'setsocket' :
		$socket = Get ( 'socket' );
		$state = Get ( 'state' );
		if ($socket != '' && $state != '') {
			echo Send ( "$login:REMOTE:SET:SOCKET:$socket:$state" );
		} else {
			echo REMOTE_ERROR_NR_121;
		}
		break;
	case 'activateallsockets' :
		echo Send ( "$login:REMOTE:SET:SOCKET:ALL:1" );
		break;
	case 'deactivateallsockets' :
		echo Send ( "$login:REMOTE:SET:SOCKET:ALL:0" );
		break;

	/* ---------------- Switch ---------------- */
	case 'getswitches' :
		echo Send ( "$login:REMOTE:GET:SWITCH:ALL" );
		break;
	case 'addswitch' :
		$typeid = Get ( 'typeid' );
		$name = Get ( 'name' );
		$area = Get ( 'area' );
		$remoteid = Get ( 'remoteid' );
		$keycode = Get ( 'keycode' );
		if ($typeid != '' && $name != '' && $area != '' && $remoteid != '' && $keycode != '') {
			echo Send ( "$login:REMOTE:ADD:SWITCH:$typeid:$name:$area:$keycode:$remoteid" );
		} else {
			echo REMOTE_ERROR_NR_121;
		}
		break;
	case 'updateswitch' :
		$typeid = Get ( 'typeid' );
		$name = Get ( 'name' );
		$area = Get ( 'area' );
		$remoteid = Get ( 'remoteid' );
		$keycode = Get ( 'keycode' );
		if ($typeid != '' && $name != '' && $area != '' && $remoteid != '' && $keycode != '') {
			echo Send ( "$login:REMOTE:UPDATE:SWITCH:$typeid:$name:$area:$keycode:$remoteid" );
		} else {
			echo REMOTE_ERROR_NR_121;
		}
		break;
	case 'deleteswitch' :
		$typeid = Get ( 'typeid' );
		if ($typeid != '') {
			echo Send ( "$login:REMOTE:DELETE:SWITCH:$typeid" );
		} else {
			echo REMOTE_ERROR_NR_121;
		}
		break;
	case 'toggleswitch' :
		$name = Get ( 'name' );
		if ($name != '') {
			echo Send ( "$login:REMOTE:TOGGLE:SWITCH:$name" );
		} else {
			echo REMOTE_ERROR_NR_121;
		}
		break;
	case 'toggleallswitches' :
		echo Send ( "$login:REMOTE:TOGGLE:SWITCH:ALL" );
		break;

	/* ------------------ System ------------------ */
	case 'systemreboot' :
		echo Send ( "$login:SYSTEM:SYSTEM:REBOOT" );
		break;
	case 'systemshutdown' :
		echo Send ( "$login:SYSTEM:SYSTEM:SHUTDOWN" );
		break;

	/* ------------------ Temperature ------------------ */
	case 'getcurrenttemperature' :
		echo Send ( "$login:TEMPERATURE:GET:ALL" );
		break;
	case 'gettemperaturegraphurl' :
		echo Send ( "$login:REMOTE:GET:URL:TEMPERATURE" );
		break;
	case 'setcontroltasktemperature' :
		$state = Get ( 'state' );
		if ($state != '') {
			echo Send ( "$login:TEMPERATURE:SETCONTROLTASK:$state" );
		} else {
			echo TEMPERATURE_ERROR_NR_135;
		}
		break;

	/* ---------------------- User --------------------- */
	case 'validateuser' :
		echo Send ( "$login:USER:VALIDATE:NOW" );
		break;
	case 'resetfailedlogin' :
		$userToReset = Get ( 'usertoreset' );
		if ($userToReset != '') {
			echo Send ( "$login:USER:RESETFAILEDLOGIN:$userToReset" );
		} else {
			echo AUTHENTIFICATION_ERROR_NR_16;
		}
		break;

	/* --------------------- Default ------------------- */
	default :
		var2console ( "Warning: " );
		var2console ( $action );
		break;
}

/* ===================== Functions ===================== */
function Get($val) {
	if (isset ( $_GET [$val] )){
		return $_GET [$val];
	}
}
function StartsWith($Haystack, $Needle) {
	return strpos ( $Haystack, $Needle ) === 0;
}
function GetValues($data, $type) {
	$lines = explode ( ';', $data );

	$values = array ();
	for($i = 0; $i < count ( $lines ); $i ++) {
		if (StartsWith ( $lines [$i], $type )) {
			$values [] = explode ( '::', $lines [$i] );
		}
	}

	return $values;
}
function Send($data) {
	$socket = fsockopen ( 'udp://127.0.0.1', LUCAHOMEPORT, $errno, $errstr, 10 );
	$out = "";
	if (! $socket) {
		var2console ( "SocketError" );
		echo "$errstr ($errno)";
		exit ();
	} else {
		fwrite ( $socket, "$data" );
		$out = fread ( $socket, 65536 );
		fclose ( $socket );
	}
	return $out;
}

/* ===================================================== */
/* ====================== GETTER ======================= */
/* ===================================================== */

/* ================== Get Informations ================= */
function GetInformations() {
	return Send ( "Website:234524:INFORMATION:GET:PHP" );
}

/* ===================== Get Changes =================== */
function GetChanges() {
	return Send ( "Website:234524:CHANGE:GET:PHP" );
}

/* ======================= Get Area ==================== */
function GetArea() {
	return Send ( "Website:234524:REMOTE:GET:AREA" );
}

/* =================== Get Temperature ================= */
function GetTemperature() {
	return Send ( "Website:234524:TEMPERATURE:GET:PHP" );
}

/* ============== Get Temperature Graph URL ============ */
function GetTemperatureGraphUrl() {
	return Send ( "Website:234524:REMOTE:GET:URL:TEMPERATURE" );
}

/* ============== Get Main URL ============ */
function GetMainUrl() {
	return Send ( "Website:234524:REMOTE:GET:URL:MAIN" );
}

/* ============== Get Camera URL ============ */
function GetCameraUrl() {
	return Send ( "Website:234524:REMOTE:GET:URL:CAMERA" );
}

/* ============== Get MOTION State ============ */
function GetMotionState() {
	$motionState = Send ( "Website:234524:CAMERA:GET:MOTION:STATE" );
	if ($motionState == "STATE:ON") {
		return true;
	} else {
		return false;
	}
}

/* ===================== Get MapContent =================== */
function GetMapContent() {
	return Send ( "Website:234524:MAPCONTENT:GET:PHP" );
}

/* ===================== Get Meter Data =================== */
function GetMeterData() {
	return Send ( "Website:234524:METERDATA:GET:PHP" );
}

/* ===================== Get Menu =================== */
function GetMenu() {
	return Send ( "Website:234524:MENU:GET:MENU_PHP" );
}

/* ===================== Get Listed Menu =================== */
function GetListedMenu() {
	return Send ( "Website:234524:MENU:GET:LISTEDMENU_PHP" );
}

/* ===================== Get ShoppingList =================== */
function GetShoppingList() {
	return Send ( "Website:234524:SHOPPINGLIST:GET:PHP" );
}

/* ===================== Get BirthdayList =================== */
function GetBirthdayList() {
	return Send ( "Website:234524:BIRTHDAY:GET:PHP" );
}

/* ===================================================== */
/* ====================== PARSER ======================= */
/* ===================================================== */

function ParseInformations($data) {
	$values = GetValues ( $data, 'information::' );
	$information = array ();
	for($i = 0; $i < count ( $values ); $i ++) {
		$information [] = array (
				'key' => trim ( $values [$i] [1] ),
				'value' => trim ( $values [$i] [2] )
		);
	}
	return $information;
}

function ParseChanges($data) {
	$values = GetValues ( $data, 'change::' );
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

function ParseTemperature($data) {
	$values = GetValues ( $data, 'temperature::' );
	$temperatures = array ();
	for($i = 0; $i < count ( $values ); $i ++) {
		$temperatures [] = array (
				'value' => trim ( $values [$i] [1] ),
				'area' => trim ( $values [$i] [2] ) ,
				'sensorpath' => trim ( $values [$i] [3] ) ,
				'graphpath' => trim ( $values [$i] [4] )
		);
	}
	return $temperatures;
}

function ParseMapContent($data) {
	$values = GetValues ( $data, 'mapcontent::' );
	$mapContent = array ();
	for($i = 0; $i < count ( $values ); $i ++) {
		$positionString = trim ( $values [$i] [4] );
		$position [] = explode ( '|', $positionString );

		$mapContent [] = array (
				'id' => trim ( $values [$i] [1] ),
				'type' => trim ( $values [$i] [2] ),
				'typeid' => trim ( $values [$i] [3] ),
				'position' => $position,
				'name' => trim ( $values [$i] [5] ),
				'shortname' => trim ( $values [$i] [6] ),
				'area' => trim ( $values [$i] [7] ),
				'visibility' => trim ( $values [$i] [8] )
		);
	}
	return $mapContent;
}

function ParseListedMenu($data) {
	$values = GetValues ( $data, 'listedmenu::' );
	$listedmenus = array ();
	for($i = 0; $i < count ( $values ); $i ++) {
		$listedmenus [] = array (
				'id' => trim ( $values [$i] [1] ),
				'title' => trim ( $values [$i] [2] ),
				'description' => trim ( $values [$i] [3] ),
				'usecounter' => trim ( $values [$i] [4] ),
				'rating' => trim ( $values [$i] [5] )
		);
	}
	return $listedmenus;
}

function ParseMenu($data) {
	$values = GetValues ( $data, 'menu::' );
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

function ParseMeterData($data) {
	$values = GetValues ( $data, 'meterdata::' );
	$meterdata = array ();
	for($i = 0; $i < count ( $values ); $i ++) {
		$meterdata [] = array (
				'id' => trim ( $values [$i] [1] ),
				'type' => trim ( $values [$i] [2] ),
				'typeid' => trim ( $values [$i] [3] ),
				'day' => trim ( $values [$i] [4] ),
				'month' => trim ( $values [$i] [5] ),
				'year' => trim ( $values [$i] [6] ),
				'hour' => trim ( $values [$i] [7] ),
				'minute' => trim ( $values [$i] [8] ),
				'meterid' => trim ( $values [$i] [9] ),
				'area' => trim ( $values [$i] [10] ),
				'value' => trim ( $values [$i] [11] ),
				'imagename' => trim ( $values [$i] [12] )
		);
	}
	return $meterdata;
}

function ParseShoppingList($data) {
	$values = GetValues ( $data, 'shopping_entry::' );
	$shoppingList = array ();
	for($i = 0; $i < count ( $values ); $i ++) {
		$shoppingList [] = array (
				'id' => trim ( $values [$i] [1] ),
				'name' => trim ( $values [$i] [2] ),
				'group' => trim ( $values [$i] [3] ),
				'quantity' => trim ( $values [$i] [4] ),
				'unit' => trim ( $values [$i] [5] )
		);
	}
	return $shoppingList;
}

function ParseBirthdayList($data) {
	$values = GetValues ( $data, 'birthday::' );
	$birthdayList = array ();
	for($i = 0; $i < count ( $values ); $i ++) {
		$birthdayList [] = array (
				'id' => trim ( $values [$i] [1] ),
				'name' => trim ( $values [$i] [2] ),
				'day' => trim ( $values [$i] [3] ),
				'month' => trim ( $values [$i] [4] ),
				'year' => trim ( $values [$i] [5] ),
				'group' => trim ( $values [$i] [6] ),
				'remindme' => trim ( $values [$i] [7] )
		);
	}
	return $birthdayList;
}

/* ===================================================== */
/* ====================== LOGGER ======================= */
/* ===================================================== */

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
