# Is Sam with Frodo?

# Sam and Frodo need to be close. If they are side by side in the array, your function should return true. If there is a name between them, return false.
# Examples

def middle_earth(arr)
  i = arr.index("Sam")
  (arr[i+1] == "Frodo" || arr[i-1] == "Frodo")? true : false
end


puts middle_earth(["Frodo", "Sam", "Gandalf"]) #➞ true

puts middle_earth(["Frodo", "Saruman", "Sam"]) #➞ false

puts middle_earth(["Orc", "Sam", "Frodo", "Legolas"]) #➞ true

# Notes

#     No matter who comes first, the result must be true if Frodo and Sam are side by side.
#     There is only one Sam and one Frodo in the array.