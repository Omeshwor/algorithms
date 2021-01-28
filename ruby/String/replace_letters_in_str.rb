# H4ck3r Sp34k

# Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
# Examples
# def hacker_speak(str)
#   arr = str.split('')
#   new_arr = []
#   for i in arr
#     case i
#     when "a"
#       new_arr.push("4")
#     when "e"
#       new_arr.push("3")
#     when "i"
#       new_arr.push("1")
#     when "o"
#       new_arr.push("0")
#     when "s"
#       new_arr.push("5")
#     else
#       new_arr.push(i)
#     end
#   end
#   new_arr.join()
# end

def hacker_speak(str)
  str.gsub(/[aeios]/, "a" => "4", 'e' => "3", "i" => "1", "o" => "0", "s" => "5")
end

puts hacker_speak("javascript is cool") #➞ "j4v45cr1pt 15 c00l"

puts hacker_speak("programming is fun")# ➞ "pr0gr4mm1ng 15 fun"

puts hacker_speak("become a coder") #➞ "b3c0m3 4 c0d3r"

# Notes

# In order to work properly, the function should replace all "a"s with 4, "e"s with 3, "i"s with 1, "o"s with 0, and "s"s with 5.