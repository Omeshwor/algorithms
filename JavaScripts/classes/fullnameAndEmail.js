// Fullname and Email
// Create the instance properties fullname and email in the Employee class. Given a person's first and last names:

// Form the fullname by simply joining the first and last name together, separated by a space.
// Form the email by joining the first and last name together with a . in between, and follow it with @company.com at the end. Make sure the entire email is in lowercase.
class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
    this.fullname = this.firstname + " " + this.lastname
    this.email = (this.firstname + "." + this.lastname + "@company.com").toLowerCase()
	}
}
// Examples
emp1 = new Employee("John", "Smith")
console.log(emp1.fullname) // ➞ "John Smith"

emp2 = new Employee("Mary",  "Sue")
console.log(emp2.email)// ➞ "mary.sue@company.com"

emp3 = new Employee("Antony", "Walker")
console.log(emp3.firstname)//➞ "Antony"
// Notes
// The properties firstname and lastname are already made for you.

