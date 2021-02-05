# Transform Upvotes

# Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.
# Examples
def transform_upvotes(str)
  # return is an array
  new_arr = []
  # split string with space and convert to array
  arr = str.split(' ')
  puts arr[0].sub("k", "")
  # iterate through the array
  for i in arr
    # find out if the string contains k
    if i.include?("k")
      # strip the k from the string
      # convert the str to integer
      # multiply by 1000
      # push to new array
      new_arr.push(i.sub("k", "").to_f * 1000)
    else
      new_arr.push(i.to_f)
    end
  end
  new_arr
end

puts transform_upvotes("500k 12k 1.2k 58")

puts transform_upvotes("6.8k 13.5k") #➞ [6800, 13500]

puts transform_upvotes("5.5k 8.9k 32") #➞ [5500, 8900, 32]

puts transform_upvotes("20.3k 3.8k 7.7k 992") #➞ [20300, 3800, 7700, 992]

# Notes

# Return the upvotes as an array.