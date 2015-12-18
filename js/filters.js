(function(){
	var app = angular.module('dex-filters', ['dex-services']);
	var typeFilter = function(types, type1, type2){
		var result = types.filter(function(type) { 
			var current_type = angular.uppercase(type.name).replace('-', ' ');
			var searched_type1 = angular.uppercase(type1).replace('-', ' ');
			var searched_type2 = angular.uppercase(type2).replace('-', ' ');
			return ((current_type === searched_type1) || (current_type === searched_type2));
		});
		return result;
	}
	var typeCount = function(type1, type2){
		var aux = 0;
		 if (type1 != '')
		 	aux++;
		 if (type2 != '')
		 	aux++;
		return aux;
	}

	app.filter('filterByParameters', function(searchService){
		return function(list){
			var list_aux = [];
			angular.forEach(list, function(pokemon){
				var valid_name = ((angular.uppercase(pokemon.name).indexOf(angular.uppercase(searchService.name)) != -1)
								|| (searchService.name == '')
								);
				var valid_move = ((pokemon.moves
									.filter(function(move) { 
										var current_move = angular.uppercase(move.name).replace('-', ' ');
										var searched_move = angular.uppercase(searchService.move).replace('-', ' ');
										return (current_move.indexOf(searched_move) != -1);
									})
									.length > 0) 
								|| (searchService.move == '')
								);
				var valid_ability = ((pokemon.abilities
									.filter(function(ability) { 
										var current_ability = angular.uppercase(ability.name).replace('-', ' ');
										var searched_ability = angular.uppercase(searchService.ability).replace('-', ' ');
										return (current_ability.indexOf(searched_ability) != -1);
									})
									.length > 0) 
								|| (searchService.ability == '')
								);
				var valid_typing = (
										((typeFilter(pokemon.types, searchService.type1, searchService.type2).length == 1)
										&& (typeCount(searchService.type1, searchService.type2) == 1))
									||
										((typeFilter(pokemon.types, searchService.type1, searchService.type2).length == 2)
										&& (typeCount(searchService.type1, searchService.type2) == 2))
									|| 
										(typeCount(searchService.type1, searchService.type2) == 0)
									);

				if ((valid_move) && (valid_ability) && (valid_typing) && (valid_name)){
					list_aux.push(pokemon);
				}

			});
			return list_aux;
		};
	});

	

})();