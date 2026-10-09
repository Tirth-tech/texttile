# Project Requirements: Textile Management Platform

## Milestone 1.0 Requirements

### 1. Visual Design & Theme System
- [ ] **REQ-DES-01**: Implement Artisan Studio design system with CSS custom properties (`--bg-primary: #FBF9F5`, `--accent-terracotta: #C85A32`, `--surface-card: #F4EFE6`, `--text-primary: #2D3748`).
- [ ] **REQ-DES-02**: Integrate Google Fonts (`Playfair Display` for headers and titles, `Plus Jakarta Sans` for body text & UI labels).
- [ ] **REQ-DES-03**: Create responsive, tabbed layout with sidebar navigation, search bar, system status indicator, and quick actions.

### 2. State & Data Layer
- [ ] **REQ-DAT-01**: Provide `seedData.js` featuring realistic fabric items (Egyptian Cotton, Raw Silk, Handwoven Linen, Alpaca Wool, Velvet Brocade), sample customers, orders, and sales activity.
- [ ] **REQ-DAT-02**: Build `store.js` using LocalStorage with methods to CRUD fabrics, update inventory, create/update orders, and compute dynamic statistics.

### 3. Analytics Dashboard View
- [ ] **REQ-DASH-01**: Metric cards displaying Total Revenue, Active Orders, Low Stock Alerts, and Total Fabric Stock (Yards).
- [ ] **REQ-DASH-02**: Visual charts (CSS/SVG bar & area charts) showing monthly sales trends and fabric category breakdowns.
- [ ] **REQ-DASH-03**: Quick action widget for adding stock, creating orders, and viewing urgent low-stock items.

### 4. Fabric & Product Catalog View
- [ ] **REQ-CAT-01**: Grid of fabric product cards featuring images, weave pattern, weight (GSM), width, price per yard, stock status, and tag pills.
- [ ] **REQ-CAT-02**: Search bar and multi-filter controls by Material Type (Linen, Silk, Cotton, Wool, Velvet), Stock Level, and Price range.
- [ ] **REQ-CAT-03**: Fabric detail modal showcasing full specs, sample swatch preview, and quick inventory update form.

### 5. Inventory & Stock Management View
- [ ] **REQ-INV-01**: Tabular inventory view listing SKU, Fabric Name, Composition, Roll Count, Available Yards, Reorder Level, and Actions.
- [ ] **REQ-INV-02**: In-line quick stock adjuster (+/- yards, roll additions) and low-stock highlighting.
- [ ] **REQ-INV-03**: Add New Fabric product modal with image URL, GSM, price, stock, and composition fields.

### 6. Order Management & Fulfillment View
- [ ] **REQ-ORD-01**: Order listing with status pills (Pending, In Production, Shipped, Delivered, Cancelled) and search/filter controls.
- [ ] **REQ-ORD-02**: Interactive status transition controls to advance order fulfillment pipeline.
- [ ] **REQ-ORD-03**: Order detail drawer displaying customer info, itemized fabric line items, shipping address, total price, and invoice print/download preview.

### 7. Customer Directory View
- [ ] **REQ-CUST-01**: Customer grid and list view displaying client names, company/atelier, email, total lifetime spent, and order count.
- [ ] **REQ-CUST-02**: Customer profile modal with complete order history timeline.
