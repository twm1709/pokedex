(function(){
	var app = angular.module('app', ['ngRoute', 'dex-services']);
	app.controller('PokedexController', function($scope, $http, $interval, url, pklist, types){
		$scope.types = types;
		$interval(callAtInterval, 1000);
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
			getPkSprite();
			
		};

		$scope.searchNew = function(){
			$scope.selectedPk = false;
		};

		var getPkSprite = function(){
			$scope.selectedImg = "http://pokeapi.co/media/img/" + $scope.selectedPk.national_id + '.png';
			
		};

		//List Filters
		$scope.filterByName = function(){};
		$scope.filterByType = function(){};
		$scope.filterByNumber = function(){};

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