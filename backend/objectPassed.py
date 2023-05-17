import datetime
import math, time


def objectPassed(last_positions, positions, screen_dimensions, line_position=50, debug=False):
    '''
    :param last_positions: positions but from last frame
        [[x, y], [x, y], ...]
    :param positions: positions is a table of the centers of the bounding box of each face
        [[x, y], [x, y], ...]
    :param screen_dimensions: dimensions of screen (only width is used)
        [width, height]
    :param line_position: where the verticle line is that objects cross to count (in % of screen)
        x%
    :param debug: prints things or not
        True/False
    :return: false or table of data
        [[time, position], [time, position], ...]
    '''

    def Print(*args):
        if debug:
            to_print = ""
            for v in args:
                to_print += str(v)
            print(to_print)

    def distance(c1, c2):
        return math.sqrt((c2[0] - c1[0]) ** 2 + (c2[1] - c1[1]) ** 2)

    if positions and type(positions) == list and last_positions and type(last_positions) == list:
        match = []  # match positions to closest last_positions point

        lp_copy = last_positions.copy()

        for i in range(len(positions)):

            Print("checking ", positions[i], " in ", lp_copy)

            if len(lp_copy) > 0:
                match.append(lp_copy[0])

                for lp in lp_copy:  # find closest point from last_positions to positions[i]

                    Print(" |__ checking ", lp, ", closest is ", match[i])

                    if distance(positions[i], lp) < distance(positions[i], match[i]):
                        match[i] = lp

                Print(" -*- matched ", positions[i], " with ", match[i])

                lp_copy.remove(match[i])
            else:
                match.append(None)

        # check if object crossed line
        line_position /= 100
        line_position *= screen_dimensions[0]

        result = []

        for m in range(len(match)):
            if match[m] is not None:
                if match[m][0] <= line_position < positions[m][0]:
                    result.append([time.time(), positions[m]])

        return result

    return False


# test cases
test_cases = [
    [  # test case #1

        [  # last positions
            [4, 5],  # goes on to line
            [0, 4],  # never passes line
            [6, 6],  # already past line
            [4, 5]   # passes line
        ],
        [  # positions
            [5, 5],
            [2, 4],
            [7, 6],
            [6, 5],  # passes line
            [1, 2]   # false positive
        ],
        1  # expected results

    ],
    [  # test case #2

        [  # last positions
            [0, 3],  # never passes line, idle
            [7, 1],  # already past line
            [4, 1],  # passes line
            [5, 2],  # doesn't leave line
            [1, 3],  # passes line quickly, may cut
            [5, 4]   # false positive
        ],
        [  # positions
            [0, 3],
            [9, 1],
            [6, 2],  # passes line
            [5, 3],
            [6, 3]   # passes line
        ],
        2  # expected results

    ]
]

for tc in test_cases:
    result = objectPassed(tc[0], tc[1], [10, 10], debug=True)
    print("\nran test case, got:\n", result)
    print("expected ", tc[2], " results, got ", len(result), "\n")

'''
CURRENT FAILURES:
people who cut or walk faster aren't matched right
certain tests fail
    should still work with high fps tho, because higher fps = less change in position
doesn't account for jittering from inaccuracies with recognition
'''
