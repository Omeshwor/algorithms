# Pythagorean Triplet

# Create a function that validates whether three given integers form a Pythagorean triplet. The sum of the squares of the two smallest integers must equal the square of the largest number to be validated.
# Examples

def is_triplet(n1,n2,n3)
  n1**2 + n2**2 == n3**2 or n1**2 + n3**2 == n2**2 or n2**2 + n3**2 == n1**2
end
puts is_triplet(3, 4, 5) #➞ true
# # 3² + 4² = 25
# # 5² = 25

puts is_triplet(13, 5, 12)# ➞ true
# # 5² + 12² = 169
# # 13² = 169

puts is_triplet(1, 2, 3)# ➞ false
# # 1² + 2² = 5
# # 3² = 9

# Notes

# Numbers may not be given in a sorted order.