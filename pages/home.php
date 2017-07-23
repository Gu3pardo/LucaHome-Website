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
		$this->app->Nav->AddAction ( 'movielist', 'MovieList' );
		$this->app->Nav->AddAction ( 'map', 'Map' );
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
	function Camera() {
		include ('./lib/lucahome.php');

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
                        </tr>";
		}
		$this->app->Tpl->Set ( 'BIRTHDAYTABLE', $birthdayList_table );
		
		$this->app->Tpl->Set ( 'MENUBIRTHDAYLIST', 'class="active"' );
		$this->app->Tpl->Parse ( 'PAGE', 'page_birthday_list.tpl' );
	}
	function MovieList() {
		include ('./lib/lucahome.php');
		
		$dataMovieList = GetMovieList();
		$movieList = ParseMovieList ( $dataMovieList );

		$moviePath = 'F:\Filme';
		
		$movieList_table = '';
		for($i = 0; $i < count ( $movieList ); $i ++) {
			$currentMoviePath = $moviePath + '\\' + $movieList[$i]['title'] + '\\' + $movieList[$i]['title'] + '.mkv';

			$movieList_table .= "
						<tr>
                        	<td>{$movieList[$i]['title']}</td>
                        	<td>{$movieList[$i]['genre']}</td>
                        	<td>{$movieList[$i]['description']}</td>
                        	<td>{$movieList[$i]['rating']}/5</td>
                        	<td>{$movieList[$i]['watched']}x</td>
							<td><a href="{$currentMoviePath}">Link</td>
                        </tr>";
		}
		$this->app->Tpl->Set ( 'MOVIETABLE', $movieList_table );
		
		$this->app->Tpl->Set ( 'MENUMOVIELIST', 'class="active"' );
		$this->app->Tpl->Parse ( 'PAGE', 'page_movie_list.tpl' );
	}
	function Map() {
		include ('./lib/lucahome.php');
		
		$dataMapContentList = GetMapContent ();
		$mapContent = ParseMapContent ( $dataMapContentList );
		
		$mapContent_HTML = '';
		for($i = 0; $i < count ( $mapContent ); $i ++) {
			if($mapContent[$i]['visibility'] == '1'){
				$postionX = $mapContent[$i]['position'][0];
				$postionY = $mapContent[$i]['position'][1];
				$socket = $mapContent[$i]['sockets'][0];

				$mapContent_HTML .= "
						<h6 style='position: absolute; background-color:lightblue; margin: $postionX% 0 0 $postionY%'>
							$socket<br/>$mapContent[$i]['temperatureArea']<br/>$mapContent[$i]['type']
						</h6>";
			}
		}
		$this->app->Tpl->Set ( 'MAPCONTENT', $mapContent_HTML );
		
		$this->app->Tpl->Set ( 'MENUMAP', 'class="active"' );
		$this->app->Tpl->Parse ( 'PAGE', 'page_map.tpl' );
	}
}
?>