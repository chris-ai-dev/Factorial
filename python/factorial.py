def factorial(num):
	# your code here
	if num == 0:
		return 1
	else:
		return factorial(num-1) * num
