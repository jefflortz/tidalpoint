# Tidal Point Content Operations V1

## Workflow

1. Any source adapter normalizes an article into the generic intake format.
2. `POST /api/content/intake` applies Tidal Point editorial rules and creates a deterministic Sanity draft.
3. The processor generates a featured image in the established Tidal Point visual system and imports supported source images into Sanity.
4. A person reviews the article and imagery in Sanity, resolves verification flags, and publishes it.
5. A Sanity document webhook calls `POST /api/content/published` with `{ "_id": "<article-id>" }`.
6. The final published revision is used to create a separate Social Campaign draft for human approval and scheduling.

The processor never publishes an article or social campaign. Existing Sanity draft/publish controls remain the approval boundary.

Generated social copy is reviewed only under **Social Campaigns — Review & Schedule** in Studio Structure. The article's **Search & sharing** fields control link-preview metadata and hashtags; they are not post copy.
Each published article also has a **Social campaign** tab that summarizes its generated assets and links directly to the full campaign document.
Every new campaign includes separate drafts for Jeff LinkedIn, Tidal Point LinkedIn, Facebook, Instagram, short-form social, newsletter, and carousel content.

## Previewing a draft

Run the Next.js site and Sanity Studio locally, then open **Presentation** in the Studio. Select an article or use its **Used on** link to load `/articles/<slug>` in the real website template. The Presentation Tool securely enables Next.js Draft Mode through `/api/draft-mode/enable`; the site then reads the unpublished Sanity revision with a server-only token. A visible Draft preview badge confirms that the public version is not being shown.

Set `SANITY_STUDIO_PREVIEW_URL` to the matching frontend origin for each deployed Studio environment. The frontend origin must also be present in the Sanity project's CORS origins. Draft Mode can be cleared at `/api/draft-mode/disable`.

## Generic intake

Authenticate with `Authorization: Bearer <CONTENT_INTAKE_SECRET>` and send JSON:

```json
{
  "adapter": "generic",
  "article": {
    "source": "rank-score",
    "sourceId": "rank-score-article-123",
    "sourceUrl": "https://example.invalid/article/123",
    "title": "Working title",
    "body": "Markdown, HTML, or plain source text",
    "primaryKeyword": "delegate decisions in a growing business",
    "secondaryKeywords": ["decision rights", "owner dependency"],
    "pillarArticleId": "article-why-your-business-still-runs-through-you",
    "suggestedMetaDescription": "Optional source suggestion",
    "sourceScore": 87,
    "generatedAt": "2026-08-15T12:00:00Z",
    "metadata": {}
  }
}
```

`source + sourceId` is the idempotency key. An identical retry returns the existing draft. Changed content returns `409` to protect human edits. `force: true` explicitly replaces that draft.

### Direct Rank Score Markdown intake

Rank Score's observed export is plain Markdown without metadata. It can be posted directly with `Content-Type: text/markdown`; the missing metadata must be supplied as headers:

```bash
curl http://localhost:3000/api/content/intake \
  -H "Authorization: Bearer $CONTENT_INTAKE_SECRET" \
  -H "Content-Type: text/markdown" \
  -H "X-Source-Id: 4-components-of-a-scaled-business-operating-system-explained" \
  -H "X-Primary-Keyword: scaled business operating system" \
  -H "X-Secondary-Keywords: business operating system, operating system components" \
  -H "X-Pillar-Article-Id: <published-sanity-article-id>" \
  --data-binary @article.md
```

The adapter extracts the H1 as the title and preserves the complete Markdown—including links, image references, tables, and FAQ content—as editorial source material. Remote images are downloaded, uploaded to Sanity, and placed into the transformed article with their captions and attribution. Downloads are HTTPS-only, size- and type-limited, and restricted to `SOURCE_IMAGE_HOSTS` (Pexels by default).

The featured image is generated separately and never copied from the source article. Its concept is derived from the transformed article while a fixed art direction keeps it consistent with Tidal Point's existing covers: abstract tactile forms, deep navy studio setting, ivory/sandstone/sea-glass/pale wood materials, directional light, generous negative space, and no text, people, logos, or nautical imagery. A reviewer remains responsible for approving it before publication.

## Sanity webhook

Create a document webhook for Article documents and publishing events. Set the URL to `/api/content/published`, add `Authorization: Bearer <SANITY_PUBLISH_WEBHOOK_SECRET>`, and use this projection:

```groq
{"_id": _id}
```

Social generation is revision-idempotent. Re-publishing a changed article refreshes its campaign draft; an unchanged revision does not.

## Environment

Copy `.env.example` to the deployment's encrypted environment configuration. The Sanity token needs document read/write access to the production dataset. All variables are server-only. Image behavior can be configured with `FEATURED_IMAGE_MODEL`, `FEATURED_IMAGE_SIZE`, `FEATURED_IMAGE_QUALITY`, and `SOURCE_IMAGE_HOSTS`.

## Rank Score adapter contract

Before implementing a direct adapter, obtain:

- product/vendor identity and API or integration documentation;
- API base URL and authentication method;
- completed-article listing and single-article endpoints, or webhook event schema;
- a real sample payload/export and body format (Markdown, HTML, or structured blocks);
- stable article ID, timestamps, revision/update semantics, and delivery retry behavior;
- title, primary/secondary keywords, content score, source citations, suggested metadata, and image fields;
- rate limits, pagination/cursors, webhook signature verification, and export/feed schedule.

Map those fields to `SourceArticle` in `src/lib/content-ops/adapters.ts`. No Rank Score-specific field is allowed beyond that adapter boundary.

## Editorial checklist

- Confirm the selected pillar relationship and internal link in the body.
- Resolve every Editorial assessment flag and verify citations.
- Approve or replace the generated featured image and check its alt text.
- Confirm that imported inline images, captions, and attribution appear in the right sections.
- Check title, slug, description, SEO metadata, CTA, and publication date.
- Set Editorial status to Approved, preview, then publish.
- Review the generated Social Campaign separately before scheduling.
