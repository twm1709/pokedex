(function(){
	var app = angular.module('app', ['ngRoute', 'dex-services', 'dex-filters']);
	app.controller('PokedexController', function($scope, $http, $interval, url, pklist, types, searchService){
		$scope.types = types;
		$interval(callAtInterval, 1000);
		$scope.tab = 0;
		function callAtInterval(){
			$scope.progress = pklist.getCount() / 718 * 100;
		}
		$scope.message = "";
		var initDex = function(){
			$http.get('data/pokemon_data.json')
		        .success(
		        	function(data){
			          $scope.pkList = pklist.setPkData(data);
			        
			        })
			    .error(
			    	function(){
			        	alert('nope');
			        }
		    	); 
			
		}
		initDex();

		$scope.loadPk = function(value){
			$scope.selectedImg ='img/searching.gif';
			$scope.selectedPk = pklist.getPkData(value);
			$scope.tab = 1;
			getPkSprite();
			
		};

		$scope.searchNew = function(){
			$scope.selectedPk = false;
			$scope.tab = 0;
		};

		var getPkSprite = function(){
			$scope.selectedImg = "http://pokeapi.co/media/img/" + $scope.selectedPk.national_id + '.png';
			
		};

		//List Filters
		$scope.filterByType = function(){};
		$scope.filterByNumber = function(){};

		$scope.searchName = '';
		$scope.searchAttack = '';
		$scope.searchAbility = '';
		$scope.searchType1 = '';
		$scope.searchType2 = '';

		$scope.filterPokemon = function(){
			searchService.name = $scope.searchName;
			searchService.move = $scope.searchAttack;
			searchService.ability = $scope.searchAbility;
			searchService.type1 = $scope.searchType1;
			searchService.type2 = $scope.searchType2;

			
		};
		/*
		$scope.importarDatos = function(){
			for (i = 1; i <= 718; i++){
				$http.get(url + 'pokemon/' + i + '/')
			        .success(function(data){
			          pklist.setPkData(data);
			          
			        });	

			}
		}
		$scope.index = 0;
		$scope.guardarDatos = function(){
			var texto = "";
			for (i = $scope.index; i < ($scope.index + 50); i++ ){
				texto += JSON.stringify(pklist.getPkData2(i)) + ',\n';
			}
			$scope.index = i;
			$scope.message = texto;
		}
		*/


	});
	
})();