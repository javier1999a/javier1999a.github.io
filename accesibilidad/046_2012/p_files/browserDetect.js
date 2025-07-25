var BrowserDetect = {
	init : function() {
		this.browser = this.searchString(this.dataBrowser)
				|| "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
				|| this.searchVersion(navigator.appVersion)
				|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString : function(data) {
		
		
		for ( var i = 0; i < data.length; i++) {
			
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch
					|| data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			} else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion : function(dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1)
			return;
		return parseFloat(dataString.substring(index
				+ this.versionSearchString.length + 1));
	},
	dataBrowser : [ {
		string : navigator.userAgent,
		subString : "Chrome",
		identity : "Chrome"
	}, {
		string : navigator.userAgent,
		subString : "OmniWeb",
		versionSearch : "OmniWeb/",
		identity : "OmniWeb"
	}, {
		string : navigator.vendor,
		subString : "Apple",
		identity : "Safari",
		versionSearch : "Version"
	}, {
		prop : window.opera,
		identity : "Opera"
	}, {
		string : navigator.vendor,
		subString : "iCab",
		identity : "iCab"
	}, {
		string : navigator.vendor,
		subString : "KDE",
		identity : "Konqueror"
	}, {
		string : navigator.userAgent,
		subString : "Firefox",
		identity : "Firefox"
	}, {
		string : navigator.vendor,
		subString : "Camino",
		identity : "Camino"
	}, {
		string : navigator.userAgent,
		subString : "Trident/7",
		identity : "Explorer",
		versionSearch : "MSIE"
	}, {
		string : navigator.userAgent,
		subString : "Trident/8",
		identity : "Explorer",
		versionSearch : "rv"
	}, {
		string : navigator.userAgent,
		subString : "Trident/9",
		identity : "Explorer",
		versionSearch : "rv"
	}, {
		string : navigator.userAgent,
		subString : "Trident/10",
		identity : "Explorer",
		versionSearch : "rv"
	}, {
		string : navigator.userAgent,
		subString : "Trident/11",
		identity : "Explorer",
		versionSearch : "rv"
	}, {
				string : navigator.userAgent,
				subString : "Netscape",
				identity : "Netscape"
			}, {
				string : navigator.userAgent,
				subString : "MSIE",
				identity : "Explorer",
				versionSearch : "MSIE"
			}, {
				string : navigator.userAgent,
				subString : "Gecko",
				identity : "Mozilla",
				versionSearch : "rv"
			}, { 
				string : navigator.userAgent,
				subString : "Mozilla",
				identity : "Netscape",
				versionSearch : "Mozilla"
			} ],
	dataOS : [ {
		string : navigator.platform,
		subString : "Win",
		identity : "Windows"
	}, {
		string : navigator.platform,
		subString : "Mac",
		identity : "Mac"
	}, {
		string : navigator.userAgent,
		subString : "iPhone",
		identity : "iPhone/iPod"
	}, {
		string : navigator.platform,
		subString : "Linux",
		identity : "Linux"
	} ]

};
BrowserDetect.init();



function esIE11() 
{
   return !!(
        navigator.userAgent.match("/Trident/")
        && navigator.userAgent.match("/rv:11/")
    );
}


function isEdge() {
	return !!navigator.userAgent.match(/Edge\/\d+/);
}


function isAndroid() {
	return navigator.userAgent.toUpperCase().indexOf("ANDROID") != -1 ||
		navigator.appVersion.toUpperCase().indexOf("ANDROID") != -1 ||
		navigator.userAgent.toUpperCase().indexOf("SILK/") != -1 ||
		navigator.userAgent.toUpperCase().indexOf("KFJWI") != -1 ||
		navigator.userAgent.toUpperCase().indexOf("KFJWA") != -1 ||
		navigator.userAgent.toUpperCase().indexOf("KFTT") != -1 ||
		navigator.userAgent.toUpperCase().indexOf("KFOT") != -1 ||
		navigator.userAgent.toUpperCase().indexOf("KINDLE FIRE") != -1
		;
}


function isIOS() {
	return (navigator.userAgent.toUpperCase().indexOf("IPAD") != -1) ||
	(navigator.userAgent.toUpperCase().indexOf("IPOD") != -1) ||
	(navigator.userAgent.toUpperCase().indexOf("IPHONE") != -1);
}

function isWindows8() {
	return navigator.userAgent.indexOf("Windows NT 6.2") != -1 ||	
		navigator.userAgent.indexOf("Windows NT 6.3") != -1;		
}

function isWindowsRT() {
	return isWindows8() && navigator.userAgent.indexOf("ARM;") != -1;
}

function isInternetExplorer() {
	return !!(navigator.userAgent.match(/MSIE/))
			|| !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv:11/)) 
			|| !!navigator.userAgent.match(/Trident.*rv[ :]*11\./); 
}

function isOldInternetExplorer() {
	return !!(navigator.userAgent.match(/MSIE/));
}

function isFirefoxUAM() {
    return navigator.userAgent.indexOf("UAM") > 0;
}


function isFirefox(){
	return navigator.userAgent.toUpperCase().indexOf("FIREFOX") != -1
}

function isChrome() {
	return navigator.userAgent.toUpperCase().indexOf("CHROME") != -1 ||
		navigator.userAgent.toUpperCase().indexOf("CHROMIUM") != -1;
}

