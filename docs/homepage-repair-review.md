# Academic homepage repair review

Base: master at 1a935f981644e4c67319ded72e8bcf089ffdbc18 (2026-10-16).

## Evidence and content policy

The owner's 2026-10-26 instructions are authoritative for name, degree subjects, institutions, April 2027 expected graduation, research experience, and 2027 PhD plans. The existing homepage corroborates the institutions, undergraduate subject, and robotics/Koopman background. Research descriptions deliberately state topics, without unverified metrics or claims of completed contributions.

No GPA, enrollment dates, supervisor title, awards, patents, exact paper authorship, or contact address is inferred from the old PR. No private telephone number is copied. Academic profile links remain blank until verified. The existing profile image is preserved.

Publications and CV say “In process” and explicitly distinguish preparation/review from publication/acceptance. No manuscript is presented as a published or accepted paper.

## PR #1 overlap and disposition

PR #1 is open and mergeable=false. It changes _config.yml, _pages/about.md, and _pages/cv.md. This patch independently replaces all three against current master and supersedes its personal-profile edits. Do not merge or cherry-pick PR #1: it contains an incorrect master's subject, outdated interests, an unconfirmed phone number, and unverified publication/project claims. No content from it is needed to apply this patch; no conflict markers or merge commit are introduced.

PR #1 and its branch remain untouched. After this replacement is reviewed and approved, the owner can close #1 as superseded without merging it. Do not merge both PRs.

## Public template cleanup

Template publications and blog posts remain in git but are excluded from Jekyll output, including direct pages, archives, feed, and sitemap generation. Template talks, teaching, portfolio, demo pages, template policy text, talk map, and sample PDFs are also excluded. Navigation lists About, Publications, and CV only. Theme code and license attribution are preserved. docs/ is excluded so review notes do not become site pages.

## Apply and validate

Apply the accompanying git diff from repository root with `git apply --check academic-homepage-repair.patch`, then `git apply academic-homepage-repair.patch`. The patch targets the base above; recheck if master changes.

Run `bundle install` and `bundle exec jekyll build --strict_front_matter` in a Ruby environment. Verify /, /cv/, /publications/, /year-archive/, /sitemap.xml and /feed.xml; sample item URLs must not be generated. Confirm sidebar links and the expected graduation date. This environment has no Ruby/Bundler, so full Jekyll rendering has not been verified here.

The repair branch is review-only. No default-branch update, deployment, PR closure, or source-file deletion is authorized by this preparation.
