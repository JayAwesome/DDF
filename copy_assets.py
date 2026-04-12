import os
import shutil
import re

source_dir = r"C:\Users\JayAwesome\Documents\AMB LORRETA\Website"
target_dir = r"c:\Users\JayAwesome\Laurels\public\assets"

os.makedirs(target_dir, exist_ok=True)

def sanitize_filename(name):
    # Convert to lowercase
    name = name.lower()
    # Replace spaces and parentheses with hyphens
    name = re.sub(r'[\s\(\)]+', '-', name)
    # Remove any trailing hyphens before extension
    name = re.sub(r'-\.', '.', name)
    # Remove multiple hyphens
    name = re.sub(r'-+', '-', name)
    return name

copied_files = []

for filename in os.listdir(source_dir):
    if filename.lower().endswith(('.jpeg', '.jpg', '.png')):
        old_path = os.path.join(source_dir, filename)
        new_name = sanitize_filename(filename)
        new_path = os.path.join(target_dir, new_name)
        shutil.copy2(old_path, new_path)
        copied_files.append(new_name)
        print(f"Copied {filename} -> {new_name}")

print("\nFinished copying", len(copied_files), "images.")
