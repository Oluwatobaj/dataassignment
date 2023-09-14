def sum_of_distinct_elements(set1, set2):
    # Convert the sets to lists and concatenate them
    combined_list = list(set1) + list(set2)
    
    # Use a set to store distinct elements
    distinct_elements = set()
    
    # Iterate through the combined list and add elements to the set
    for element in combined_list:
        distinct_elements.add(element)
    
    # Calculate the sum of distinct elements
    sum_result = sum(distinct_elements)
    
    return sum_result

# Example usage:
set1 = [3, 1, 7, 9]
set2 = [2, 4, 1, 9, 3]
result = sum_of_distinct_elements(set1, set2)
print(result)  # Output: 13
