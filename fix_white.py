import os
import glob

def replace_in_files():
    search_dir = r"c:\Users\JayAwesome\Laurels\src"
    
    for root, _, files in os.walk(search_dir):
        for file in files:
            if file.endswith('.jsx') or file.endswith('.css'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Replace inline white styling with semantic surface
                new_content = content.replace("background: 'white'", "background: 'var(--clr-surface)'")
                new_content = new_content.replace("backgroundColor: 'white'", "backgroundColor: 'var(--clr-surface)'")
                
                # Layout.css used var(--clr-white) for background, replace it with page bg
                new_content = new_content.replace("background-color: var(--clr-white);", "background-color: var(--clr-bg-page);")

                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {file}")

if __name__ == "__main__":
    replace_in_files()
