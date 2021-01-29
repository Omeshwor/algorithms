# Hot Pics of Danny DeVito!

# I'm trying to watch some lectures to study for my next exam but I keep getting distracted by meme compilations, vine compilations, anime, and more on my favorite video platform.

# Your job is to help me create a function that takes a string and checks to see if it contains the following words or phrases:

#     "anime"
#     "meme"
#     "vines"
#     "roasts"
#     "Danny DeVito"

# If it does, return "NO!". Otherwise, return "Safe watching!".
# Examples

def prevent_distractions(str)
	str.match(/anime|meme|vine|roasts|Danny DeVito/) ? "NO!" : "Safe watching!"
end

def prevent_distractions(str)
	words = ["anime", "meme", "vine", "roasts", "Danny DeVito"]
	words.any? {|s| str.include?(s) } ? "NO!" : "Safe watching!"
end

def prevent_distractions(str)
	no_words = ["anime", "meme", "vine", "roast", "Danny DeVito"]
	no_words.each {|word| return "NO!" if str.include?(word) }
	"Safe watching!"
end

puts prevent_distractions("vines that butter my eggroll") #➞ "NO!"

# puts prevent_distractions("Hot pictures of Danny DeVito") #➞ "NO!"

# puts prevent_distractions("How to Be a Productive Member of Society") #, "Safe watching!"
puts prevent_distractions("How to ace BC Calculus in 5 Easy Steps") #➞ "Safe watching!"