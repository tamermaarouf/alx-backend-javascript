export default function returnHowManyArguments(...nums) {
	let total = 0;
	for (const num of nums) {
		total++;
	}
	return total;
}
