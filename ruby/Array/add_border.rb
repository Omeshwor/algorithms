# Given a rectangular matrix of characters, add a border of asterisks(*) to it.

# Example

# For
def addBorder(pic)
  len = pic[0].size + 2
  new_arr = []
  for i in 0..pic.size+1
    if i == 0 || i == pic.size+1
      j = 0
      new_arr.push("*" * len)
    else
      new_arr.push("*" + pic[j] + "*")
      j += 1
    end
  end
  new_arr
end

picture = ["abc",
           "ded"]
# the output should be

puts addBorder(picture) #= ["*****",
#                       "*abc*",
#                       "*ded*",
#                       "*****"]


