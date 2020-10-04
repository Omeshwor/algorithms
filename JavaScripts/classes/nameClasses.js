// Name Classes
// Write a class called Name and create the following attributes given a first name and last name (as fname and lname):

// An attribute called fullname which returns the first and last names.
// A attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.
// Remember to allow the attributes fname and lname to be accessed individually as well.
class Name {
  constructor(firstName, lastName){
    this.firstName = firstName.toLowerCase();
    this.lastName = lastName.toLowerCase();
    this.fInitial = this.firstName.charAt(0).toUpperCase();
    this.lInitial = this.lastName.charAt(0).toUpperCase();
    this.fname = this.fInitial + this.firstName.slice(1);
    this.lname = this.lInitial + this.lastName.slice(1);
    this.initials = this.fInitial + "." + this.lInitial;
    this.fullname = `${this.fname} ${this.lname}`
    }
}

// Examples
a1 = new Name("john", "SMITH")
// a1.fInitial;
console.log(a1.fname)// ➞ "John"

console.log(a1.lname)// ➞ "Smith"

console.log(a1.fullname)// ➞ "John Smith"

console.log(a1.initials)// ➞ "J.S"
// Notes
// Make sure only the first letter of each name is capitalised.
// Check the Resources tab for some helpful tutorials on JavaScript classes.