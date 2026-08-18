/**
 * Emits a schema.org graph. The payload is generated server-side from our own
 * constants, never from user input, so serialising it directly is safe; the
 * `<` escape guards against an accidental script-tag break in future content.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\u003c"),
      }}
    />
  );
}
