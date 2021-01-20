# Get the File Extension

# Write a function that maps files to their extension names.
# Examples

def get_extension(arr)
  new_arr = []
  split = []
  for i in arr
    new_arr = i.split('.')
    split.push(new_arr[1])
  end
  split
end

puts get_extension(["code.html", "code.css"]) 
# ➞ ["html", "css"]

# get_extension(["project1.jpg", "project1.pdf", "project1.mp3"])
# ➞ ["jpg", "pdf", "mp3"]

# get_extension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"])
# ➞ ["rb", "cpp", "py", "js"]

# Notes

# N/A