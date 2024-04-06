import re

def format_js_object(js_text):
    formatted_text = re.sub(r'\"(\w+)\":', r'\1:', js_text)
    return formatted_text

def read_js_file(file_path):
    with open(file_path, 'r') as file:
        return file.read()

def write_js_file(content, output_filename):
    with open(output_filename, 'w') as new_file:
        new_file.write(content)
    print(f"File saved as {output_filename} in the current directory.")

file_path = 'drink-recipes.js'

original_js_content = read_js_file(file_path)

formatted_js_content = format_js_object(original_js_content)

output_filename = 'formatted_file.js'

write_js_file(formatted_js_content, output_filename)
