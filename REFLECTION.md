# Agent-assisted development reflection

## Model and provider

OpenAI Codex (GPT-6-based coding agent), provided by OpenAI. The session identifies the model family; an exact backend model snapshot was not exposed.

## Useful prompt

“please continue building the website” followed by the assignment's website and repository requirements gave the agent a concrete checklist: meaningful content, a working interaction, responsive and keyboard-accessible controls, a localhost server, a work branch, documentation, and evidence.

## Observed tool action

The agent used shell tools to inspect the existing HTML/CSS/JavaScript and Git remote, created `feat/baseline-class-website`, and started Python's HTTP server with `public/` as its document root. It also drove an isolated Chrome session to check the served page and interactions.

## Improvement checked before and after

Before: role buttons had tab roles and click handlers, but there was no arrow-key handler, every button was in the Tab sequence, and the content panel lacked a programmatic label linking it to the selected role.

After: only the selected role is in the Tab sequence. Left/Right Arrow cycle roles, Home/End select the first/last role, and the panel label tracks the selected tab. A Chrome keyboard check selected Shooter from Creator using Right Arrow and verified the focused tab, displayed text, and panel label.

Other changes included a skip link, focus outlines, a disabled target outside active rounds, an End round button, practical basketball tips replacing an unexplained statistic, and content-flow layout for role attributes.

## How the interactions work

The role explorer reads a JavaScript object for each selected role and updates the panel text, attributes, and color. The shooting game enables a button target and moves it to random court positions. Each activation simulates a shot: two-point attempts have an 84% success chance and three-point attempts 68%. A one-second timer counts down from 24. Ending a round disables the target, restores the start control, and stores a new best score locally when storage is available. No data is sent to a backend.

## Verification and personal review

Agent browser checks passed for role click/arrow navigation, Enter-key shooting feedback, countdown, early ending, automatic ending, and responsive page width at 320, 390, 768, and 1280 CSS pixels. The role attributes remained below their description at all four widths. JavaScript syntax was also checked with `node --check public/script.js`.

Student review remains a separate step: open the localhost page, try the controls, inspect narrow and wide layouts, and add your own observations here before submission. This file records agent actions, not a claim that the student has already completed that review. Ensure the instructor can access the private GitHub repository.

## Screenshot limitation

A real Chrome viewport preview is saved at `evidence/site-preview.png`. macOS refused the window capture needed to include the address bar, so the required `evidence/site-localhost.png` still needs to be taken by the student. Instructions are in `evidence/README.md`. The viewport preview is not represented as satisfying that requirement.
