def select_arr(arr)
  # select and return all odd numbers from the Array variable `arr`
    arr.select {|a| a % 2 === 1}
end

def reject_arr(arr)
  # reject all elements which are divisible by 3
    arr.reject {|a| a % 3 === 0}
end

def delete_arr(arr)
  # delete all negative elements
    arr.delete_if {|a| a < 0}
end

def keep_arr(arr)
  # keep all non negative elements ( >= 0)
    arr.keep_if {|a| a > 0}
end


arr = [3, 4, 2, 1, 2, 3, 4, 5, 6]


def iter_hash(hash)
  # your code here
  hash.each do |k, v|
      puts k
      puts v
  end
end

hash = {1: "harry", 2: "potter", 3: "stephen", 4: "silvia", 5: "amelia", 6: "emilia"}


# In this challenge, a hash object called hackerrank is already created. You have to add

# A key-value pair [543121, 100] to the hackerrank object using store
# Retain all key-value pairs where keys are Integers ( clue : is_a? Integer )
# Delete all key-value pairs where keys are even-valued.

# Enter your code here.
hackerrank.store(543121, 100)
hackerrank.keep_if { |key| key.is_a? Integer}
hackerrank.delete_if {|key| key % 2 === 0 }


# blocks
def factorial
  yield
end

n = gets.to_i
factorial do 
  val = 1
  while(n > 1)
    val *= n
    n = n -1
  end
    puts val
end

def func_any(hash)
  # Check and return true if any key object within the hash is of the type Integer
  # If not found, return false.
  hash.any? {|key, value| key.is_a? Integer}
end

def func_all(hash)
  # Check and return true if all the values within the hash are Integers and are < 10
  # If not all values satisfy this, return false.
  hash.all? {|key, value| value < 10}
end

def func_none(hash)
  # Check and return true if none of the values within the hash are nil
  # If any value contains nil, return false.
  hash.none? {|key, value| value == nil}
end

def func_find(hash)
  # Check and return the first object that satisfies either of the following properties:
  #   1. There is a [key, value] pair where the key and value are both Integers and the value is < 20 
  #   2. There is a [key, value] pair where the key and value are both Strings and the value starts with `a`.
  hash.find { |key, value| ([key,value].all?(Integer) && value < 20)  || 
      ([key, value].all?(String) && value[0] == "a")}
end


marks = {"Ramesh":23, "Vivek":40, "Harsh":88, "Mohammad":60}
> group_by_marks(marks, 30)
=> {"Failed"=>[["Ramesh", 23]], "Passed"=>[["Vivek", 40], ["Harsh", 88], ["Mohammad", 60]]}


def group_by_marks(marks, pass_marks)
  # your code here
    marks.group_by { |key, value| value > pass_marks ? "Passed" : "Failed" }
end

# Passing blocks is one way to pass functions as arguments to other functions.

# Blocks are one of the very few exceptions to the "everything is an object" rule in Ruby. Blocks are not objects, and they can't be saved to variables.

# Proc objects are blocks of code that can be bound to a set of local variables. You can think of a proc object as a "saved" block.

# Procs are a great way of keeping your code DRY. DRY stands for Do not Repeat Yourself.

# Example:

# CODE

# def foo(a, b, my_proc)
#     my_proc.call(a, b)
# end

# add = proc {|x, y| x + y}

# puts foo(15, 10, add)
# OUTPUT

# 25
# In this example, we have created the proc add, which adds two numbers.
# The proc add is passed as a parameter to the method foo.
# In the method foo, my_proc.call(a, b) executes the proc.

# Task

# You are given a partially complete code. Your task is to fill in the blanks (______).

# The square_of_sum method computes the sum of the elements in an input array and returns the square of the summed elements.

# For example:

# Input array: [1, 2, 3]
# Output: 36

def square_of_sum (my_array, proc_square, proc_sum)
  sum = proc_sum.call(my_array)
  proc_square.call(sum)
end

proc_square_number = proc { |x| x*x }
proc_sum_array     = proc { |x| x.sum }
my_array = gets.split().map(&:to_i)

puts square_of_sum(my_array, proc_square_number, proc_sum_array)


# In Partial Application, we create a lambda that takes a parameter and returns a lambda that does something with it.

# Example:

# multiply_function = -> (number) do
#    -> (another_number) do
#        number * another_number
#    end
# end

# doubler = multiply_function.(2)
# tripler = multiply_function.(3)

# puts doubler.(4)
# puts tripler.(4)
# In the above example, the lambda will take number as a parameter, and return a lambda. When you call this lambda with another_number, it will return the product of the two.

# Task

# You are given a partially complete code. Your task is to fill in the blanks (_______).

# Here, combination is a variable that stores a partial application which computes combination .

combination = -> (n) do
  -> (an) do
      n + an
  end
end

n = gets.to_i
r = gets.to_i
nCr = combination.(n)
puts nCr.(r)


def prime?(number)
  return false if [0, 1].include?(number)
  (2...number).none? { |n| number % n == 0}
end