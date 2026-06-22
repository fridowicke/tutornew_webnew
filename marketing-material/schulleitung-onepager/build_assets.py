from pathlib import Path
import base64
import os
import re
import urllib.request

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent.parent
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"


def get(url, binary=False):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    data = urllib.request.urlopen(req, timeout=40).read()
    return data if binary else data.decode()


# Fonts: Sour Gummy + Noto Sans.
css_urls = [
    "https://fonts.googleapis.com/css2?family=Sour+Gummy:wght@400;600;700;800&display=swap",
    "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700;800&display=swap",
]
out = []
for css_url in css_urls:
    css = get(css_url)
    for match in re.finditer(r"url\((https://fonts\.gstatic\.com/[^)]+\.woff2)\)", css):
        url = match.group(1)
        font = get(url, binary=True)
        css = css.replace(url, "data:font/woff2;base64," + base64.b64encode(font).decode())
    out.append(css)

fonts_path = HERE / "fonts_embedded.css"
fonts_path.write_text("\n".join(out))
print("fonts css", round(os.path.getsize(fonts_path) / 1024), "KB")

imgs = {
    "avatar": (ROOT / "shared/assets/quack/quack-avatar.png", "image/png"),
    "laptop": (ROOT / "shared/assets/quack/quack-laptop.png", "image/png"),
    "founders": (ROOT / "guf.jpeg", "image/jpeg"),
    "zensi": (ROOT / "shared/assets/quack/zensi-hopf.jpg", "image/jpeg"),
    "ta-logo": (ROOT / "shared/assets/media-outlets/Tagesanzeiger.svg", "image/svg+xml"),
    "hero": (HERE / "assets/screenshot_visual.webp", "image/webp"),
}
lines = []
for key, (path, mime) in imgs.items():
    image = path.read_bytes()
    lines.append('  --img-%s: url("data:%s;base64,%s");' % (key, mime, base64.b64encode(image).decode()))

images_path = HERE / "images.css"
images_path.write_text(":root{\n" + "\n".join(lines) + "\n}\n")
print("images css", round(os.path.getsize(images_path) / 1024), "KB")
