# Stretched Words
# Write a function that takes a string, and returns a new string with any duplicate consecutive letters removed.

# Examples
def unstretch(str)
  return str.squeeze
end

puts unstretch("ppoeemm") #➞ "poem"

puts unstretch("wiiiinnnnd") #➞ "wind"

puts unstretch("ttiiitllleeee") #➞ "title"

puts unstretch("cccccaaarrrbbonnnnn") #➞ "carbon"
# Notes
# Final strings won't include words with double letters (e.g. "passing", "lottery").