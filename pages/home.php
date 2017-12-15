<?php

class Home {

	var $app;

	function Home(&$app) {
		$this->app = $app;

		$this->app->Nav->AddPage ( 'home' );

		$this->app->Nav->AddAction ( 'information', 'Information' );
		$this->app->Nav->AddAction ( 'temperature', 'Temperature' );
		$this->app->Nav->AddAction ( 'camera', 'Camera' );
		$this->app->Nav->AddAction ( 'menu', 'Menu' );
		$this->app->Nav->AddAction ( 'shoppinglist', 'ShoppingList' );
		$this->app->Nav->AddAction ( 'birthdaylist', 'BirthdayList' );
		$this->app->Nav->AddAction ( 'map', 'Map' );
    $this->app->Nav->AddAction ( 'help', 'Help');

		$this->app->Nav->DefaultAction ( 'information' );
	}

	function Information() {
		include ('./lib/lucahome.php');

		// Informations

		$dataInformations = GetInformations ();
		$informations = ParseInformations ( $dataInformations );

		$information_table = '';
		for($i = 0; $i < count ( $informations ); $i ++) {
			$information_table .= "
						<tr>
							<td>{$informations[$i]['key']}</td>
              <td>{$informations[$i]['value']}</td>
            </tr>";
		}
		$this->app->Tpl->Set ( 'INFORMATIONTABLE', $information_table );

		// Changes

		$dataChanges = GetChanges ();
		$changes = ParseChanges ( $dataChanges );

		$change_table = '';
		for($i = 0; $i < count ( $changes ); $i ++) {
			$change_table .= "
						<tr>
							<td>{$changes[$i]['type']}</td>
              <td>{$changes[$i]['hour']}:{$changes[$i]['minute']} / {$changes[$i]['day']}.{$changes[$i]['month']}.{$changes[$i]['year']}</td>
							<td>{$changes[$i]['user']}</td>
            </tr>";
		}
		$this->app->Tpl->Set ( 'CHANGETABLE', $change_table );

		$this->app->Tpl->Set ( 'MENUINFORMATION', 'class="active"' );
		$this->app->Tpl->Parse ( 'PAGE', 'page_information.tpl' );
	}

	function Temperature() {
		include ('./lib/lucahome.php');

		$dataTemperature = GetTemperature ();
		$temperatures = ParseTemperature ( $dataTemperature );
		$temperatureGraphUrl = GetTemperatureGraphUrl ();

		$link_text = "Temperature Log ";
		$link_text .= $area;

		$temperature_link_value = "http://";
		$temperature_link_value .= $temperatureGraphUrl;

		$temp_out = '';
		$temp_out .= "
		<div class=\"button socket\">
			<div class=\"button_text temperature_value\">{$temperatures[0]['area']}:   {$temperatures[0]['value']} &#176;C</div>
		</div>";

		$this->app->Tpl->Set ( 'LINK_TEXT', $link_text );
		$this->app->Tpl->Set ( 'TEMPERATURE', $temp_out );
		$this->app->Tpl->Set ( 'TEMPERATURE_LINK_VALUE', $temperature_link_value );

		$this->app->Tpl->Set ( 'MENUTEMPERATURE', 'class="active"' );
		$this->app->Tpl->Parse ( 'PAGE', 'page_temperature.tpl' );
	}

	function Camera() {
		include ('./lib/lucahome.php');

		$cameraUrl = GetCameraUrl ();
		$motionState = GetMotionState ();

		$camera_link_value = "http://";
		$camera_link_value .= $cameraUrl;

		$camera_link_text = "";
		if ($motionState) {
			$camera_link_text .= "Camera";
			$camera_frame_style = "width: 100%; height: 100%; visibility: visible;";
		} else {
			$camera_link_text .= "Camera not active";
			$camera_link_value = "";
			$camera_frame_style = "visibility: hidden; ";
		}

		$this->app->Tpl->Set ( 'LINK_TEXT', $link_text );
		$this->app->Tpl->Set ( 'CAMERA_LINK_VALUE', $camera_link_value );
		$this->app->Tpl->Set ( 'CAMERA_LINK_TEXT', $camera_link_text );
		$this->app->Tpl->Set ( 'CAMERA_FRAME_STYLE', $camera_frame_style );

		$this->app->Tpl->Set ( 'MENUCAMERA', 'class="active"' );
		$this->app->Tpl->Parse ( 'PAGE', 'page_camera.tpl' );
	}

	function Menu() {
		include ('./lib/lucahome.php');

		$dataMenu = GetMenu ();
		$menu = ParseMenu ( $dataMenu );

		$menu_table = '';
		for($i = 0; $i < count ( $menu ); $i ++) {
			$menu_table .= "
						<tr>
							<td>{$menu[$i]['weekday']}</td>
              <td>{$menu[$i]['day']}.{$menu[$i]['month']}.{$menu[$i]['year']}</td>
              <td>{$menu[$i]['title']}</td>
              <td>{$menu[$i]['description']}</td>
            </tr>";
		}
		$this->app->Tpl->Set ( 'MENUTABLE', $menu_table );

		$this->app->Tpl->Set ( 'MENUMENU', 'class="active"' );
		$this->app->Tpl->Parse ( 'PAGE', 'page_menu.tpl' );
	}

	function ShoppingList() {
		include ('./lib/lucahome.php');

		$dataShoppingList = GetShoppingList();
		$shoppingList = ParseShoppingList ( $dataShoppingList );

		$shoppingList_table = '';
		for($i = 0; $i < count ( $shoppingList ); $i ++) {
			$shoppingList_table .= "
						<tr>
            	<td>{$shoppingList[$i]['group']}</td>
							<td>{$shoppingList[$i]['name']}</td>
              <td>{$shoppingList[$i]['quantity']}</td>
            </tr>";
		}
		$this->app->Tpl->Set ( 'SHOPPINGLISTTABLE', $shoppingList_table );

		$this->app->Tpl->Set ( 'MENUSHOPPINGLIST', 'class="active"' );
		$this->app->Tpl->Parse ( 'PAGE', 'page_shopping_list.tpl' );
	}

	function BirthdayList() {
		include ('./lib/lucahome.php');

		$dataBirthdayList = GetBirthdayList();
		$birthdayList = ParseBirthdayList ( $dataBirthdayList );

		$birthdayList_table = '';
		for($i = 0; $i < count ( $birthdayList ); $i ++) {
			$birthdayList_table .= "
						<tr>
							<td>{$birthdayList[$i]['name']}</td>
							<td>{$birthdayList[$i]['day']}.{$birthdayList[$i]['month']}.{$birthdayList[$i]['year']}</td>
							<td>{$birthdayList[$i]['remindme']}</td>
            </tr>";
		}
		$this->app->Tpl->Set ( 'BIRTHDAYTABLE', $birthdayList_table );

		$this->app->Tpl->Set ( 'MENUBIRTHDAYLIST', 'class="active"' );
		$this->app->Tpl->Parse ( 'PAGE', 'page_birthday_list.tpl' );
	}

	function Map() {
		include ('./lib/lucahome.php');
		include ('./lib/mapcontentcreator.php');

		$dataMapContentList = GetMapContent ();
		$mapContent = ParseMapContent ( $dataMapContentList );

		$imageWidth = 744;
		$imageHeight = 549;

		$mapContent_HTML = '';
		for($i = 0; $i < count ( $mapContent ); $i ++) {
			if($mapContent[$i]['visibility'] == '1'){
				$postionX = intval($mapContent[$i]['position'][$i][0]) * 1.00 * 0.9;
				$postionY = intval($mapContent[$i]['position'][$i][1]) * 0.95 * 0.9;

				$shortname = $mapContent[$i]['shortname'];
				$area = $mapContent[$i]['area'];
				$type = $mapContent[$i]['type'];

				$backgroundcolor = GetMapTypeBackgroundColor($type);

				$mapContent_HTML .= "<p style='position: absolute; background-color:$backgroundcolor; left: $postionX%; bottom:$postionY%; border-radius:5px; padding 5px;'>$shortname<br/>$area<br/>$type</p>";
			}
		}

		var2console ( "Map: mapContent_HTML" );
		var2console ( $mapContent_HTML );

		$this->app->Tpl->Set ( 'MAPCONTENT', $mapContent_HTML );

		$this->app->Tpl->Set ( 'MENUMAP', 'class="active"' );
		$this->app->Tpl->Parse ( 'PAGE', 'page_map.tpl' );
	}

  function Help() {
    $this->app->Tpl->Set('MENUHELP', 'class="active"');
    $this->app->Tpl->Parse('PAGE', 'page_help.tpl');
  }
}
?>
