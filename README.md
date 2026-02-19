This is a ecom sample website , still in developement phase.


following this folder structure
e-com/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx                → Home page (/)
│   │
│   ├── products/
│   │   ├── page.tsx            → All products page (/products)
│   │   └── [id]/
│   │       └── page.tsx        → Single product page (/products/123)
│   │
│   ├── cart/
│   │   └── page.tsx            → Cart page (/cart)
│   │
│   ├── checkout/
│   │   └── page.tsx
│   │
│   ├── api/
│   │   ├── products/
│   │   │   └── route.ts        → Products API
│   │   └── users/
│   │       └── route.ts        → Users API
│   │
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── CartItem.tsx
│   └── Button.tsx
│
├── lib/
│   ├── dbConnect.ts
│   └── helpers.ts
│
├── models/
│   ├── Product.ts
│   └── User.ts
│
├── context/ (optional)
│   └── CartContext.tsx
│
├── data/ (optional for seeding)
│   └── sampleData.ts
│
├── .env.local
├── package.json
└── tsconfig.json
