#!/usr/bin/env python3
"""
Serve dist/ directory with proper MIME type for .json5 files.
Usage: python3 serve.py [port]
"""
import http.server
import mimetypes
import sys

# Register .json5 as text/plain (GKD needs this to parse correctly)
mimetypes.add_type('text/plain', '.json5')
mimetypes.add_type('application/json', '.json')

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080

handler = http.server.SimpleHTTPRequestHandler
handler.directory = 'dist'

print(f'Serving: http://0.0.0.0:{PORT}/gkd.json5')
http.server.HTTPServer(('0.0.0.0', PORT), handler).serve_forever()