# https://adventofcode.com/2020/day/2

lines = [
'1-4 m: mrfmmbjxr',

]


def load_data(fileName):
    global lines
    with open(fileName) as input_data:
        lines = input_data.readlines()
    for i in range(len(lines)):
        lines[i] = lines[i].strip()


def myHelperFunction():
    global lines
    pass

def problemOne():
    global lines
    x = lines[0].split(" ")
    print (x)
        # for i in range(len(lines)):
        #     lines[i] = int(lines[i])



# def problemTwo():
#     global lines
#     for i in range (len(lines)):
#         lines[i] = int(lines[i])


if __name__ == "__main__":
    # load_data("day2-input.txt")
    problemOne()
    # problemTwo()