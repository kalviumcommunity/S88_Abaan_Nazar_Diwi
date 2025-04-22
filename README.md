
Title : Design It Wear It (DIWI): A Custom Shirt Design & Branding Platform

Name : Abaan Nazar
Reg No. : 24BTCSES01

Idea

DIWI is a platform that allows users to design and order custom shirts with their preferred designs, logos and text. The platform will provide a user-friendly interface for users to upload their designs, choose colors, and select the type of fabric they want. The platform will also offer a variety of printing options,

Description

DIWI is a web application which enables users to design custom shirts by selecting single components such as collars, cuffs, plackets, hems, and fabric types. Users are also able to upload and position their own PNG logo onto various parts of shirts, see the final design in real-time via a canvas, and order a quote. The site has an admin panel for handling incoming requests and designs.
 

Daily Plan
----------

Phase 1: Setup & Component UI (Day 1–10)

Day 1-2:
Project setup (Vite + React + Tailwind)


Setup folder structure, routing (React Router), Zustand store


Day 3-4:
Create basic UI layout for shirt customization


Implement sidebar or tabs for: Collar, Cuff, Placket, Hem, Material


Day 5-6:
Build selection menus with dummy data for each shirt part


Add image preview based on selected components (basic layered image change)


Day 7-8:
Integrate Fabric.js for dynamic canvas


Load base shirt and selected parts onto the canvas


Day 9:
Enable basic zoom, rotate, and pan on canvas for better UX


Day 10:
Internal UI Review + Fixes



Phase 2: PNG Logo Placement + Canvas Logic (Day 11–18)
Day 11-12:
Allow uploading PNG logos


Place and move logos using Fabric.js


Day 13:
Enable logo resizing, rotating, deleting


Day 14-15:
Add option to place logo on specific areas (collar, chest, cuff, etc.)


Limit placement area with guidelines or zones


Day 16:
Layer management (shirt part images under, logo above)


Day 17:
Add preview/export of current design as PNG/JPG


Day 18:
Canvas Functionality Review



Phase 3: Backend + API Integration (Day 19–26)
Day 19-20:
Setup backend: Node.js + Express


MongoDB schema: ShirtParts, Designs, Quotes


Day 21:
API: Fetch shirt parts + their images from DB


Upload component images to Cloudinary


Day 22-23:
API: POST request to submit customized design (with image + metadata)


Day 24:
API: Save logo positions, user inputs


Day 25:
Integrate frontend with backend (populate components dynamically)


Day 26:
Backend Functionality Review



Phase 4: Quote Request + Cart (Day 27–32)
Day 27-28:
Add “Add to Cart” feature for customized shirts


Save design preview, selections, and logo positions


Day 29:
Build request quote form (user enters name, email, qty, etc.)


Day 30:
Submit request to backend and notify admin


Day 31:
Display success message, store request in MongoDB


Day 32:
Cart + Quote Request Review



Phase 5: Admin Dashboard (Day 33–38)
Day 33-34:
Admin login panel and auth system


Day 35-36:
Admin UI: View quote requests, user details, and shirt previews


Day 37:
Add status update system (Pending, Approved, Rejected)


Day 38:
Admin Dashboard Review


Phase 6: Mobile & UI Polishing (Day 39–41)
Day 39:
Make UI mobile responsive with Tailwind


Day 40:
Add loading states, error handling, toasts


Day 41:
Final UI polishing and animations



Phase 7: Deployment + Marketing Prep (Day 42–45)
Day 42:
Deploy Frontend (Vercel)


Deploy Backend (Render or Railway)


Day 43:
Test end-to-end flow (design → cart → quote → admin)


Day 44:
Write short user documentation


Create 2-3 social media posts/mockups for launch


Day 45:
Soft Launch + Feedback Collection.
