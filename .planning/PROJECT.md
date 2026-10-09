# Project Overview: Textile Management Platform

## Summary
Textile is a premium, web-based e-commerce and inventory management platform tailored for artisan textile producers, fabric merchants, and apparel brands. It features a complete suite for managing fabric catalogs, inventory levels, order fulfillment, customer profiles, and business analytics.

## Core Vision & Aesthetics
- **Design System:** Artisan Studio aesthetic featuring warm linen backgrounds (`#FBF9F5`), rich terracotta accents (`#C85A32`), deep slate text (`#2D3748`), warm beige card surfaces (`#F4EFE6`), crisp Google Fonts typography (Playfair Display for headings, Plus Jakarta Sans for UI/body), smooth micro-interactions, and refined layouts.
- **Architecture:** Modular HTML5, Vanilla CSS3 with custom variables design system, and clean, decoupled ES6 JavaScript components. Fast local persistence via LocalStorage with initial seed datasets and data export/import capabilities.

## Technical Stack
- **Frontend:** HTML5, Vanilla CSS3 (Custom Variables Design System), JavaScript (ES6 Modules/Classes)
- **UI Components:** Interactive Analytics Dashboard, Fabric & Product Catalog with multi-attribute filtering, Stock & Inventory Manager with low-stock alerts, Order Processing & Fulfillment Suite, Customer Directory with purchase history.
- **Persistence:** LocalStorage API with state persistence layer and JSON seed database.

## Key Features & Scope (Milestone v1.0)
1. **Analytics Dashboard:** Revenue stats, top-selling fabrics, recent order activity, low stock alerts, interactive CSS/SVG visual charts.
2. **Fabric & Product Catalog:** High-res gallery cards, fabric composition filters (Silk, Linen, Cotton, Wool, Velvet), pattern & weight tags, price per yard/meter calculator, stock status badges, search and sorting.
3. **Inventory & Stock Manager:** Real-time quantity management, batch/roll tracking, reorder point threshold triggers, stock adjustment log, add/edit fabric modal.
4. **Order Management & Fulfillment:** Multi-status Kanban & tabular views (Pending, In Production, Shipped, Delivered, Cancelled), order detail drawer, customer info, line item breakdown, status transition controls.
5. **Customer Directory:** Client profile cards, purchase metrics, contact details, order history.
6. **Data Management:** Seed data generator, quick reset, and sample data export/import.

## Directory Structure
- `index.html` - Primary single-page application entry point
- `css/`
  - `styles.css` - Design system, utility classes, theme variables, and component styles
- `js/`
  - `app.js` - Main application controller & router
  - `store.js` - State management & LocalStorage persistence handler
  - `seedData.js` - Pre-loaded rich sample dataset for textiles, orders, customers, and metrics
  - `components/` - View modules (Dashboard, Catalog, Inventory, Orders, Customers)
