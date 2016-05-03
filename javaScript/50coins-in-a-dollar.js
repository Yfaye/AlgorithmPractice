

var 	AMOUNT = 1,
	//COINS = [0.01, 0.05, 0.1, 0.25, 0.5],
	//TOTAL_COINS = 50;

	COINS = [0.01, 0.05, 0.25, 0.5],
	TOTAL_COINS = 48;

var solve = function(amount_needed, coins_remaining, coin_type, cb) {
	if (coin_type < 0) return;

	var coin = COINS[coin_type],
		max_usable_coins = Math.min(coins_remaining, Math.floor(amount_needed / coin)),
		solution = {};

	//console.info('Need: $%d, Using $%d, With: %d coins left, Max: %d', amount_needed, coin, coins_remaining, max_usable_coins);
	for (var ii = max_usable_coins; ii >= 0; ii--) {
		var 	amount_left = Math.floor(amount_needed * 100 - coin * 100 * ii) / 100,
			coins_left = coins_remaining - ii;

		if (amount_left < 0) continue;

		if (amount_left == 0 && coins_left == 0) {
			solution[coin.toFixed(2)] = ii;
			cb(null, solution);
		}

		// inception
		solve(amount_left, coins_remaining - ii, coin_type - 1, function (err, solution) {
			if (err) return cb(err);

			solution[coin.toFixed(2)] = ii;
			cb(null, solution);
		});
	}
};

var fmtSolution = function(solution) {
	var stringified = [];

	for (var coin in solution) {
		var num = solution[coin];

		if (num == 0) continue;
		switch (coin) {
			case '0.01':
				stringified.push(num + ' penn' + (num > 1 ? 'ies' : 'y'));
				break;

			case '0.05':
				stringified.push(num + ' nickel' + (num > 1 ? 's' : ''));
				break;

			case '0.10':
				stringified.push(num + ' dime' + (num > 1 ? 's' : ''));
				break;

			case '0.25':
				stringified.push(num + ' quarter' + (num > 1 ? 's' : ''));
				break;

			case '0.5':
				stringified.push(num + ' half-dollar' + (num > 1 ? 's' : ''));
				break;
		}
	}

	return stringified.join(', ');
};

solve(AMOUNT, TOTAL_COINS, COINS.length - 1, function _onSolutionFound(err, solution) {
	if (err) return;

	console.log('Solution: ', fmtSolution(solution));
});

/*
undefined
*/
/*
undefined
*/
/*
undefined
*/
/*
undefined
*/
/*
undefined
*/
/*
undefined
*/
/*
undefined
*/
/*
undefined
*/