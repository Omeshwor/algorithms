# Sum of Cubes
# Create a function that takes an array of numbers and returns the sum of its cubes.

# Examples
# sum_of_cubes([1, 5, 9]) ➞ 855
# Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

# sum_of_cubes([3, 4, 5]) ➞ 216

# sum_of_cubes([2]) ➞ 8

# sum_of_cubes([]) ➞ 0

def sum_of_cubes(nums)
  sum = 0
	nums.each do |i|
		sum = sum + (i * i * i)
	end
	return sum
end

sum_of_cubes([1, 5, 9])
sum_of_cubes([3, 4, 5])
sum_of_cubes([2])
sum_of_cubes([])
