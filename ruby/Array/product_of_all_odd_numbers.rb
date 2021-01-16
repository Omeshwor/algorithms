# Product of All Odd Integers

# Create a function that returns the product of all odd integers in an array.
# Examples

def odd_product(arr)
  sum = 1
  for i in arr
    if i.odd?
      sum *= i
    end
  end
  sum
end


puts odd_product([3, 4, 1, 1, 5]) #➞ 15

puts odd_product([5, 5, 8, 2, 4, 32]) #➞ 25

puts odd_product([1, 2, 1, 2, 1, 2, 1, 2]) #➞ 1

# Notes

# N/A