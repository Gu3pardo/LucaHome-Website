<?php
class Home {
	var $app;
	function Home(&$app) {
		$this->app = $app;
		$this->app->Nav->AddPage ( 'main' );
		$this->app->Nav->AddAction ( 'information', 'Information' );
		$this->app->Nav->AddAction ( 'temperature', 'Temperature' );
		$this->app->Nav->AddAction ( 'camera', 'Camera' );
		$this->app->Nav->AddAction ( 'menu', 'Menu' );
		$this->app->Nav->AddAction ( 'shoppingList', 'ShoppingList' );
		$this->app->Nav->AddAction ( 'map', 'Map' );
		$this->app->Nav->DefaultAction ( 'information' );
	}
	function Information() {
		include ('./lib/logger.php');
		include ('./lib/lucahome.php');
		include ('./lib/getter.php');
		include ('./lib/parser.php');
		
		// Informations
		
		$dataInformations = GetInformations ();
		$informations = ParseInformations ( $dataInformations );
		
		$information_table = '';
		for($i = 0; $i < count ( $informations ); $i ++) {
			$information_table .= "
						<tr>
							<td class=\"information_type\">{$informations[$i]['key']}</td>
                        	<td class=\"information_value\">{$informations[$i]['value']}</td>
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
							<td class=\"change_type\">{$changes[$i]['type']}</td>
                        	<td class=\"change_time\">{$changes[$i]['hour']}:{$changes[$i]['minute']} / {$changes[$i]['day']}.{$changes[$i]['month']}.{$changes[$i]['year']}</td>
							<td class=\"change_user\">{$changes[$i]['user']}</td>
                        </tr>";
		}
		$this->app->Tpl->Set ( 'CHANGETABLE', $change_table );
		
		$this->app->Tpl->Set ( 'MENUINFORMATION', 'class="active"' );
		$this->app->Tpl->Parse ( 'PAGE', 'page_information.tpl' );
	}
	function Temperature() {
		include ('./lib/logger.php');
		include ('./lib/lucahome.php');
		include ('./lib/getter.php');
		include ('./lib/parser.php');
		
		$area = GetArea ();
		$temperature = GetTemperature ();
		$temperatureGraphUrl = GetTemperatureGraphUrl ();
		
		$link_text = "Temperature Log ";
		$link_text .= $area;
		
		$temperature_link_value = "http://";
		$temperature_link_value .= $temperatureGraphUrl;
		
		$temp_out = '';
		$temp_out .= "<div class=\"button socket\">
		<div class=\"button_text temperature_value\">{$area}:   {$temperature} &#176;C</div>
		</div>";
		
		$this->app->Tpl->Set ( 'LINK_TEXT', $link_text );
		$this->app->Tpl->Set ( 'TEMPERATURE', $temp_out );
		$this->app->Tpl->Set ( 'TEMPERATURE_LINK_VALUE', $temperature_link_value );
		
		$this->app->Tpl->Set ( 'MENUTEMPERATURE', 'class="active"' );
		$this->app->Tpl->Parse ( 'PAGE', 'page_temperature.tpl' );
	}
	function Information() {
		include ('./lib/logger.php');
		include ('./lib/lucahome.php');
		include ('./lib/getter.php');
		include ('./lib/parser.php');

		$cameraUrl = GetCameraUrl ();
		$motionState = GetMotionState ();
		
		$camera_link_value = "http://";
		$camera_link_value .= $cameraUrl;
		
		$camera_link_text = "";
		if ($motionState) {
			$camera_link_text .= "Camera";
			$camera_frame_style = "width: 90%; height: 90%; visibility: visible;";
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
		include ('./lib/logger.php');
		include ('./lib/lucahome.php');
		include ('./lib/getter.php');
		include ('./lib/parser.php');
		
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
		include ('./lib/logger.php');
		include ('./lib/lucahome.php');
		include ('./lib/getter.php');
		include ('./lib/parser.php');
		
		$dataShoppingList = GetShoppingList ();
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
	function Map() {
		include ('./lib/logger.php');
		include ('./lib/lucahome.php');
		include ('./lib/getter.php');
		include ('./lib/parser.php');
		
		$dataMapContentList = GetMapContent ();
		$mapContent = ParseMapContent ( $dataMapContentList );
		
		$mapContent_HTML = '';
		for($i = 0; $i < count ( $mapContent ); $i ++) {
			if($mapContent[$i]['type'] == '1'){
				$mapContent_HTML .= "
						<h4 style='position: absolute; background-color:lightblue; margin: $mapContent[$i]['sockets'][0]% 0 0 $mapContent[$i]['sockets'][1]%'>$mapContent[$i]['sockets'][0]
							<br />$mapContent[$i]['temperatureArea']
							<br />$mapContent[$i]['type']
						</h4>";
			}
		}
		$this->app->Tpl->Set ( 'MAPCONTENT', $mapContent_HTML );
		
		$this->app->Tpl->Set ( 'MENUMAP', 'class="active"' );
		$this->app->Tpl->Parse ( 'PAGE', 'page_map.tpl' );
	}
}
?>