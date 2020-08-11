# Create a function that takes a number and returns an array with the digits of the number in reverse order.Examples
# reverse_arr(1485979) ➞ [9, 7, 9, 5, 8, 4, 1]

# reverse_arr(623478) ➞ [8, 7, 4, 3, 2, 6]

# reverse_arr(12345) ➞ [5, 4, 3, 2, 1]

def reverse_arr(num)
	str = num.to_s
	arr = []
	str.each_char {|number| arr << number.to_i}
	reversed = arr.reverse
	puts reversed
end

reverse_arr(1485979)