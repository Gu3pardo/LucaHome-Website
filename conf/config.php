<?php
class Config {
	function Config() {
		// General
		$this->LANG = 'EN';
		$this->DOMAIN = '';
		$this->BASEDIR = '.';
		define ( '_BASEDIR', $this->BASEDIR );
		// Template-Engine
		$this->TPL_DIR = './pages/';
		$this->TPL_TPLDIR = './pages/tpl/';
		$this->TPL_THEME = 'default';
		// Navigation
		$this->NAV_DEFAULT = _BASEDIR . '/index.php?page=home&action=main';
		$this->NAV_PAGES = array (
				'home' 
		);
		// Meta
		$this->META_TITLE = 'LucaHome 2.8.0.170408';
		$this->META_DESCRIPTION = 'Control your tv, sound and more. Display temperature and show your movies via your android smartphone. Monitor your room with a camera';
		$this->META_KEYWORDS_EN = 'SMART, HOME, RASPBERRY, MOVIE, SOCKET, BIRTHDAY, SECURITY SYSTEM';
		$this->META_KEYWORDS_DE = 'SMART, HOME, RASPBERRY, FILM, STECKDOSE, GEBURTSTAG, SICHERHEITSSYSTEM';
		$this->META_AUTHOR = 'Jonas Schubert';
	}
}
?>