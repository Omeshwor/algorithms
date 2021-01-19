# Mirror Array

# Given an integer array, transform it into a mirror.
# Examples

def mirror arr
  i = arr.length-2
  while i >= 0
    arr.push(arr[i])
    i -= 1
  end
  arr
end

puts mirror([0, 2, 4, 6]) #➞ [0, 2, 4, 6, 4, 2, 0]

puts mirror([1, 2, 3, 4, 5]) #➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]

puts mirror([3, 5, 6, 7, 8]) #➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]

# Notes

# Do not repeat the last item of the given array.