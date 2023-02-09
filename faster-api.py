with open("template.py") as f:
    s:str = ''.join(f.readlines())

fields = ["name", "email", "phone"]
s = s.replace("INSERT_NAME", "Person")
s = s.replace("INSERT_FIELDS", f"{fields}")

print(s)