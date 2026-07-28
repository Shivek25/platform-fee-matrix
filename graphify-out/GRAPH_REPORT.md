# Graph Report - platformfeematrix.com  (2026-07-27)

## Corpus Check
- 5 files · ~5,925 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 53 nodes · 48 edges · 9 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `cb958abc`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]

## God Nodes (most connected - your core abstractions)
1. `Components` - 7 edges
2. `Colors` - 6 edges
3. `Typography` - 5 edges
4. `Layout` - 5 edges
5. `Responsive Strategy` - 5 edges
6. `Astro Starter Kit: Basics` - 5 edges
7. `Shapes` - 3 edges
8. `Do's and Don'ts` - 3 edges
9. `Development` - 2 edges
10. `Development` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (9 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.2
Nodes (9): Border Radius Scale, Decorative Depth, Do, Do's and Don'ts, Don't, Elevation & Depth, Overview, Photography Geometry (+1 more)

### Community 1 - "Community 1"
Cohesion: 0.22
Nodes (9): Breakpoints, Collapsing Strategy, Grid & Container, Image Behavior, Layout, Responsive Strategy, Spacing System, Touch Targets (+1 more)

### Community 2 - "Community 2"
Cohesion: 0.29
Nodes (7): Buttons, Cards & Containers, Components, Examples (illustrative), Inputs & Forms, Navigation, Signature Components

### Community 3 - "Community 3"
Cohesion: 0.29
Nodes (6): Astro Starter Kit: Basics, code:sh (npm create astro@latest -- --template basics), code:text (/), 🧞 Commands, 🚀 Project Structure, 👀 Want to learn more?

### Community 4 - "Community 4"
Cohesion: 0.33
Nodes (6): Brand & Accent, Brand Gradient, Colors, Semantic, Surface, Text

### Community 5 - "Community 5"
Cohesion: 0.4
Nodes (5): Font Family, Hierarchy, Note on Font Substitutes, Principles, Typography

### Community 6 - "Community 6"
Cohesion: 0.5
Nodes (3): code:block1 (astro dev --background), Development, Documentation

### Community 7 - "Community 7"
Cohesion: 0.5
Nodes (3): code:block1 (astro dev --background), Development, Documentation

## Knowledge Gaps
- **36 isolated node(s):** `code:block1 (astro dev --background)`, `Documentation`, `code:block1 (astro dev --background)`, `Documentation`, `Overview` (+31 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Layout` connect `Community 1` to `Community 0`?**
  _High betweenness centrality (0.183) - this node is a cross-community bridge._
- **Why does `Components` connect `Community 2` to `Community 0`?**
  _High betweenness centrality (0.147) - this node is a cross-community bridge._
- **Why does `Colors` connect `Community 4` to `Community 0`?**
  _High betweenness centrality (0.124) - this node is a cross-community bridge._
- **What connects `code:block1 (astro dev --background)`, `Documentation`, `code:block1 (astro dev --background)` to the rest of the system?**
  _36 weakly-connected nodes found - possible documentation gaps or missing edges._