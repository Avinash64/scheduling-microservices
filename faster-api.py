with open("template.py") as f:
    s:str = ''.join(f.readlines())
name = "sites"
fields = ["address", "capacity"]

name = "sessions"
fields = ["player",]
s = s.replace("INSERT_NAME", name)
s = s.replace("INSERT_FIELDS", f"{fields}")

print(s)

with open(name + "_ms.py", 'w') as f:
    f.write(s)