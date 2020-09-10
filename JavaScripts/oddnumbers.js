var sum = 0;
function printOddNumber()
{
	for (var i = 1; i < 10; i = i +2)
	{
	sum = sum + i;
	console.log(i);
	console.log(sum);
	}
}
printOddNumber();