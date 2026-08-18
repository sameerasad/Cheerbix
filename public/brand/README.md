# Brand assets

## Files

| File                     | Size    | Use                                                    |
| ------------------------ | ------- | ------------------------------------------------------ |
| `cherbix-logo.png`       | 420×176 | **Active.** Dark surfaces — navbar, mobile menu, footer, 404 |
| `cherbix-logo-light.png` | 420×176 | Light surfaces — not currently used by the site        |

Both are transparent PNGs derived from the supplied master
(`cherbix_logo1.png`). The processing was limited to:

1. **Cropping** to the artwork's bounding box, removing the empty canvas.
2. **Keying out** the near-white background canvas to transparency, with the
   background un-composited from anti-aliased edges so no pale halo appears on
   a dark surface.
3. **Downscaling** to 420px wide.

Letterforms, proportions, spacing and the mark are untouched.

### The one colour decision

On the supplied light master, the "bix" element is a neutral mid-grey. The
brand's own dark-background master renders that same element in white
(sampled: `#fcfcfc`). Because this site is dark throughout,
`cherbix-logo.png` carries the white value — the standard reversed-logo
treatment for a dark surface, and consistent with how the brand already
presents itself there.

Every blue and teal pixel — the entire orbital mark and the word "cher" — is
exactly as drawn in the master.

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
