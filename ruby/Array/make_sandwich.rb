# Making a Sandwich

# Given an array of ingredients i and a flavour f as input, create a function that returns the array, but with the elements bread around the selected ingredient.
# Examples

def make_sandwich (arr, str)
  new_arr = []
  i = 0
  while i < arr.length
    if arr[i] == str
      new_arr.push("bread", arr[i], "bread")
    else
      new_arr.push(arr[i])
    end
    i += 1
  end
  new_arr
end

# puts make_sandwich(["tuna", "ham", "tomato"], "ham") # ➞ ["tuna", "bread", "ham", "bread", "tomato"]

puts make_sandwich(["cheese", "lettuce"], "cheese") #➞ ["bread", "cheese", "bread", "lettuce"]

puts make_sandwich(["ham", "ham"], "ham") #➞ ["bread", "ham", "bread", "bread", "ham", "bread"]

# Notes

#     You will always get valid inputs.
#     Make two separate sandwiches if two of the same elements are next to each other (see example #3).