# Secret Society

# A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

# Create a function that takes in an array of names and returns the name of the secret society.
# Examples

def society_name(friends)
  first_letters = []
  for i in friends
    first_letters.push(i[0])
  end
  first_letters.sort().join('')
end

puts society_name(["Adam", "Sarah", "Malcolm"])# ➞ "AMS"

puts society_name(["Harry", "Newt", "Luna", "Cho"])# ➞ "CHLN"

puts society_name(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])# ➞ "CJMPRR"

# Notes

# The secret society's name should be entirely uppercased.