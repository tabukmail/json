$(document).ready( function() {
 $.getJSON("https://api.cryptowat.ch/markets/prices", function(data){
       $.each(data.result, function(){
	         $("ul").append("<li>bitfinex:btcusd: "+this['bitfinex:btcusd']+"</li>
                                                               <br />");
	   });
 });
