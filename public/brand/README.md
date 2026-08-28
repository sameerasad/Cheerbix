# Brand assets

## Files

| File                     | Size    | Use                                                    |
| ------------------------ | ------- | ------------------------------------------------------ |
| `cherbix-logo.png`       | 420×176 | **Active.** Dark surfaces — navbar, mobile menu, footer, 404 |
| `cherbix-logo-light.png` | 420×176 | Light surfaces — not currently used by the site        |

Both are transparent PNGs derived from the supplied master
(`cherbix_logo1.png`). The processing was limited to:

1. **Cropping** to the artwork's bounding box, removing the empty canvas.
2. **Keying out** the near-white background canvas to transparency. This runs
   in two stages: a binary test decides what is background (safe, because the
   faintest solid artwork sits ~116 away from the canvas while the canvas
   itself is under 10), and edge coverage is measured only at the boundary,
   against the solid neighbour each edge pixel feathers into. A single
   distance ramp cannot do both jobs — the light cyan in the mark is closer to
   the white canvas than a half-covered edge of the dark blue is, so any one
   threshold either renders solid light artwork semi-transparent (dimming the
   whole logo) or leaves a pale halo along the edges.
3. **Downscaling** to 420px wide.

Letterforms, proportions, spacing and the mark are untouched.

### The dark-surface treatment

The supplied master is the **light-background** lockup. Two things about it do
not survive a move to a near-black surface, and `cherbix-logo.png` corrects
both — this is the standard reversed-logo treatment, not a redesign.

**The neutral "bix" is mid-grey on the light master.** The brand's own
dark-background master renders that same element in white (sampled:
`#fcfcfc`), so the dark variant carries the white value.

**The blue gradient bottoms out too dark.** Designed against white, its
shadow end fell to a 1.47:1 contrast ratio on `#04060a` — effectively
invisible, which made the logo read as dull. The chromatic pixels keep their
hue and saturation exactly; only lightness is lifted, with a curve calibrated
against the brand's own dark master:

| Measured on `#04060a` | Light master as-is | Dark variant | Brand's dark master |
| --- | --- | --- | --- |
| Average chromatic contrast | 5.27:1 | **7.02:1** | 6.93:1 |
| Darkest artwork | 1.47:1 | **1.93:1** | 1.75:1 |

No hue is shifted and no shape is altered. `cherbix-logo-light.png` keeps the
original colours untouched for light surfaces.

**To use the original grey instead**, change one line in
`lib/constants/site.ts`:

```ts
export const brandLogo = {
  src: "/brand/cherbix-logo-light.png", // was cherbix-logo.png
  aspectRatio: 2.386,
} as const;
```

Every logo placement on the site reads from that constant.

## App icon

`app/icon.png` and `app/apple-icon.png` (512×512) are the orbital mark cropped
from the same master and centred on the site's surface colour with a rounded
plate. Next.js picks these up automatically for the favicon and the iOS home
screen icon — no metadata configuration required.

## Replacing any of this

If you have a vector original, an SVG is preferable: it will be sharper at
every size and a fraction of the file size. Drop it in this directory, then
update `src` and `aspectRatio` in `lib/constants/site.ts`. Note that
`components/ui/logo.tsx` uses `next/image`; if you switch to SVG, change it to
a plain `<img>` since the optimizer will not process SVG by default.

## Rules

- Do not stretch, rotate, or apply effects to the logo.
- Do not substitute a text wordmark for the asset.
- Keep clear space around it equal to the height of the orbital mark.
- Do not place the dark-surface version on a light background, or vice versa.
