# Return the Factorial
# Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.

# Examples
# factorial(3) ➞ 6

# factorial(5) ➞ 120

# factorial(13) ➞ 6227020800
# Notes
# Assume all inputs are greater than or equal to 0.


def factorial(n)
  final = 1
  (1..n).each do |i|
    final *= i
  end
  puts final
end

factorial(3)

factorial(5)

factorial(13)

def factorial(int)
	factorial = int
	(1...int).each { |fact| factorial *= fact }
	factorial
end

def factorial(int)
	factorial = int
	(1...int).each { |fact| factorial *= fact }
	factorial
end
