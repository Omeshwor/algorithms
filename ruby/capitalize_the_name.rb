# Capitalize the Names
# Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

# Examples
# cap_me(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]

# cap_me(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]

# cap_me(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]
# Notes
# Don't change the order of the original array.
# Notice in the second example above, "MABELLE" is returned as "Mabelle".Capitalize the Names

def cap_me(arr)
  newarr = []
  arr.each do |i|
    newarr << i.capitalize
  end
  puts newarr
end

cap_me(["mavis", "senaida", "letty"])