# https://adventofcode.com/2020/day/1

lines = []


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
    for i in range(len(lines)):
        lines[i] = int(lines[i])

    for x in lines:
        for y in lines:
            if 2020 ==x+y:
                print('a =',x,'b =',y,'a + b =',x+y,'a*b =',x*y)
                return x*y


def problemTwo():
    global lines
    for i in range (len(lines)):
        lines[i] = int(lines[i])
    for x in lines:
        for y in lines:
            for z in lines:
                if 2020 == x+y+z:
                    print('a =',x,'b =',y,'c =',z,'a + b c =',x+y+z,'a * b * c =',x*y*z)
                    return x*y*z

if __name__ == "__main__":
    load_data("day1-input.txt")
    problemOne()
    problemTwo()