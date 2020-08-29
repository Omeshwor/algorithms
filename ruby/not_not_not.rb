# Not Not Not True

# Something which is not true is false, but something which is not not true is true! Create a function where given n number of "not", evaluate whether it's true or false.
# Examples

# not_not_not(1, true) ➞ false
# # Not true.

# not_not_not(2, false) ➞ false
# # Not not false.

# not_not_not(6, true) ➞ true
# # Not not not not not not true.

# Notes

# Even though this challenge can be easily solved through the use of an if | else block, you might want to solve it through the use of a Boolean Logic Operator or a Bitwise Operator, taking the opportunity to become acquainted with these methods (check the Resources tab to find specific links).

def not_not_not(n, b)
  def not_not_not(n, b)
    if b == true
      return true if n % 2 == 0
      return false
    else
      return false if n % 2 == 0 
      return true
    end
  end
end

def not_not_not(n, b)
  n.odd? ? !b : b
end

not_not_not(6, true)

