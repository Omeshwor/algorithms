# Apples and Bananas

# Write a function, .vreplace() that extends the String class by replacing all vowels in a string with a specified vowel.
# Examples

class String
  def vreplace(v)
    gsub(/[aeiou]/, v)
  end
end

puts "apples and bananas".vreplace("u") #➞ "upplus und bununus"

puts "cheese casserole".vreplace("o") #➞ "chooso cossorolo"

puts "stuffed jalapeno poppers".vreplace("e") #➞ "steffed jelepene peppers"

# Notes

# Words will be lowercased.



