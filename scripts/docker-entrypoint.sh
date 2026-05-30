#!/bin/sh
set -e

escape_js() {
	printf '%s' "$1" | sed "s/\\\\/\\\\\\\\/g; s/'/\\\\'/g"
}

cat > /usr/share/nginx/html/config.js <<EOF
window.__ENV__ = {
  VITE_URL_API: '$(escape_js "${VITE_URL_API:-}")'
};
EOF

exec nginx -g "daemon off;"
