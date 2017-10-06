$(document).ready(function(){
	var i=0;
	var ii=0;
	$.ajax({
		type: "GET",
		url: "source.xml",
		dataType: "xml",
		success: function(xml) {
			var cols = $(xml).find('cols').text();
			var width = $(xml).find('width').text();
			var height = $(xml).find('height').text();
			$('<style></style>').html('img{width:'+width+'px;height:'+height+'px;}').appendTo('head');
			$(xml).find('bookmark').each(function(){				
				var title = $(this).find('title').text();
				var url = $(this).find('url').text();
				var thumb = $(this).find('thumb').text();
				if(i%cols == 0){
					ii++;
					$('table').append('<tr id=id'+ii+'></tr>');
				}
				$('<td></td>').html('<a href="'+url+'"><img src="thumbs/'+thumb+'" /></a>').appendTo('#id'+ii);
				i++;
			});
		}
	});
});