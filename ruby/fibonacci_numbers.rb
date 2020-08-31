# Recursion: Fibonacci Numbers
# Fibonacci numbers are created in the following way:

# F(0) = 0
# F(1) = 1
# ...
# F(n) = F(n-2) + F(n-1)
# Write a function that calculates the nth Fibonacci number.

# Examples
# fib(0) ➞ 0

# fib(1) ➞ 1

# fib(2) ➞ 1

# fib(8) ➞ 21

def fib(num)
  if (num == 0)
    return 0
  elsif (num <= 2)
    return 1
  else
    return fib(num-1) + fib(num-2)
  end
end


# Takes about 20 seconds if num == 40
def fib(n)
  return n if n <= 1
  fib(n - 1) + fib(n - 2)
end

# Non-recursive solution (takes about .000125 seconds if num == 40):
def fib2(n)
  a = 0, b = 1
  (n - 1).times do
    a, b = b, a + b
  end
  b
end

# puts fib(0)

# puts fib(1)

# puts fib(2)

puts fib(8)