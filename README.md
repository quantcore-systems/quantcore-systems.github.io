# QuantCore Systems — сайт

Сайт: https://quantcore-systems.github.io/

## Структура
- `index.html` — витрина. Весь текст и товары берутся из `content.json`.
- `content.json` — контент сайта (товары, цены, ссылки Whop, тексты, FAQ, контакты, правовые документы).
- `admin/` — админ-панель: https://quantcore-systems.github.io/admin/
- `assets/site.css` — собранный Tailwind CSS.
- `tools/` — конфиг для пересборки CSS.

## Админ-панель
1. Создайте fine-grained токен: https://github.com/settings/personal-access-tokens/new
   - Resource owner: `quantcore-systems`
   - Repository access: Only select repositories → `quantcore-systems.github.io`
   - Permissions → Repository → **Contents: Read and write**
2. Откройте `/admin/`, вставьте токен, войдите.
3. Редактируйте и нажмите «Сохранить» (или Ctrl+S). Сайт обновится через 1–2 минуты.

Токен хранится только в вашем браузере. Никому его не передавайте; при утечке — удалите его на GitHub.

## Товары и Whop
- Статус «Скоро» — кнопка waitlist (если указана ссылка Whop) или «Notify me» (email).
- Статус «В продаже» — кнопка «Buy on Whop». Включайте только когда товар реально готов и создан на Whop.
- «Скрыт» — товар не показывается.

## Пересборка CSS (только если меняли классы в HTML)
```
npx tailwindcss@3.4.17 -c tools/tailwind.config.js -i tools/tailwind.input.css -o assets/site.css --minify
```
