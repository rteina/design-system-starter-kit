(function() {
	'use strict';
	G4SFDC.GGOApp = function(options) {
		console.log('[G4SFDC.GGOApp] >> CONSTRUCTOR');
		this.options = options || {};
		this.init();
		console.log('[G4SFDC.GGOApp] << CONSTRUCTOR');
	};

	G4SFDC.GGOApp.prototype = {
		init: function() {
			console.log('[G4SFDC.GGOApp] >> Init');
			console.log('[G4SFDC.GGOApp] << Init');
		},
	};
})();
