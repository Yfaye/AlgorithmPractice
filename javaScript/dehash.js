var letters = "acdfgilmnoprstuw";

function dehash(h,d,l,b) {
	var hashednum = h;


	if (hashednum > 9007199254740992) {
		console.log("Sorry, out of ability of dehash function");
		return;
	}

	var dic = d;
	var targetlength = l;
	var hashbase = b;

	var pos = 0;
	var str = [];

	for (var i = 0; i < targetlength; i++){
		pos = hashednum % hashbase;
		str[targetlength - 1 - i] = dic.charAt(pos);
		hashednum = (hashednum - pos)/hashbase;
	}
	if (hashednum === 7) {
		return str.join('');
	} else {
		console.log("Oops, is there anything wrong with the hashed number?")
		return;
	}
}

dehash(292681030017238,letters,10,23);