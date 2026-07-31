#!/usr/bin/env python3
"""
Serve dist/ directory with proper MIME type for .json5 files.
Usage: python3 serve.py [port]
"""
import http.server
import mimetypes
import sys
import os

# ── 替换 gkd.json5 中的 checkUpdateUrl 为本地地址 ──
GKD_FILE = "gkd.json5"
OLD_URL = "https://raw.githubusercontent.com/pchaos/subscription-template/main/dist/gkd.version.json5"
NEW_URL = "http://192.168.124.87:8080/gkd.version.json5"

if os.path.exists(GKD_FILE):
    with open(GKD_FILE, "r", encoding="utf-8") as f:
        content = f.read()
    if OLD_URL in content:
        content = content.replace(OLD_URL, NEW_URL)
        with open(GKD_FILE, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"checkUpdateUrl replaced: {OLD_URL} -> {NEW_URL}")
    else:
        print("checkUpdateUrl already local, no change needed")
else:
    print(f"{GKD_FILE} not found, skipping url replacement")

# ── MIME 类型注册 ──
mimetypes.add_type("text/plain", ".json5")
mimetypes.add_type("application/json", ".json")
mimetypes.add_type("text/html", ".md")

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080

handler = http.server.SimpleHTTPRequestHandler
handler.directory = "dist"

print(f"Serving: http://0.0.0.0:{PORT}/gkd.json5")
http.server.HTTPServer(("0.0.0.0", PORT), handler).serve_forever()
