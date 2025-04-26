
---

#  Dashboard-Main

A professional and beautifully designed Admin Dashboard Template built with **React.js** and **Chakra UI**.

It provides a clean and modular structure, making it ideal for analytics dashboards, admin panels, and management systems.

---



---

## 📂 Project Structure

```
dashboard-main/
├── public/            # Static files (HTML, favicon, manifest)
├── src/
│   ├── assets/        # Images and SVGs
│   ├── components/    # UI Components (Cards, Charts, Sidebar, Navbar, etc.)
│   ├── layouts/       # Different layouts (Admin, Auth, RTL)
│   ├── theme/         # Chakra UI theme customizations
│   ├── data/          # Sample static data
│   ├── views/         # App pages (Dashboard, Billing, Profile, etc.)
│   ├── index.js       # App entry point
│   └── routes.js      # Application routing
├── documentation/     # Project documentation
├── package.json       # Project metadata and dependencies
├── README.md          # Project overview (this file)
└── other config files
```

---

## 🛠️ Installation



### Step 1: Install Dependencies

If you face **peer dependency issues** , use:

```bash
npm install --legacy-peer-deps
```

Otherwise:

```bash
npm install
```

### Step 2: Start the Development Server

```bash
npm start
```

Open your browser at: [http://localhost:3000](http://localhost:3000)

---

## 📜 Available Scripts

| Command             | Purpose                                      |
| ------------------- | -------------------------------------------- |
| `npm start`         | Runs the app in development mode             |
| `npm run build`     | Builds the app for production                |
| `npm run test`      | Launches the test runner                     |
| `npm run lint`      | Runs code linter                             |

---

## 🎨 Customization

- **Theme Customization**  
  Modify theme files inside `src/theme/` to change default styles.

- **Add New Pages**  
  Create new page components inside `src/views/`, and add routes in `src/routes.js`.

- **Modify Sidebar/Menu Items**  
  Update links inside `src/components/Sidebar/Sidebar.js`.

- **Add New Components**  
  Create reusable components inside `src/components/` and import them wherever needed.

---

## 📦 Deployment

To build for production:

```bash
npm run build
```



---

## 📚 Folder Details

### `/public/`
Contains the static HTML and assets used across the app.

### `/src/assets/`
Stores images, icons, and SVG files.

### `/src/components/`
All reusable React components like Cards, Navbars, Sidebar, Tables, and more.

### `/src/layouts/`
Main layout structures: Admin layout, Auth layout (Sign In/Sign Up), and RTL layout.

### `/src/theme/`
Custom Chakra UI theme settings (e.g., colors, fonts, breakpoints).

### `/src/data/`
Predefined data for charts, tables, and dashboard metrics.

### `/src/views/`
All pages like Dashboard, Billing, Tables, Profile, and Auth screens (SignIn/SignUp).

---

## 🧹 Best Practices Followed

- Modular code structure
- Chakra UI theme extensibility
- Reusable and maintainable components
- Organized folder hierarchy
- Ready for production build

---

