# Remove Repeated Characters

# Create a function that will remove any repeated charcter(s) in a word passed to the function. Not just consecutive characters, but characters repeating anywhere in the input.
# Examples

def unrepeated(str)
  arr = str.split("")
  arr.uniq.join()
end

puts unrepeated("hello") #➞ "helo"

puts unrepeated("aaaaa") #➞ "a"

puts unrepeated("WWE!!!") #➞ "WE!"

puts unrepeated("call 911") #➞ "cal 91"

puts unrepeated("altwaff test") #, "altwf es"
# Notes

#     No more than two words will be passed.
#     Notice that a string is iterable.

