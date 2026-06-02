# Portfolio Redesign Brief (merged from 3-agent critique)

## Consensus priorities

1. **Hero**: Solution Architect · 9 years · Remote (Ahmedabad/IST) + metric-led tagline
2. **Dual CTAs**: Book a call (Cal.com) primary · Download resume PDF secondary
3. **Case studies**: 6+ outcome-first cards (NoticNinja, FMT, ProperX, MedEntry, NFT Trader, QuikHitch, Satark)
4. **Experience timeline** on home + full work page
5. **Services page** for founders (plain language, no jargon wall)
6. **OSS strip**: Gatsby core maintainer, cal.com contributor
7. **Widen layout** to max-w-6xl; demote blog below hire signal
8. **Resume PDF** at `/Resume%202026.pdf` — not LinkedIn-only

## Section order (home)

1. Hero + CTAs
2. Metrics bento
3. Featured work (4 cards)
4. Experience snapshot
5. Open source
6. Services teaser → /services
7. CTA band
8. Latest posts (secondary)

## Copy tone

- Declarative, metrics-first, active voice
- Business outcomes for founders; architecture proof for technical readers
- Avoid: "passionate developer", generic full-stack, stack laundry lists on hero

## Do not

- Lead with Tixbag as flagship
- Resume → LinkedIn only
- Blog-first above-the-fold
- Buzzword domains without linked proof

## Agent-specific notes

**HR**: Title/level match resume; quantified outcomes; PDF resume one-click.

**Dev/PM**: Problem→architecture→stack→outcome per case study; Gatsby/cal.com visible.

**Founder**: Work with me, process, FAQ-lite on services; Cal.com above fold.

---

## Post-build audit (implemented)

| Check | Status |
|-------|--------|
| Resume PDF at `/Resume%202026.pdf` + `/resume` redirect | Done |
| Cal.com primary CTA (header, hero, footer, services) | Done |
| Solution Architect positioning + metrics bento | Done |
| 10 case studies with filters on `/work` | Done |
| `/projects` → `/work` redirect | Done |
| max-w-6xl layout, Syne display font | Done |
| prefers-reduced-motion (CSS + Framer hook) | Done |
| Sticky header with backdrop blur | Done |
| Services page + process + FAQ | Done |

**Follow-ups (optional):** Project screenshots per case study; re-enable RAG chatbot with updated embeddings; 1–2 technical blog posts mirroring case studies.
