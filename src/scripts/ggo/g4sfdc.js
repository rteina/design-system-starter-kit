/* START g4SFDC: put code below in g4sfdc.js */
(function () {
	'use strict';
	var G4SFDC = {
		version: 'G4SFDC.2.0.0'
	};

	function expose() {
		var oldG4SFDC = window.G4SFDC;
		
		G4SFDC.noConflict = function () {
			window.G4SFDC = oldG4SFDC;
			return this;
		};
		
		window.G4SFDC = G4SFDC;
	}

	/* define G4SFDC for Node module pattern loaders, including Browserify */
	if ((typeof(module) === 'object') && (typeof(module.exports) === 'object')) {
		module.exports = G4SFDC;
		
	/* define G4SFDC as an AMD module */
	} else if ((typeof(define) === 'function') && define.amd) {
		define(G4SFDC);
	}

	/* define G4SFDC as a global G4SFDC variable, saving the original G4SFDC to restore later if needed */
	if (typeof(window) !== 'undefined') {
		expose();
	}
})();
/* end G4SFDC: put code below in g4sfdc.js */