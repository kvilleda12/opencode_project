# Baseline — Basketball, by feel

Baseline is a basketball guide for new players and curious fans. It explains reading the floor, introduces four player roles, and includes a 24-second shooting game. All artwork is drawn in CSS; no external assets, accounts, frameworks, or package installation are required.

## Run locally

Prerequisites: Python 3 and a modern browser. Git is needed to clone the repository.

```bash
git clone git@github.com:kvilleda12/opencode_project.git
cd opencode_project
git switch feat/baseline-class-website
python3 -m http.server 8000 --bind 127.0.0.1 --directory public
```

If you already have the repository, run the final command from its root. Open **http://localhost:8000/** in your browser. Stop the server with **Ctrl+C** in the terminal running it. Open the HTTP address, rather than opening the HTML file directly. If port 8000 is occupied, use `8001` in both the command and browser URL.

## Explore and review

- Read “Every possession has a language” for practical basketball tips.
- In “Find your role,” click a role or focus the selected tab and use Left/Right Arrow, Home, or End. The description, color, and attributes update together.
- Start the shooting game, then click the target or press Enter/Space while it is focused. Attempts score two or three points when they go in. Three-point attempts have a lower simulated success rate. End the round early with “End round,” or wait for the clock to expire. Your personal best is saved in browser local storage when available.
- Use Tab to check focus visibility and navigation. Resize the browser to a phone width and confirm the content remains readable.

Source files are in `public/`. This is the authored source directory, not generated build output. Documentation and screenshot evidence live outside the served directory.

## Verification and submission

Agent checks: JavaScript syntax; successful HTTP delivery; browser tests of role selection, keyboard shooting, countdown, ending/restarting a round, and no horizontal page overflow at 320, 390, 768, and 1280 CSS pixels. See REFLECTION.md for details and `evidence/` for the browser screenshot.

The student should run the site and verify these behaviors personally before submitting. The repository is private as checked during preparation: ensure the instructor is invited and has accepted access. The agent did not change repository visibility or invite anyone.

Submission branch: https://github.com/kvilleda12/opencode_project/tree/feat/baseline-class-website
