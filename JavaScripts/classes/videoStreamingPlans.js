// Video Streaming Plans
// Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties of the following:

// BasicPlan	StandardPlan	PremiumPlan
// ✓	✓	✓	canStream
// ✓	✓	✓	canDownload
// ✓	✓	✓	hasSD
// ✓	✓	hasHD
// ✓	hasUHD
// 1	2	4	numOfDevices
// $8.99	$12.99	$15.99	price

class BasicPlan {
	static canStream = true;
	static canDownload = true;
	static numOfDevices = 1;
	static hasSD = true;
	static hasHD = false;
	static hasUHD = false;
	static price = '$8.99';
}

class StandardPlan extends BasicPlan{
  static hasHD = true;
  static numOfDevices = 2;
  static price = '$12.99'
}

class PremiumPlan extends StandardPlan {
  static hasUHD = true;
  static numOfDevices = 4;
  static price = '$15.99'
}
// Examples
console.log(BasicPlan.hasSD) // ➞ true 

console.log(PremiumPlan.hasSD) // ➞ true

console.log(BasicPlan.hasUHD) // ➞ false

console.log(BasicPlan.price) // ➞ '$8.99'

console.log(PremiumPlan.numOfDevices) // ➞ 4

