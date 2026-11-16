import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";
import caseStudies from "../../src/data/caseStudies.json";

const slugs = ["the-factory", "vantage", "showcard", "chromatique", "09labs"];

describe("case study data", () => {
  it("has the five case studies used on LinkedIn", () => {
    expect(Object.keys(caseStudies).sort()).toEqual([...slugs].sort());
  });

  for (const slug of slugs) {
    const study = caseStudies[slug as keyof typeof caseStudies];

    it(`${slug} has a title, summary, status and sections`, () => {
      expect(study.title.length).toBeGreaterThan(0);
      expect(study.summary.length).toBeGreaterThan(0);
      expect(study.status.length).toBeGreaterThan(0);
      expect(study.sections.length).toBeGreaterThan(0);
    });

    it(`${slug} has no markdown marks or RSVP mentions in visible text`, () => {
      const text = [study.summary, ...study.sections.flatMap((s) => [s.heading, s.body])].join("\n");
      expect(text).not.toMatch(/\*\*/);
      expect(text).not.toMatch(/`/);
      expect(text.toLowerCase()).not.toContain("rsvp");
    });

    it(`${slug} links use https`, () => {
      for (const url of [study.websiteUrl, study.githubUrl]) {
        if (url) expect(url).toMatch(/^https:\/\//);
      }
    });

    it(`${slug} image file exists in public/`, () => {
      if (!study.image) return;
      expect(existsSync(join(process.cwd(), "public", study.image))).toBe(true);
    });
  }
});
