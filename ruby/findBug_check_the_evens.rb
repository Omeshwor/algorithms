# Find the Bug: Checking Even Numbers
# Create a function that takes in an array and returns true if all its values are even, and false otherwise.

# Not a big deal, your friend says. He writes the following code:

# def checkAllEven(arr)
#   return arr.all?{num.even?}
# end
# The code above leads to an undefined local variable, with num being undefined. Fix the code above so that all tests pass:

# Examples
# 
def checkAllEven(arr)
  def checkAllEven(arr) 
    arr.each do |num|
      return num.even?
    end 
  end
end

checkAllEven([1, 2, 3, 4])

checkAllEven([2, 4, 6])

checkAllEven([5, 6, 8, 10])

checkAllEven([-2, 2, -2, 2])

