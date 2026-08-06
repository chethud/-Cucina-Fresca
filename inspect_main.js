const fs = require('fs');
const path = require('path');

const folders = [12, 13, 14, 15];

folders.forEach(num => {
  const dir = `E:/OneDrive/Documents/Downloads/page_content (${num})`;
  const html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');

  console.log(`\n========================================`);
  console.log(`PAGE ${num} MAIN CONTENT STRUCTURE`);
  console.log(`========================================`);

  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) {
    const mainHtml = mainMatch[1];
    // Find sections or headings inside main
    const sections = [...mainHtml.matchAll(/<section[^>]*>([\s\S]*?)<\/section>/gi)];
    console.log(`Found ${sections.length} <section> elements in <main>.`);
    sections.forEach((sec, idx) => {
      const secText = sec[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 100);
      console.log(`  Section ${idx + 1}: ${secText}...`);
    });
  } else {
    console.log('No <main> tag found!');
  }
});
