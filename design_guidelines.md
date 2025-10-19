# Design Guidelines: Landing Page de Vendas - Dieta Anti-Inflamatória

## Design Approach
**Reference-Based Marketing Landing Page**: Drawing inspiration from high-converting sales pages (Shopify, Teachable, Kajabi) with emotional storytelling, clear value propositions, and strategic CTAs throughout the journey.

## Core Design Elements

### A. Color Palette

**Primary Brand Colors:**
- Purple: 270 70% 55% (primary brand)
- Deep Purple: 270 65% 45% (gradients, depth)
- Vibrant Green: 142 70% 45% (CTAs, success states)
- Warm Yellow: 45 85% 55% (emphasis sections, highlights)

**Neutral Foundation:**
- Pure White: 0 0% 100% (main background)
- Light Gray: 0 0% 97% (alternating sections)
- Text Dark: 0 0% 15% (headings)
- Text Medium: 0 0% 35% (body copy)

**Accent Colors (Minimal Use):**
- Success Green: 142 70% 50%
- Alert Red: 0 70% 50%

### B. Typography

**Font Stack:**
- System fonts via Tailwind default (fast loading, clean aesthetics)

**Hierarchy:**
- Hero Headlines: text-4xl md:text-5xl, font-bold, leading-tight
- Section Headers: text-3xl md:text-4xl, font-bold, mb-12
- Subheadings: text-xl md:text-2xl, font-normal/semibold
- Body Copy: text-lg, leading-relaxed, text-gray-700
- CTA Buttons: text-xl, font-bold
- Small Print: text-sm, opacity-90

### C. Layout System

**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16 (p-4, py-16, gap-6, space-y-8)

**Container Strategy:**
- Hero/Feature sections: max-w-3xl mx-auto
- Comparison grids: max-w-4xl mx-auto
- Consistent horizontal padding: px-6
- Vertical section spacing: py-16

**Grid Patterns:**
- Single column for narrative sections
- 2-column grid for comparisons (md:grid-cols-2)
- Full-width sections with inner constraints

### D. Component Library

**Hero Section:**
- Full-width gradient background (from-purple-600 to-purple-800)
- Centered content with headline hierarchy
- Product visualization card (white bg, rounded-2xl, shadow-2xl)
- Primary CTA (green-500, rounded-full, large padding)
- Price display (text-3xl, bold)
- Trust badge (white bg-opacity-20, rounded-full)

**Content Cards:**
- White backgrounds (bg-white)
- Generous padding (p-6 to p-10)
- Rounded corners (rounded-xl to rounded-2xl)
- Subtle shadows (shadow-md to shadow-2xl)
- Hover effects on CTAs only (transform hover:-translate-y-1)

**Feature Lists:**
- Numbered circles (bg-green-500, rounded-full, flex layout)
- Clear title + description pattern
- Vertical stacking with space-y-4

**Testimonials:**
- Horizontal flex layout with avatar (80x80, rounded-full, border-4 border-purple-200)
- Italic quote text
- Bold author attribution
- White card containers

**CTA Buttons:**
- Primary: bg-green-500 hover:bg-green-600, rounded-full, px-12 py-5
- Shadow-lg with hover:shadow-xl
- Transform on hover for depth
- Always paired with price display nearby

**Alternating Section Backgrounds:**
- White (bg-white) for odd sections
- Light gray (bg-gray-50) for even sections
- Creates natural visual rhythm without borders

### E. Visual Patterns

**Gradients:**
- Hero: from-purple-600 to-purple-800 (diagonal via to-br)
- Emphasis: from-yellow-400 to-yellow-600 (diagonal)
- Used sparingly for maximum impact

**Shadows & Depth:**
- Cards: shadow-md (default state)
- Product cards: shadow-2xl
- Buttons: shadow-lg, hover:shadow-xl
- Creates floating, modern aesthetic

**Borders & Corners:**
- Generous rounding: rounded-xl (12px), rounded-2xl (16px)
- Pill shapes for badges: rounded-full
- No hard edges - all softened

**Icons & Emojis:**
- Strategic emoji use for quick visual scanning (✅, ❌, 🔒, 📘)
- Checkmarks and X marks in comparison sections
- Minimal decorative icons

### F. Responsive Behavior

**Breakpoints:**
- Mobile-first base styles
- md: breakpoint for 2-column layouts, larger text
- Fluid scaling for all typography (text-4xl md:text-5xl pattern)

**Mobile Optimizations:**
- Single column on small screens
- Reduced padding (py-12 vs py-16)
- Stacked CTAs
- Touch-friendly button sizes (min py-5)

## Content Strategy

**Above-the-Fold Priority:**
- Clear product promise (headline)
- Emotional hook (subheadline)
- Product visualization
- Single primary CTA with price
- Trust signal (guarantee badge)

**Section Flow:**
1. Hero with immediate value proposition
2. Pain points (empathy, problem identification)
3. Solution reveal (hope, transformation promise)
4. What's included (concrete deliverables)
5. Secondary CTA
6. Qualification (for who/not for)
7. Social proof (testimonials)
8. FAQ (objection handling)
9. Final CTA (urgency, commitment)

**Copywriting Tone:**
- Direct, conversational Portuguese
- Empathetic problem framing
- Specific benefits over features
- Realistic expectations (30 days, commitment required)
- Trust-building through transparency

## Images

**Hero Product Mockup:**
- Centered, 320px wide card
- Gradient placeholder for ebook cover
- Use actual product mockup when available
- Shadow-2xl for premium feel

**Testimonial Avatars:**
- 80x80 circular photos
- Border: 4px purple-200
- Placeholder: via.placeholder.com/80 (replace with real photos)

**No Hero Background Image:**
- Solid gradient background preferred
- Keeps focus on copy and CTA
- Faster page load

## Critical Success Elements

- **Multiple CTAs:** Repeat CTA at hero, mid-page, and footer
- **Price Transparency:** Always display $10 near CTAs
- **Guarantee Prominence:** 7-day money-back badge visible
- **Scannability:** Numbered lists, checkmarks, clear headers
- **White Space:** Generous padding prevents overwhelming feeling
- **Trust Signals:** Testimonials, guarantee, immediate access promises
- **Mobile-First:** Touch targets, readable text, single column on small screens