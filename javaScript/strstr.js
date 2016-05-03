var strstr = function strstrfunc(source, target){
	if (source == null || target == null) {
		return -1;
	}
	if (typeof source != "string" || typeof target != "string") {
		return -1
	}
	if (source.length < target.length) {
		return -1;
	}

	var i = 0;
	for ( ; i < source.length - target.length + 1; i++) {
		var j = 0;
		for (; j < target.length; j++) {
			if (source.charAt(i+j) != target.charAt(j)) {
				break;
			}
		}
		if (j == target.length) {
			return i;
		}
	}
	return -1;
};

strstr("abc","bc");

/*
-1
*/