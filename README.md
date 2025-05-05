# javascript

Jvascript : PHP
.split : explode() //convert string into an array/ can't for int
.join : implode() //convert array to strings and works with intjoin/adds( , -)
.slice : array_slice() // to remove arrays(1, -2)
.reduce : reduce() or array_reduce// to sum up the array
mvs.filter(function (move) {
return move > 0;
}); : array_filter($mvs, function($move) {
return $move > 0;
});
.map: array_map() // works like foreach but returns in array format
