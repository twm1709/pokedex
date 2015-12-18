(function(){
	var app = angular.module('dex-services', []);
	app.value('url', 'http://pokeapi.co/api/v1/');
	app.value('searchService', {
		'name': '',
		'move': '',
		'ability': '',
		'type1': '',
		'type2': ''
	});
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
			name: 'GRASS',
			strong_attack: ['WATER', 'ROCK', 'GROUND'],
			weak_attack: ['BUG', 'POISON', 'FIRE', 'FLYING', 'DRAGON'],
			immune_attack: [],
			strong_resist:[],
			weak_resist:[],
			immune_resist:[]
		},
		{
			name: 'POISON',
			strong_attack: ['GRASS', 'FAIRY'],
			weak_attack: ['POISON', 'GROUND', 'ROCK', 'GHOST'],
			immune_attack: ['STEEL','GRASS', 'FAIRY'],
			strong_resist:['POISON'],
			weak_resist:['PSYCHIC', 'GROUND'],
			immune_resist:[]
		},
		{
			name: 'FIRE',
			strong_attack: [],
			weak_attack: [],
			immune_attack: [],
			strong_resist:[],
			weak_resist:[],
			immune_resist:[]
		},
		{
			name: 'WATER',
			strong_attack: [],
			weak_attack: [],
			immune_attack: [],
			strong_resist:[],
			weak_resist:[],
			immune_resist:[]
		},
		{
			name: 'GROUND',
			strong_attack: ['ELECTRIC', 'ROCK', 'STEEL', 'FIRE', 'POISON'],
			weak_attack: ['GRASS', 'BUG'],
			immune_attack: ['FLYING'],
			strong_resist:['POISON'],
			weak_resist:['WATER', 'GRASS', 'ICE'],
			immune_resist:['ELECTRIC']
		},
		{
			name: 'ROCK',
			strong_attack: ['FIRE', 'ICE', 'FLYING', 'BUG'],
			weak_attack: ['FIGHTING', 'STEEL', 'GROUND'],
			immune_attack: [],
			strong_resist:['POISON', 'FIRE', 'FLYING', 'BUG'],
			weak_resist:['FIGHTING', 'STEEL', 'GROUND', 'WATER', 'GRASS'],
			immune_resist:[]
		},
		{
			name: 'ELECTRIC',
			strong_attack: [],
			weak_attack: [],
			immune_attack: [],
			strong_resist:[],
			weak_resist:[],
			immune_resist:[]
		},
		{
			name: 'FLYING',
			strong_attack: ['GRASS', 'FIGHTING', 'BUG'],
			weak_attack: ['ELECTRIC', 'ROCK', 'STEEL'],
			immune_attack: [],
			strong_resist:['GRASS', 'FIGHTING', 'BUG'],
			weak_resist:['ELECTRIC', 'ICE', 'ROCK'],
			immune_resist:['GROUND']
		},
		{
			name: 'BUG',
			strong_attack: ['PSYCHIC', 'DARK', 'GRASS'],
			weak_attack: ['FIGHTING', 'POISON', 'FLYING', 'GHOST', 'STEEL', 'FAIRY'],
			immune_attack: [],
			strong_resist:['GRASS', 'DARK', 'GROUND'],
			weak_resist:['FIRE', 'ROCK', 'FLYING'],
			immune_resist:[]
		},
		{
			name: 'ICE',
			strong_attack: [],
			weak_attack: [],
			immune_attack: [],
			strong_resist:[],
			weak_resist:[],
			immune_resist:[]
		},
		{
			name: 'DRAGON',
			strong_attack: [],
			weak_attack: [],
			immune_attack: [],
			strong_resist:[],
			weak_resist:[],
			immune_resist:[]
		},
		{
			name: 'STEEL',
			strong_attack: [],
			weak_attack: [],
			immune_attack: [],
			strong_resist:[],
			weak_resist:[],
			immune_resist:[]
		},
		{
			name: 'FAIRY',
			strong_attack: [],
			weak_attack: [],
			immune_attack: [],
			strong_resist:[],
			weak_resist:[],
			immune_resist:[]
		},
		{
			name: 'DARK',
			strong_attack: [],
			weak_attack: [],
			immune_attack: [],
			strong_resist:[],
			weak_resist:[],
			immune_resist:[]
		},
		{
			name: 'GHOST',
			strong_attack: ['PSYCHIC', 'GHOST'],
			weak_attack: ['DARK'],
			immune_attack: ['NORMAL'],
			strong_resist:['POISON', 'BUG'],
			weak_resist:['GHOST', 'DARK'],
			immune_resist:['NORMAL', 'FIGHTING']
		},
		{
			name: 'PSYCHIC',
			strong_attack: [],
			weak_attack: [],
			immune_attack: [],
			strong_resist:[],
			weak_resist:[],
			immune_resist:[]
		},
		{
			name: 'FIGHTING',
			strong_attack: ['NORMAL', 'ICE', 'ROCK', 'STEEL', 'DARK'],
			weak_attack: ['POISON', 'FLYING', 'PSYCHIC', 'BUG', 'FAIRY'],
			immune_attack: ['GHOST'],
			strong_resist:['ROCK', 'STEEL', 'DARK'],
			weak_resist:['FLYING', 'PSYCHIC', 'FAIRY'],
			immune_resist:[]
		},
		{
			name: 'NORMAL',
			strong_attack: [],
			weak_attack: ['ROCK', 'STEEL'],
			immune_attack: ['GHOST'],
			strong_resist:[],
			weak_resist:['FIGHTING'],
			immune_resist:['GHOST']
		},
		

		]);

})();