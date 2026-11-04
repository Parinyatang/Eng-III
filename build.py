# สร้าง index.html สำหรับเผยแพร่: ฝัง data.js + data-extra.js ไว้ในไฟล์เดียว
# เพื่อให้ข้อความภาษาไทยไม่เพี้ยน ไม่ว่าเซิร์ฟเวอร์จะส่ง charset มาหรือไม่
#   python build.py   (แก้ที่ app.src.html / data*.js แล้วรันคำสั่งนี้ทุกครั้งก่อน publish)
import io, re, sys

src = io.open("app.src.html", encoding="utf-8").read()

if '<meta charset="utf-8">' not in src:
    src = src.replace('<title>', '<meta charset="utf-8">\n<title>', 1)

def inline(match):
    name = match.group(1)
    code = io.open(name, encoding="utf-8").read()
    if "</script" in code.lower():
        sys.exit("ERROR: %s contains a </script> sequence" % name)
    return '<script>\n/* ==== inlined from %s ==== */\n%s\n</script>' % (name, code)

out, n = re.subn(r'<script src="([\w.-]+\.js)"></script>', inline, src)
if n != 3:
    sys.exit("ERROR: expected 3 external scripts, replaced %d" % n)

io.open("index.html", "w", encoding="utf-8", newline="\n").write(out)
print("built index.html:", len(out.encode("utf-8")), "bytes, inlined", n, "data files")
