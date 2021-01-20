# Converting Hashes to Arrays

# Write a function that converts a hash into an array, where each element represents a key-value pair in the form of an array.
# Examples

def convert_to_array(hash)
  hash.to_a
end

puts convert_to_array({ "a" => 1, "b" => 2 }) #➞ [["a", 1], ["b", 2]]

puts convert_to_array({ "shrimp" => 15, "tots" => 12 }) #➞ [["shrimp", 15], ["tots", 12]]

puts convert_to_array({}) #➞ []

# Notes

# Return an empty array if the hash is empty.