#!/usr/bin/python3
def simple_delete(a_dictionary, key=""):
    if key in a_dictionary:
        del a_dictionary[key]
    return a_dictionary


if __name__ == "__main__":
    a_dictionary = {
        'language': "C",
        'Number': 89,
        'track': "Low",
        'ids': [1, 2, 3]
    }
    new_dict = simple_delete(a_dictionary, 'track')
    print_sorted_dictionary = __import__(
        '6-print_sorted_dictionary').print_sorted_dictionary
    print_sorted_dictionary(a_dictionary)
    print("--")
    print_sorted_dictionary(new_dict)
