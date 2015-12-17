(function(){
	var app = angular.module('dex-services', []);
	app.value('url', 'http://pokeapi.co/api/v1/');
	app.factory('pklist', function(){
		var data = {
				pk: []
			};
		return{
			setPkData: function(pk){
				data.pk = pk;
				return pk;

			},
			getPkData: function(number){
				var result = data.pk.filter(function( obj ) {
				  return obj.national_id == number;
				});
				return result[0];
			},
			getAllData: function(){
				return data;
			},
			getCount: function(){
				return data.pk.length;
			}
		};
	});
	app.value('types', [
		{
			name: 'grass',
			strong: [],
			weak: [],
			immune: []
		},
		{
			name: 'poison',
			strong: [],
			weak: [],
			immune: []
		},
		{
			name: 'fire',
			strong: [],
			weak: [],
			immune: []
		}

		]);

})();