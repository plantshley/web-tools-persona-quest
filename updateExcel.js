import XLSX from 'xlsx';
import { toolsDatabase } from './src/utils/toolsDatabase.js';
import fs from 'fs';

// Function to format price information
function formatPrice(tool) {
  const priceMap = {
    'free': 'Free',
    'freemium': 'Freemium',
    'paid': 'Paid'
  };

  const tierMap = {
    'robust': 'w/ robust free tier',
    'somewhat-limited': 'w/ somewhat limited free tier',
    'very-limited': 'w/ very limited free tier'
  };

  let priceStr = priceMap[tool.price] || tool.price;

  if (tool.price === 'freemium' && tool.freeTierAccess) {
    priceStr += ' ' + (tierMap[tool.freeTierAccess] || tool.freeTierAccess);
  } else if (tool.price === 'free' && tool.freeTierAccess) {
    priceStr += ' (' + (tierMap[tool.freeTierAccess] || tool.freeTierAccess) + ')';
  }

  return priceStr;
}

// Function to get first 3 items from an array
function getFirstThree(arr) {
  if (!arr || !Array.isArray(arr)) return '';
  return arr.slice(0, 3).join(', ');
}

// Function to normalize arrays
function normalizeToArray(value) {
  if (Array.isArray(value)) return value;
  if (typeof value === 'string') return [value];
  return [];
}

// Generate rows from tools database
function generateRows(toolIds = null) {
  const rows = [];

  toolsDatabase.forEach(tool => {
    // If toolIds is provided, only include those specific tools
    if (toolIds && !toolIds.includes(tool.id)) {
      return;
    }

    const supportTypes = normalizeToArray(tool.supportType);
    const categories = normalizeToArray(tool.category);

    // Create a row for each combination of support type and category
    supportTypes.forEach(supportType => {
      categories.forEach(category => {
        rows.push({
          'Name': tool.name,
          'URL': tool.url,
          'Description': tool.shortDescription,
          'Support Type': supportType,
          'Category': category,
          'AI-Dependency': tool.aiDependency,
          'Price': formatPrice(tool),
          'Complexity': tool.complexity,
          'Strengths': getFirstThree(tool.strengths),
          'Weaknesses': getFirstThree(tool.weaknesses)
        });
      });
    });
  });

  return rows;
}

// Main function
const excelFilePath = 'Web_Tools_Database.xlsx';
let wb;

// Check if Excel file exists
if (fs.existsSync(excelFilePath)) {
  console.log(`📖 Reading existing file: ${excelFilePath}`);
  wb = XLSX.readFile(excelFilePath);

  // Remove old "Updates" tab if it exists
  if (wb.SheetNames.includes('Updates')) {
    console.log('🗑️  Removing old Updates tab...');
    const sheetIndex = wb.SheetNames.indexOf('Updates');
    wb.SheetNames.splice(sheetIndex, 1);
    delete wb.Sheets['Updates'];
  }
} else {
  console.log('📄 Creating new workbook (file not found)');
  wb = XLSX.utils.book_new();
}

// Generate fresh data from toolsDatabase - only new tools
const newToolIds = ['julius-ai', 'daz-studio', 'excalidraw', 'beautiful-ai', 'artlist-io'];
const rows = generateRows(newToolIds);
const dataWithoutURL = rows.map(({ URL, ...rest }) => rest);

// Create the Updates worksheet
const ws = XLSX.utils.json_to_sheet(dataWithoutURL);

// Set column widths
ws['!cols'] = [
  { wch: 25 },  // Name
  { wch: 60 },  // Description
  { wch: 15 },  // Support Type
  { wch: 35 },  // Category
  { wch: 15 },  // AI-Dependency
  { wch: 40 },  // Price
  { wch: 15 },  // Complexity
  { wch: 50 },  // Strengths
  { wch: 50 }   // Weaknesses
];

// Add hyperlinks to Name column
const range = XLSX.utils.decode_range(ws['!ref']);
for (let R = range.s.r + 1; R <= range.e.r; ++R) {
  const nameCell = XLSX.utils.encode_cell({ r: R, c: 0 });
  const url = rows[R - 1].URL;

  if (ws[nameCell] && url) {
    ws[nameCell].l = { Target: url, Tooltip: url };
  }
}

// Add the Updates sheet
XLSX.utils.book_append_sheet(wb, ws, 'Updates');

// Write to file
XLSX.writeFile(wb, excelFilePath);

console.log(`✓ Excel file updated successfully!`);
console.log(`✓ Total rows in Updates tab: ${rows.length}`);
console.log(`✓ File: ${excelFilePath}`);
console.log(`\n📋 Next steps:`);
console.log(`   1. Open ${excelFilePath}`);
console.log(`   2. Review the "Updates" tab`);
console.log(`   3. Copy any changes you want to your formatted sheet`);
console.log(`   4. Delete the "Updates" tab when done (or keep it for reference)`);
