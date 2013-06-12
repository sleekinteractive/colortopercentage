//////////////////////////////////////////////////////////////////////////////////
// written by Michael prosser. Sleek Interactive www.sleekinteractive.com
// use it as you wish!
//////////////////////////////////////////////////////////////////////////////////

function colorToPercentage(start_color,end_color,percentage){
  	
		// check if it is hex or rgb;
		
		var start_color = start_color;
		
		var start_color = start_color.substring(4);
		var parts = start_color.substring(0,(start_color.length-1));
		
		var parts = parts.split(',');
		
		var r1 = $.trim(parts[0]);
		var g1 = $.trim(parts[1]);
		var b1 = $.trim(parts[2]);
		
		var end_color = end_color;
		
		var end_color = end_color.substring(4);
		var parts2 = end_color.substring(0,(end_color.length-1));
		
		var parts2 = parts2.split(',');
		
		var r2 = $.trim(parts2[0]);
		var g2 = $.trim(parts2[1]);
		var b2 = $.trim(parts2[2]);
		
		var output = 'rgb(' + rgbetween(r1,r2,percentage) + ',' + rgbetween(g1,g2,percentage) + ',' + rgbetween(b1,b2,percentage) + ')';
		
		return output;
		
	}
	
	function rgbetween(n1,n2,percent){
		
		var nn = parseInt(n2) - parseInt(n1);
		var pp = parseInt(nn * percent);
		nn = parseInt(n1) + pp;
		
		return nn;
		
	}
  
  
