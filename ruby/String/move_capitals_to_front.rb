# Move Capital Letters to the Front

# Create a function that moves all capital letters to the front of a word.
# Examples

def cap_to_front(s)
	upcase_letters = []
	downcase_letters = []
	s.each_char do |char| 
		if char == char.upcase 
			upcase_letters << char 
		else 
			downcase_letters << char
		end 
	end 
	new_str = upcase_letters + downcase_letters 
	new_str.join("")
end

puts cap_to_front("hApPy") #➞ "APhpy"

# cap_to_front("moveMENT") ➞ "MENTmove"

# cap_to_front("shOrtCAKE") ➞ "OCAKEshrt"

# Notes

# Keep the original relative order of the upper and lower case letters the same.