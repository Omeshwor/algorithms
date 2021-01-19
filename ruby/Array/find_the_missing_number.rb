# Find the Missing Number

# Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
# Examples

def missing_num(arr)
  new_arr = (1..10).to_a
  arr2 = arr.sort()
  i = 0
  while i < new_arr.length
    if arr2[i] != new_arr[i]
      return new_arr[i]
    end
    i += 1
  end
end


puts missing_num([1, 2, 3, 4, 6, 7, 8, 9, 10]) # ➞ 5

puts missing_num([7, 2, 3, 6, 5, 9, 1, 4, 8])# ➞ 10

puts missing_num([10, 5, 1, 2, 4, 6, 8, 3, 9])# ➞ 7

# Notes

#     The array of numbers will be unsorted (not in order).
#     Only one number will be missing.