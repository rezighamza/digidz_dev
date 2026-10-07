import os

path = "frontend/.next/required-server-files.json"
if os.path.exists(path):
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()
    
    # Windows path -> Linux path
    c = c.replace('D:\\\\Projects\\\\gamedz_v2\\\\frontend', '/home/sterbenrk987/digidz-store/frontend')
    c = c.replace('D:\\Projects\\gamedz_v2\\frontend', '/home/sterbenrk987/digidz-store/frontend')
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print("Fixed required-server-files.json")

def process_dir(d):
    for root, dirs, files in os.walk(d):
        for file in files:
            if file.endswith('.json') or file.endswith('.js'):
                p = os.path.join(root, file)
                try:
                    with open(p, 'r', encoding='utf-8') as f:
                        c = f.read()
                    
                    if 'D:\\\\Projects\\\\gamedz_v2\\\\frontend' in c or 'D:\\Projects\\gamedz_v2\\frontend' in c:
                        c = c.replace('D:\\\\Projects\\\\gamedz_v2\\\\frontend', '/home/sterbenrk987/digidz-store/frontend')
                        c = c.replace('D:\\Projects\\gamedz_v2\\frontend', '/home/sterbenrk987/digidz-store/frontend')
                        with open(p, 'w', encoding='utf-8') as f:
                            f.write(c)
                        print(f"Fixed {p}")
                except Exception as e:
                    pass

process_dir('frontend/.next/server')
process_dir('frontend/.next/static')
print("Done fixing paths!")
