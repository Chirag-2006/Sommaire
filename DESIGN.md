# Design System Strategy: The Luminous Obsidian

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Luminous Obsidian."** 

This system moves beyond standard SaaS "blocks" to create an environment that feels like a precision-engineered optical instrument. We avoid the "template" look by leaning into deep tonal depth, intentional asymmetry, and "light-as-data" metaphors. Instead of using borders to define space, we use light—specifically how it refracts through glass and glows against a dark void. The interface should feel less like a website and more like a high-end AI terminal: quiet, powerful, and impeccably organized.

---

## 2. Colors & Atmospheric Depth

Our palette is rooted in the `surface_container_lowest` (#0a0e18), building upward through a hierarchy of light.

### The "No-Line" Rule
Explicitly prohibit 1px solid borders for sectioning. Structural boundaries must be defined solely through background color shifts. For example:
- A sidebar uses `surface_container_low`.
- The main content area uses `surface`.
- Inner cards use `surface_container_high`.
By removing lines, the UI breathes, feeling like a single cohesive piece of hardware rather than a collection of boxes.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the following tiers to create "nested" depth:
- **Base Layer:** `surface` (#0f131d)
- **Secondary Sections:** `surface_container_low` (#171b26)
- **Interactive Cards:** `surface_container_high` (#262a35)
- **Floating Overlays:** `surface_container_highest` (#313540)

### The "Glass & Gradient" Rule
To elevate the "Electric Indigo" (`primary`) and "Cyan Glow" (`secondary`), use Glassmorphism for floating elements. 
- **Recipe:** `surface_container_high` at 60% opacity + 20px Backdrop Blur + a 10% opacity `outline_variant` stroke.
- **Signature Textures:** Use the `primary` to `secondary` gradient sparingly—only for primary action triggers or as a subtle "aurora" glow behind the main AI output to signify "processing" or "intelligence."

---

## 3. Typography: Editorial Authority

We pair **Manrope** (Display/Headlines) with **Inter** (Body/UI) to balance character with high-performance readability.

*   **Display (Manrope):** Use `display-lg` (3.5rem) with -0.04em letter spacing for hero sections. It should feel authoritative and architectural.
*   **Headlines (Manrope):** `headline-md` (1.75rem) provides clear entry points into content blocks without the need for dividers.
*   **Body (Inter):** Use `body-md` (0.875rem) as the workhorse. High-end AI tools thrive on information density; keep the leading (line-height) generous at 1.6 to prevent "wall of text" fatigue.
*   **Labels (Inter):** `label-sm` (0.6875rem) should be in `on_surface_variant` (#c7c4d7) with all-caps and 0.05em tracking for a technical, metadata feel.

---

## 4. Elevation & Depth: Tonal Layering

Traditional shadows are too heavy for this dark aesthetic. We use **Ambient Light** and **Tonal Stacking**.

### The Layering Principle
Achieve lift by placing a `surface_container_lowest` card on a `surface_container_low` section. This "recessed" effect creates a soft, natural focal point without adding visual noise.

### Ambient Shadows
For floating elements (Modals, Popovers), use a "Glow Shadow" instead of a black shadow:
- **Shadow:** 0px 20px 40px rgba(99, 102, 241, 0.08). The tinting with `primary` (#6366F1) makes the element feel like it is emitting light onto the surface below.

### The "Ghost Border" Fallback
If accessibility requires a container boundary, use the **Ghost Border**:
- `outline_variant` (#464554) at **15% opacity**. It should be felt, not seen.

---

## 5. Components & Primitive Logic

### Buttons: The "Engine"
- **Primary:** Gradient fill (`primary` to `secondary`), white text, `xl` (1.5rem) corner radius. Add a subtle inner-glow on hover.
- **Secondary:** `surface_container_highest` background with a `primary` text color. No border.
- **Tertiary:** Ghost style. No background, `on_surface_variant` text, appearing only on hover.

### AI Input Field (The Core Component)
- **Style:** `xl` (1.5rem) roundedness. `surface_container_low` background. 
- **Focus State:** Do not use a standard ring. Use a subtle glow effect (`shadow-indigo-500/10`) and transition the border-opacity of the "Ghost Border" from 10% to 40%.

### Cards & Lists: The "No-Divider" Mandate
Forbid the use of 1px divider lines. 
- **Lists:** Use `spacing-4` (1.4rem) of vertical white space to separate items.
- **Cards:** Use a `2xl` (rounded-2xl) radius. Separate content sections within a card using a subtle background shift to `surface_container_lowest`.

### Data Chips
- Small, `full` rounded. Use `surface_container_high` with `label-sm` typography. For active states, use a `primary_container` background with `on_primary_container` text.

---

## 6. Do's and Don'ts

### Do:
- **Use Asymmetry:** Place main actions slightly off-center or use varying card widths in a grid to create a bespoke, high-end editorial feel.
- **Embrace Negative Space:** If you think you need a divider, add 1rem of space instead.
- **Micro-interactions:** Use 300ms "Ease-Out" transitions for all hover states to mimic the fluid feel of liquid glass.

### Don't:
- **Never use Pure Black (#000):** It kills the "Obsidian" depth. Always stick to the `surface` tokens.
- **Avoid Heavy Gradients:** Gradients should be used as "light sources" (10-20% opacity) rather than heavy, opaque fills, except for the Primary CTA.
- **No Sharp Corners:** Every interactive element must use at least the `md` (0.75rem) radius to maintain the "Soft Minimalism" aesthetic.