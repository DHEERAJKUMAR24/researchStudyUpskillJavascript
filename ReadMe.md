
# researchStudyUpskillJavascript Workspace

## Overview
This workspace is designed for organized JavaScript practice, problem solving, and concept upskilling. It follows strict standards for folder structure, file naming, documentation, and performance monitoring.

## Folder Structure

```
Javascript/
	concepts/
		array/
		string/
		linkedlist/
		JsScope/
	performance_helpers/
		performance.js
	ProblemSolving/
		<ProblemName__tags>/
			v1_<problemName>__<tags>__<FileID>.js
	ReadMe.md
```

## Standards & Conventions

- **Concepts:** All concept files are under `Javascript/concepts/` (lowercase).
- **Problems:** All practice problems are under `Javascript/ProblemSolving/`, each in its own folder named `<ProblemName__tags>`.
- **File Naming:**
	- Version prefix (v1, v2, ...)
	- CamelCase problem/concept name
	- Double underscore separator
	- Dash-separated tags
	- Unique short file ID (≤6 chars, alphanumeric, datetime-based)
	- Example: `v1_excludeItems__array-filter-excludeArray__A1B2.js`
- **ReadMe.md:**
	- Each concept/problem folder may have a ReadMe named with its parent (e.g., `array_ReadMe.md`).
	- Top-level ReadMe.md describes the whole workspace.
- **Folder Creation:**
	- Always check for existing folders before creating new ones; skip if present.
- **Performance Monitoring:**
	- Use the shared helper in `Javascript/performance_helpers/performance.js`.
	- Reference with correct relative paths from any subfolder.

## Practice File Template

Each practice file must include:
- File header with problem/concept details, tags, source, links, version, difficulty, file ID, linked versions, improvements, approach, and complexity analysis.
- Main function named `solve<ProblemName><Version>(input)`.
- At least three test cases: positive, negative, edge.
- Performance monitoring code (optional, using shared helper).

## Example

See `Prompt.md` for the full template and standards.

---
For questions or contributions, follow the standards in `Prompt.md` and this ReadMe.
