import os

def process_dir(d):
    if not os.path.exists(d): return
    for root, dirs, files in os.walk(d):
        for file in files:
            if file.endswith('.json') or file.endswith('.js'):
                p = os.path.join(root, file)
                try:
                    with open(p, 'r', encoding='utf-8') as f:
                        c = f.read()
                    
                    if 'D:\\\\Projects\\\\digidz_dev' in c or 'D:\\Projects\\digidz_dev' in c:
                        c = c.replace('D:\\\\Projects\\\\digidz_dev', '/root/digidz_dev')
                        c = c.replace('D:\\Projects\\digidz_dev', '/root/digidz_dev')
                        
                        # Just in case they cloned to their home dir:
                        c = c.replace('/root/digidz_dev', '/home/sterbenrk987/digidz_dev')
                        
                        with open(p, 'w', encoding='utf-8') as f:
                            f.write(c)
                        print(f"Fixed {p}")
                except Exception as e:
                    pass

process_dir('.next')
print("Done fixing paths!")
