# Given an array of strings, return another array containing all of its longest strings.

# Example
def allLongestStrings(inputArray)
  n = inputArray.max{|a, b| a.size <=> b.size}.size
  inputArray.select { |i| i.size >= n }
end

puts allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])

# For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
# allLongestStrings(inputArray) = ["aba", "vcd", "aba"].