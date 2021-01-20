# Capture the Rook

# Write a function that returns true if two rooks can attack each other, and false otherwise.
# Examples

def can_capture(arr)
  arr.join().split('').uniq.count != arr.join().split('').count
end

puts can_capture(["A8", "E8"]) #➞ true

puts can_capture(["A1", "B2"]) #➞ false

puts can_capture(["H4", "H3"]) #➞ true

puts can_capture(["F5", "C8"]) #➞ false

# Notes

#     Assume no blocking pieces.
#     Two rooks can attack each other if they share the same row (letter) or column (number).