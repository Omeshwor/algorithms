# You work in a toy car workshop, and your job is to build toy cars from a collection of parts. Each toy car needs 4 wheels, 1 car body, and 2 figures of people to be placed inside. Given the total number of wheels, car bodies and figures available, how many complete toy cars can you make?

# Examples
# cars(2, 48, 76) ➞ 0
# # 2 wheels, 48 car bodies, 76 figures

# cars(43, 15, 87) ➞ 10

# cars(88, 37, 17) ➞ 8

def cars(wheels, bodies, figures)
	complete = 0
	while (wheels >= 4 and bodies >= 1 and figures >= 2) do
		complete = complete + 1
		wheels = wheels - 4
		bodies = bodies - 1
		figures = figures - 2
	end		
	puts complete
end

cars(43, 15, 87)

cars(88, 37, 17)
