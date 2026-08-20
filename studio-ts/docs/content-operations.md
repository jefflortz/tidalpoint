# Tidal Point Content Operations V1

## Weekly automated rhythm

- Thursday morning: Vercel checks RankScore's article list and processes the oldest unprocessed article. The engine selects the closest existing pillar, creates an article draft and social campaign, and records the rationale in Sanity.
- Friday 3:00 p.m. Eastern: approved packages are locked for publication. Unapproved articles and their social dates move forward one week automatically.
- Monday 7:30 a.m. Eastern: approved, scheduled article drafts are published.
- Social targets are prefilled for Tidal Point LinkedIn Wednesday at 4:00 p.m., Instagram Wednesday at 6:00 p.m., and Facebook Thursday at 9:00 a.m. Eastern. Only individually approved posts are sent to Buffer.
- Production cron endpoints require Vercel's `CRON_SECRET`. Source IDs and fingerprints keep discovery idempotent.

Recurring calendar reminders are the V1 notification layer: Thursday noon review, Friday 10:00 a.m. approval check, and Friday 3:05 p.m. cutoff confirmation.

## Workflow

1. Any source adapter normalizes an article into the generic intake format.
2. `POST /api/content/intake` applies Tidal Point editorial rules and creates a deterministic Sanity draft.
3. The processor researches credible supporting sources, generates a featured image in the established Tidal Point visual system, and creates two context-sensitive inline editorial images.
4. A person reviews the article, imagery, pillar selection, and social package in Sanity and approves it.
5. A Sanity document webhook calls `POST /api/content/published` with `{ "_id": "<article-id>" }`.
6. Scheduled weekly intake creates the Social Campaign alongside the article draft; manual publishing still creates it after publication.
7. Publishing an approved Social Campaign triggers `/api/content/social/schedule`; individually approved, future-dated posts are scheduled through Buffer.

The scheduler publishes only article drafts approved before the weekly cutoff. Social Campaign publishing and individual post approval remain explicit human controls.

Generated social copy is reviewed only under **Social Campaigns — Review & Schedule** in Studio Structure. The article's **Search & sharing** fields control link-preview metadata and hashtags; they are not post copy.
Each published article also has a **Social campaign** tab that summarizes its generated assets and links directly to the full campaign document.
Every new campaign includes separate drafts for Jeff LinkedIn, Tidal Point LinkedIn, Facebook, Instagram, short-form social, newsletter, and carousel content.

## Buffer scheduling

Connect Jeff LinkedIn, Tidal Point LinkedIn, the Tidal Point Facebook Page, Instagram professional account, and X profile in Buffer. Each channel must use `America/New_York`. Store the Buffer personal API key as the server-only `BUFFER_API_KEY` environment variable.

Create a Sanity document webhook for Social Campaign documents and publishing events. Set the URL to `/api/content/social/schedule`, add `Authorization: Bearer <SANITY_PUBLISH_WEBHOOK_SECRET>`, use the projection `{"_id": _id}`, and filter on `_type == "socialCampaign" && reviewStatus == "approved"`.

Only assets with status **approved**, a future **Scheduled for** value, and no existing Buffer post ID are sent. LinkedIn, Facebook, Instagram, and short-form/X are supported in V1. Newsletter and carousel briefs remain manual. Successful items are marked **scheduled** and retain their Buffer post ID, making webhook retries idempotent. Errors remain visible on the individual asset.

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

Copy `.env.example` to the deployment's encrypted environment configuration. The Sanity token needs document read/write access to the production dataset. All variables are server-only. Image behavior can be configured with `FEATURED_IMAGE_MODEL`, `FEATURED_IMAGE_SIZE`, `FEATURED_IMAGE_QUALITY`, `INLINE_IMAGE_SIZE`, and `INLINE_IMAGE_QUALITY`.

## Rank Score adapter contract

### Direct Rank Score API intake

Rank Score completed articles can be fetched without copying their content into the request. The API key remains server-side:

```bash
curl http://localhost:3000/api/content/intake/rank-score \
  -H "Authorization: Bearer $CONTENT_INTAKE_SECRET" \
  -H "Content-Type: application/json" \
  --data '{"articleId":"<rank-score-uuid>","pillarArticleId":"<published-sanity-article-id>"}'
```

The adapter uses Rank Score's stable article ID for idempotency and prefers Markdown while retaining the supplied metadata. Rank Score imagery is retained as provenance only. The Tidal Point processor adds 2–5 researched sources, generates the featured image, and creates two context-sensitive inline images. Re-importing identical source content returns the existing draft. Changed source content requires an explicit `force: true` to protect editorial work.

The current Rank Score integration is pull-based because its published API documentation does not expose a webhook.

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
