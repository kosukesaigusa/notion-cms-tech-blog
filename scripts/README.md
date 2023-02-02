# notion-cms-tech-blog-scripts

## Setup

Install dependencies:

```sh
npm ci
```

`.env` file:

```.env
NOTION_API_KEY=<YOUR_NOTION_API_KEY_HERE>
NOTION_DATABASE_ID=<YOUR_NOTION_DATABASE_ID_HERE>
```

## Run

Export Notion database pages to `../exported-posts` directory as markdown files.

```sh
npm run export-md
```
