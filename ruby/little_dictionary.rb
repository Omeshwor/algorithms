# Little Dictionary
# Create a function that takes an initial word and filters out an array which contains words that start with the same letters as the initial word.

# Examples
# dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]

# dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]

# dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []

# dictionary('no', ['inferno', 'notion', 'nominate', 'note', 'fairy']), ['notion', 'nominate', 'note']
# Notes
# If none of the words match, return an empty array.
# Keep the filtered array in the same relative order as the original array of words.

def dictionary(initial, words)
  words.delete_if { |word| !word.include?(initial) || !word.start_with?(initial)}
  puts words
end

def dictionary(i, w)
	w.select{|a|a.start_with?(i)}
end

# dictionary("bu", ["button", "breakfast", "border"])

# dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])

# dictionary("beau", ["pastry", "delicious", "name", "boring"])

dictionary('no', ['inferno', 'notion', 'nominate', 'note', 'fairy'])