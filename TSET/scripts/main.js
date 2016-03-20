$.ajax({
		url: "http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X",

		jsonp: "X",

		dataType: "jsonp",

		success: function( response ) {
      //debugger;
				console.log( response ); // server response

		},
    error: function (error) {
      //debugger;
      console.log(error);
    }
});

function X(info){
 var obj = info.data.recommendation[0];
 var reference = info.data.reference.item;

 var lowPrice ='<div class="col s12 class="card small">' +
	 '<div class="card white">' +
		 '<div class="card-content black-text">' +
			 '<p><b>'+ info.data.reference.item.name +'</b> </p>' +
			 '<img src="http:' + info.data.reference.item.imageName + '" width="100%" height="100%"/>';

			 if(info.data.reference.item.oldPrice) {
				 lowPrice += '<p><i><strike><font color="RED">De:'+info.data.reference.item.oldPrice+'</font></i></strike></p>';
			 }

			 lowPrice += '<p><b>Por:'+info.data.reference.item.price+'</b></p>' +
			 '<p>'+info.data.reference.item.productInfo.paymentConditions+'</p>' +
			 '</div>' +
		 '<div class="card-action">' +
			 '<a class="waves-effect waves-light btn-large">Comprar</a>' +
		 '</div>' +
	 '</div>' +
'</div>';
$("#CreateTableLowPrice").append(lowPrice);

 for (var i = 0; i < info.data.recommendation.length; i++) {
      info.data.recommendation[i]
	    var card =
        '<div class="col s4 class="card small">' +
          '<div class="card white">' +
            '<div class="card-content black-text">' +
              '<p><b>'+ info.data.recommendation[i].name +'</b> </p>' +
              '<img src="http:' + info.data.recommendation[i].imageName + '" width="100%" height="100%"/>';
              if(info.data.recommendation[i].oldPrice)
							{
                card += '<p><i><strike><font color="RED">De:'+info.data.recommendation[i].oldPrice+'</font></i></strike></p>';
              }
              card += '<p><b>Por:'+info.data.recommendation[i].price+'</b></p>' +
              '<p>'+info.data.recommendation[i].productInfo.paymentConditions+'</p>' +
              '</div>' +
            	'<div class="card-action">' +
              	'<a class="waves-effect waves-light btn-large">Comprar</a>' +
            	'</div>' +
          '</div>' +
      '</div>';
    $("#CreateTable").append(card);
  }
  console.log(info);
 }
