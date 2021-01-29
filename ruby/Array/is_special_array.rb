# Special Arrays

# An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.
# Examples
def is_special_array(arr)
  ans = false
  for i in 0..arr.length-1
    if ((i%2 == 0 && arr[i]%2 == 0) || (i%2 ==1 && arr[i]%2 ==1))
      ans = true
    else
      return ans = false
    end
  end
  ans
end

def is_special_array(arr)
	arr.each_with_index.all? { |n, i| n.even? == i.even? }
end

puts is_special_array([2, 7, 4, 9, 6, 1, 6, 3]) #➞ true
# # Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

puts is_special_array([2, 7, 9, 1, 6, 1, 6, 3]) #➞ false
# # Index 2 has an odd number 9.

puts is_special_array([2, 7, 8, 8, 6, 1, 6, 3]) #➞ false
# # Index 3 has an even number 8.