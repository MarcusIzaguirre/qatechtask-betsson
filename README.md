## This repository contains:
    - UI E2E tests for SauceDemo using Playwright + TypeScript.
    - API tests for Swagger Petstore using Postman (with validation scripts and polling).

🧰 Stack
    - Node.js 18+
    - Playwright (@playwright/test) + TypeScript


⚙️ Setup
Install dependencies
    - npm install
    - npx playwright install --with-deps


🧪 UI — Running tests (Playwright)
Run all UI tests, execute the command:
    - npx playwright test --project=ui-chrome

Run a specific file
    - npx playwright test --project=ui-chrome tests/ui/specs/checkout.spec.ts


🧩 UI automation design

Hybrid Actions + Page Objects:
    - elements/ holds stable locators (getByRole, data-test, etc.).
    - actions/ exposes business flows
    - Specs remain clean, focusing on steps


🌐 API — Running in Postman
1) Import Collection & Environment

Import:
    - tests/api-postman/tests/Functional testing.postman_collection.json
    - tests/apipostman/tests/petstore.postman_environment.json

2) Suggested order in the Postman Runner

POST Create Pet
    - Generates petId and petName (Pre-request).
    - Asserts 200, response time, and payload fields.

GET Pet by ID (poll)
    - Polls until 200 (handles Petstore’s occasional 404 right after POST due to replication).
    - Validates id/name.

DELETE Pet
    - Accepts 200/204/404 (idempotent).
    - Clears environment variables (petId, petName).

GET Pet by ID invalid
    - Uses petId_invalid or the same petId after DELETE.
    - Expects 404/400 and checks code/type/message in the error payload.
