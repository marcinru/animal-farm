# Animal Farm

Dopasuj zwierzęta na farmie

## Instalacja i uruchomienie

Testowy projekt stworzony do ćwiczenia React, TypeScript i Tailwind CSS.

### Wymagania

- Node.js (zalecana wersja LTS)
- npm (dołączony do Node.js)

### Klonowanie i instalacja

1. Sklonuj repozytorium:
   ```bash
   git clone <url-repozytorium>
   cd animal-farm
   ```
2. Zainstaluj zależności:
   ```bash
   npm install
   ```

### Uruchamianie projektu

- **Tryb deweloperski:**

  ```bash
  npm run dev
  ```

  Aplikacja będzie dostępna pod adresem `http://localhost:5173` (lub innym wskazanym w konsoli).

- **Budowanie wersji produkcyjnej:**

  ```bash
  npm run build
  ```

- **Podgląd wersji produkcyjnej:**
  ```bash
  npm run preview
  ```

### Formatowanie kodu

Projekt korzysta z **Prettier** do automatycznego formatowania kodu. Możesz sformatować wszystkie pliki ręcznie:

```bash
npm run format
```

Aby kod formatował się automatycznie przy każdym zapisie w WebStorm, upewnij się, że opcja **"Reformat on save"** jest włączona w ustawieniach (`Settings` > `Languages & Frameworks` > `Prettier`).

### Testy

Projekt wykorzystuje **Cypress** do testów komponentów (Component Testing).

- **Otwarcie okna interaktywnego Cypress:**

  ```bash
  npm run cypress:open
  ```

- **Uruchomienie wszystkich testów w konsoli (headless):**

  ```bash
  npm run cypress:run
  ```
