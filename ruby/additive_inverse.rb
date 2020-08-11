# A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.

# Examples
# additive_inverse([5, -7, 8, 3]) ➞ [-5, 7, -8, -3]

# additive_inverse([1, 1, 1, 1, 1]) ➞ [-1, -1, -1, -1, -1]

# additive_inverse([-5, -25, 35]) ➞ [5, 25, -35]

def additive_inverse(arr)
  newarr = []
  arr.each do |i|
    if i >= 0
      newarr << (-(i))
    end
    if i <= 0
      newarr << (-(i))
    end
  end
  return newarr
end

additive_inverse([5, -7, 8, 3])

# additive_inverse([1, 1, 1, 1, 1])

# additive_inverse([-5, -25, 35])