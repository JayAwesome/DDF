import urllib.request
import re

url = "https://dumelofound.lovable.app"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    
    links = re.findall(r'href="(/assets/index\-[a-zA-Z0-9]+\.css)"', html)
    for link in links:
        full_link = "https://dumelofound.lovable.app" + link
        print("Fetching:", full_link)
        css = urllib.request.urlopen(urllib.request.Request(full_link, headers={'User-Agent': 'Mozilla/5.0'})).read().decode('utf-8')
        
        # print first few CSS variables from :root matching colors
        root_block = re.search(r':root\s*\{([^}]+)\}', css)
        if root_block:
            vars = re.findall(r'(--[^:]+:\s*[^;]+;)', root_block.group(1))
            for v in vars:
                print(v)
except Exception as e:
    print("Error:", e)
