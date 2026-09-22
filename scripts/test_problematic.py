import re

with open("epubs/omul_problematic.txt", "r", encoding="utf-8") as f:
    text = f.read()

lines = text.split("\n")
cleaned = []
for l in lines[118:5320]:
    s = l.strip()
    if not s:
        continue
    if re.match(r"^\d+\s*$", s) or re.match(r"^[A-Z\s]{2,}\s+\d+$", s):
        continue
    cleaned.append(s)

paras = []
curr = []
for s in cleaned:
    if curr and curr[-1][-1] in ('.', '?', '!', '"', ':', '”', '’') and len(curr) >= 2:
        if s[0].isupper() or s[0] in ('«', '"', '“', '‘', "'"):
            paras.append(" ".join(curr))
            curr = [s]
            continue
    curr.append(s)
if curr:
    paras.append(" ".join(curr))

print(f"Total paragraphs extracted: {len(paras)}")
total_words = sum(len(p.split()) for p in paras)
print(f"Total words: {total_words}")

