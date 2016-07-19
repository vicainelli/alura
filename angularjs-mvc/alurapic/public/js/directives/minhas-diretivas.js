angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {

	// DDO = directive definition object
	var ddo = {};

	ddo.restric = "AE";

	ddo.scope = {
		titulo: '@'
	};

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo;

});

/*
<meu-painel titulo="{{foto.titulo}}">

</meu-painel>
*/