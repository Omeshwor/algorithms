# Largest Swap

# Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

# To illustrate:

def largest_swap(num)
  str = num.to_s
  if str[0] >= str[1]
    true
  else
    false
  end
end


puts largest_swap(27) #➞ false

puts largest_swap(43) #➞ true

# If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.
# Examples

puts largest_swap(14) #➞ false

puts largest_swap(53) #➞ true

puts largest_swap(99) #➞ true

# Notes

# Numbers with two identical digits (third example) should yield true (you can't do better).