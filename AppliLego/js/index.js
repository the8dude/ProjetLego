// popover au chargement de la page
	$('#page1').on('pageshow', function () {
	    setTimeout(function () {
	        $('#popup').popup('open', {
	            transition: 'pop'
	        });
	    }, 1000);
	});
//fin popover

$(document).ready(function () {

	$("#textBox1").bind( "change", function(event, ui) {
 	
		console.log("ok");

	 	var mot = encodeURI($("#textBox1").val());
	 	console.log(mot);
	 	var donnees = "query=" + mot;
		var apiURL = "http://127.0.0.1/FilRougeWeb/WebFR/Mobile/js/encodage.php";
		console.log(apiURL);
		$.ajax({
			url: apiURL,
	 		data: donnees,
			success: function (result) 
			{
				console.log(result);
				$.mobile.changePage( "#page2", { transition: "slide", changeHash: false });
				AfficheResult(result);
			},
			error: function (request,error) 
			{
				alert('Une erreur est survenue, vous devez saisir un texte');
			}
		});
	});

	$("#button1").click(function(event, ui) {
 	
		var apiURL = "http://127.0.0.1/FilRougeWeb/WebFR/Mobile/js/encodageall.php";
		console.log(apiURL);

		$.ajax({
			url: apiURL,
	 		success: function (result) 
			{
				console.log(result);
				$.mobile.changePage( "#page4", { transition: "slide", changeHash: false });
				AfficheResultAll(result);
			},
			error: function (request,error) 
			{
				alert('Une erreur est survenue');
			}
		});
	});



	//vide le textBox en cliquand sur home
	$(".home").click(function() {

		$("#textBox1").val('');
	});

	//vide le textBox en cliquand sur back page2
	$("#back1").click(function() {

		$("#textBox1").val('');
	});


	//AFFICHAGE DES INFOS EN PAGE 3
	$(document).on('pagebeforeshow', '#page3', function(){
		$('#detailsArticle').empty();
		$.each(listeDesArticles, function(i, ligne) {
			if(ligne.RefArticle == RefArticle) {
				console.log(ligne);
				$('#detailsArticle').append('<li><img src="http://127.0.0.1/FilRougeWeb/WebFR/Mobile/'+ligne.PhotoArticle+'"></li>');
				$('#detailsArticle').append('<li>Référence: '+ligne.RefArticle+'</li>');
				$('#detailsArticle').append('<li>Article: '+ligne.AppelationArticle+'</li>');
				$('#detailsArticle').append('<li>Caractéristiques'+ligne.CaracteristiqueArticle+'</li>');
				$('#detailsArticle').append('<li>Prix de vente : '+ligne.PUHTArticle*1.20+'</li>');
				$('#detailsArticle').append('<li>Quantité : '+ligne.QteStockArticle+'</li>');
				$('#detailsArticle').listview('refresh');
			}
		});
	});



});


	//AFFICHE LES RESULTS DE LA RECHERCHE
	var listeDesArticles = null;

	function AfficheResult(data){
		listeDesArticles = data;
		$('#listeProduits').empty();
		for (var i=0; i< data.length; i++) 
		{ 
			var ligne = data[i];

			codeHTML = '<li>';
			codeHTML += '<a href="#page3" data-id="' + ligne.RefArticle + '" data-transition="slide">';
			codeHTML += '<img src="http://127.0.0.1/FilRougeWeb/WebFR/Mobile/'+ligne.PhotoArticle+'"/>';
			codeHTML += '<h3>' + ligne.AppelationArticle + '</h3>';
			codeHTML += '<p>' + ligne.CaracteristiqueArticle + '</p>';
			codeHTML += '</a>';
			codeHTML += '</li>';
			$('#listeProduits').append(codeHTML);
	 	};
	 	$('#listeProduits').listview('refresh');

	 		// AJOUT DE L'ID
	 		$(document).on('vclick', '#listeProduits li a', function(){
				 RefArticle = $(this).attr('data-id');
				 console.log("ok");
				 $.mobile.changePage( "#page3", { transition: "slide", changeHash: false });
			});

	}

	//AFFICHE LES RESULTS DE LA RECHERCHE
	var listeDesArticles = null;

	function AfficheResultAll(data){
		listeDesArticles = data;
		$('#listeProduits2').empty();
		for (var i=0; i< data.length; i++) 
		{ 
			var ligne = data[i];
			

			codeHTML = '<li>';
			codeHTML += '<a href="#page3" data-id="' + ligne.RefArticle + '" data-transition="slide">';
			codeHTML += '<img src="http://127.0.0.1/FilRougeWeb/WebFR/Mobile/'+ligne.PhotoArticle+'"/>';
			codeHTML += '<h3>' + ligne.AppelationArticle + '</h3>';
			codeHTML += '<p>' + ligne.CaracteristiqueArticle + '</p>';
			codeHTML += '</a>';
			codeHTML += '</li>';
			$('#listeProduits2').append(codeHTML);
	 	};
	 	$('#listeProduits2').listview('refresh');

	 		// AJOUT DE L'ID
	 		$(document).on('vclick', '#listeProduits2 li a', function(){
				 RefArticle = $(this).attr('data-id');
				 console.log("ok");
				 $.mobile.changePage( "#page3", { transition: "slide", changeHash: false });
			});

	}


	var RefArticle = null;