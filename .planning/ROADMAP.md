# Development Roadmap: Textile Management Platform

## Phase 1: Foundation & Core Design System
- **Goal:** Set up project structure, CSS design system with Artisan Studio aesthetics, and state persistence with rich seed data.
- **Plans:**
  - Plan 1: Create project layout, `css/styles.css` design system, typography, navigation bar, and state store (`js/store.js` & `js/seedData.js`).
- **Verification:** App loads with Artisan Studio theme, sidebar navigation switches active view containers, and local storage initializes correctly.

## Phase 2: Analytics Dashboard & Data Visualizations
- **Goal:** Implement the main Dashboard view with KPI cards, sales trend charts, low stock alerts, and quick actions.
- **Plans:**
  - Plan 1: Build dashboard overview components, KPI summary cards, SVG trend charts, and recent activity feed.
- **Verification:** Dashboard correctly calculates total metrics from store state and renders interactive visual charts.

## Phase 3: Fabric Product Catalog & Inventory Manager
- **Goal:** Build the interactive fabric catalog with filtering/search and the full inventory table with stock adjustment features.
- **Plans:**
  - Plan 1: Implement Fabric Product Catalog grid with filters, search, and fabric detail modal.
  - Plan 2: Implement Inventory Management table with stock adjustment controls, low-stock indicators, and Add New Fabric modal.
- **Verification:** Filtering catalog by material updates cards smoothly; modifying stock levels in inventory updates state and catalog badges in real-time.

## Phase 4: Order Management Pipeline & Customer Directory
- **Goal:** Complete the order processing workflow with status transitions, invoice detail drawer, and customer profiles.
- **Plans:**
  - Plan 1: Build Order Management list & Kanban views with status progression and invoice detail modal.
  - Plan 2: Build Customer Directory grid with customer order history modals and state integration.
- **Verification:** Orders can change statuses cleanly; customer totals reflect order updates; invoices render complete breakdown.
