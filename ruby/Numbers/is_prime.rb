# Check if a Number is Prime

# Create a function that returns true if a number is prime, and false otherwise. A prime number is any positive integer that is evenly divisible by only two divisors: 1 and itself.

# The first ten prime numbers are:

# 2, 3, 5, 7, 11, 13, 17, 19, 23, 29

# Examples
def is_prime(num)
  if num == 1
    return false
  else
    sqrt_num = Math.sqrt(num)
    (2..sqrt_num).each { |i| 
      if num % i == 0 && i < num
        return false
      end
    }
  true
  end
end

def is_prime(num)
	(num != 1) && !(2..num-1).any? { |x| num % x == 0 }
end

def is_prime(num)
  return if num <= 1
  (2..Math.sqrt(num)).none? { |i| (num % i).zero? }
end

# pretty slow
def is_prime(num)
  return false if num <= 1
  Math.sqrt(num).to_i.downto(2) {|i| return false if num % i == 0}
  true
end

# pretty fast
def is_prime(num)
  return false if num <= 1 || num.even?
  return true if num == 2
  3.step(Math.sqrt(num).floor, 2) { |i| return false if (num % i).zero? }
  true
end

# fastest
def is_prime(num)
  return false if num <= 1 || num.even?
  return true if num == 2
  i = 3
  top = Math.sqrt(num).floor
  while i < top
    return false if (num % i).zero?
    i += 2
  end
  true
end

puts is_prime(31) #➞ true

puts is_prime(1) #➞ false

puts is_prime(13) #➞ true

# Notes

#     A prime number has no other factors except 1 and itself.
#     If a number is odd it is not divisible by an even number.
#     1 is not considered a prime number.