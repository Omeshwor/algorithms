require 'yaml'
# First we define methods
# Save method
def yaml_save object, filename
  File.open filename, 'w' do |f|
    f.write(object.to_yaml)
  end
end

#Load/read method
def yaml_load filename
  yaml_string = File.read filename

  YAML::load yaml_string
end
#... what we are writing to file
test_array = ["Slick Shoes",
              "Bully Blinders",
              "Pinchers of Peril"]

# name of the file we are writing to 
filename = "DatasGadgets.txt"

# we save it
yaml_save test_array, filename

# we load/read it
read_array = yaml_load filename

puts (read_array == test_array)