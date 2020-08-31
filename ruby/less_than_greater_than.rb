# Less Than, Greater Than
# Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

# Examples
# arr_between(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]

# arr_between(1, 10, [1, 10, 25, 8, 11, 6]) ➞ [8, 6]

# arr_between(7, 32, [1, 2, 3, 78]) ➞ []

def arr_between(num1, num2, arr)
  newarr = []
  for num in arr
    if num > num1 &&  num < num2
      newarr << num
    end
  end
  return newarr
end

# arr_between(3, 8, [1, 5, 95, 0, 4, 7])

# arr_between(1, 10, [1, 10, 25, 8, 11, 6])

arr_between(7, 32, [1, 2, 3, 78])