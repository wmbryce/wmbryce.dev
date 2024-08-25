import puppeteer from 'puppeteer';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import {exec} from 'child_process';

async function generateResume() {
  // Wrap the rendered HTML in a full HTML document
  const htmlPath = path.join(process.cwd(), 'content/work.html');
  const cssPath = path.join(process.cwd(), 'content/work.css');

  const fullHTML = fs.readFileSync(htmlPath, 'utf8');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(fullHTML, {waitUntil: 'networkidle0'});
  await page.addStyleTag({path: cssPath, media: 'print'});
  await page.pdf({path: 'resume.pdf', format: 'Letter'});

  await browser.close();
  console.log('generated resume!');

  exec('open resume.pdf');
}

generateResume().catch(console.error);
