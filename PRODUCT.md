# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences of equal weight, both evaluating one person — Daryl Guerzon:

- **Hiring managers / recruiters** scanning for senior-level ownership signals: real shipped work, whether this person can be trusted with scope beyond their years.
- **Freelance / agency clients** deciding whether to pay Daryl to build something: outcomes, reliability, "can this person ship my thing."

Both arrive skeptical and time-boxed. They read fast, look for proof, and leave unless something earns a second look.

## Product Purpose

A personal developer portfolio for Daryl Guerzon — a junior full-stack developer (0–2 yrs) at a digital marketing agency who has taken on senior-level responsibility. The site exists to convert a skeptical, time-boxed visitor into an inbound contact. Success is a real reach-out (email / DM / message), not a pageview.

## Positioning

The claim a neighboring junior portfolio cannot truthfully copy: **sole builder of production systems, shipped 0→prod, with named engineering decisions that show senior-level judgment.** The differentiator is not a list of technologies — it is the "engineering decisions" behind each project (OAuth PKCE in cookies for SSR, fail-closed PIN gates, 5-layer read fallbacks, stampede-safe caching). Real outcomes on real users, not demo builds.

## Operating Context

Visitors land from a résumé link, LinkedIn, a referral, or a cold recruiter search. Most reach the site on the strength of the person, not the brand. They skim the work section first; the projects are the proof surface. Many projects are internal/company tools with **no public live link** — the credibility has to come from the writeup and outcomes, not a "visit site" button.

## Capabilities and Constraints

- Static content-driven Next.js 14 (App Router) site; project data lives in `src/data/projects.ts` as typed records.
- Each project record carries: title, type, description, engineering `decisions[]`, `stack[]`, `results[]` (labeled outcome badges), optional `screenshots[]`, optional credential, and a `codePrivateNote` when code cannot be shown.
- Project cards support a screenshot carousel and a collapsible "Engineering decisions" panel (currently collapsed by default).
- Several projects are **code-private** by necessity (employer / client work) — architecture writeups offered "on request." This framing must stay honest; do not imply public repos exist where they do not.
- Real contact links exist: GitHub (DarealGuerzon), LinkedIn (daryl-guerzon), email. Some project-level live/repo URLs are still `TODO` placeholders and are not yet publishable.

## Brand Commitments

- **Real name and identity are binding.** Daryl Guerzon, real GitHub, real LinkedIn, real projects. No placeholder personas or invented identity.
- Voice is factual and engineering-forward — specific decisions and measured outcomes over adjectives. No hype, no "passionate about clean code" filler.

## Evidence on Hand

Real, verified project records in `src/data/projects.ts` — including SignFlow (0→prod in 2 months, sole builder), a multi-tenant reporting platform, an internal automation platform (~90% manual-work reduction, 10–20 DAU), BentaHub POS (adopted by 5 real businesses), a paid freelance wedding site, Merge Pilot (self-learning PR agent), a private RAG assistant, PoultryGuard (Ideathon Finalist, 90% detection accuracy), and Motivex. Screenshots exist for most projects under `/public/images`.

**Do not fabricate**: no additional testimonials, benchmarks, client names, or metrics beyond what already lives in the data file. Every `results` badge is a factual claim the visitor may verify in conversation.

## Product Principles

1. **Proof over polish claims.** Every credibility statement is backed by a named decision or a measured outcome, never an adjective.
2. **Honesty about what can't be shown.** Code-private work stays labeled as such; the writeup carries the weight instead of a fake link.
3. **The engineering decisions are the product.** They are what separates this from a junior portfolio — surface them, don't bury them.
4. **One job: earn the reach-out.** Every surface serves getting a skeptical recruiter or client to make contact.
5. **Serve both readers at once.** A recruiter's "can I trust them with scope" and a client's "can they ship my thing" are answered by the same evidence, framed for both.
