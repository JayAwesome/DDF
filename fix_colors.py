import os

search_dir = r"c:\Users\JayAwesome\Laurels\src"

for root, _, files in os.walk(search_dir):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.css'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new = content
            
            # Replace inline blue colors with heading color
            new = new.replace("color: 'var(--clr-blue)'", "color: 'var(--clr-heading)'")
            new = new.replace("borderLeft: '4px solid var(--clr-blue)'", "borderLeft: '4px solid var(--clr-heading)'")
            new = new.replace("borderTop: '4px solid var(--clr-blue)'", "borderTop: '4px solid var(--clr-heading)'")
            
            if file == 'Layout.css':
                new = new.replace("color: var(--clr-blue);", "color: var(--clr-heading);")

            if new != content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new)
                print(f"Updated {file}")
