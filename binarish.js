function binarish(number) {
	if(number == 0)
		return 'zero';
	var names = ['ki', 'mo', 'di', 'so', 'fi', 'no', 'li', 'po'];
	var name = "";
	if(number < 0) {
		name += 'neg';
		number *= -1;
	}
	for(var i = names.length -1; i >= 0; i--) {
		var position = 1 << i;
		if(number & position)
			name += names[i];
	}
	return name
}

function oneszero(number) {
	var name = [];
	var i = 0;
	while(number >> i) {
		if((number >> i) & 1)
			name.push('1');
		else
			name.push('0');
		i++;
	}
	return name.reverse().join('');
}

if(process && process.argv.length >= 3)
	console.log(binarish(process.argv[2]))
