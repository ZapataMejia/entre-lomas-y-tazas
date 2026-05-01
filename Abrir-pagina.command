#!/bin/bash
# Doble clic: instala dependencias si hace falta y abre Astro en modo desarrollo.
# El sitio queda en http://localhost:4321 (puerto por defecto de Astro).
cd "$(dirname "$0")" || exit 1

if ! command -v npm >/dev/null 2>&1; then
  echo "Necesitás Node.js y npm instalados (https://nodejs.org)."
  read -r -p "Enter para cerrar…"
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "Instalando dependencias…"
  npm install || exit 1
fi

echo "Abrimos Astro — no cierres esta ventana mientras desarrollás."
echo ""
exec npm run dev -- --open
