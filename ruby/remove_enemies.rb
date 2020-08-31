# Removing Enemies
# Remove enemies from the array of people, even if the enemy shows up twice.

# Examples
# remove_enemies(["Fred"], []) ➞ ["Fred"]

# remove_enemies(["Adam", "Emmy", "Tanya", "Emmy"], ["Emmy"]) ➞ ["Adam", "Tanya"]

# remove_enemies(["John", "Emily", "Steve", "Sam"], ["Sam", "John"]) ➞ ["Emily", "Steve"]
# Notes
# All names to be removed will be in the enemies array; simply return the array, no fancy strings.

def remove_enemies(names, enemies)
  for enemy in enemies
    if names.include?(enemy)
      names.delete(enemy)
    end
  end
  return names
end


# remove_enemies(["Fred"], [])
remove_enemies(["Adam", "Emmy", "Tanya", "Emmy"], ["Emmy"])
remove_enemies(["John", "Emily", "Steve", "Sam"], ["Sam", "John"])