# Extremely Over-Nested
# Create a function that returns the original value from an array with too many sub-arrays.

# Examples
# de_nest([[[[[[[[[[[[3]]]]]]]]]]]]) ➞ 3

# de_nest([[[[[[[true]]]]]]]) ➞ true

# de_nest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]) ➞ "edabit"
# Notes
# You only need to retrieve one element.

def de_nest(arr)
	puts arr.flatten[0]
end

de_nest([[[[[[[[[[[[3]]]]]]]]]]]])
de_nest([[[[[[[true]]]]]]])
de_nest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]])