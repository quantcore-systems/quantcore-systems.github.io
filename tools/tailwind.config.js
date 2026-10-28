// Build: npx tailwindcss@3.4.17 -c tools/tailwind.config.js -i tools/tailwind.input.css -o assets/site.css --minify
// Run from the repository root after changing classes in index.html or admin/index.html.
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './admin/index.html'],
  safelist: [
    'text-white', 'text-blue-400', 'text-amber-500', 'text-emerald-400', 'text-slate-300',
    { pattern: /(bg|border|text)-(brand|emerald|indigo|amber|rose)-(400|500)(\/(10|20|30))?/ }
  ],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] },
      colors: {
        slate: { 850: '#111827', 900: '#0B0F17', 950: '#06090F' },
        brand: { 400: '#38BDF8', 500: '#0EA5E9', 600: '#0284C7' }
      }
    }
  }
};
