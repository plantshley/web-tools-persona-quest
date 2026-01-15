import XLSX from 'xlsx';
import { toolsDatabase } from './src/utils/toolsDatabase.js';

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
const rows = [];

toolsDatabase.forEach(tool => {
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

// Create workbook and worksheet
const wb = XLSX.utils.book_new();
const ws = XLSX.utils.json_to_sheet(rows);

// Set column widths
ws['!cols'] = [
  { wch: 25 },  // Name
  { wch: 50 },  // URL
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
  const urlCell = XLSX.utils.encode_cell({ r: R, c: 1 });

  if (ws[nameCell] && ws[urlCell]) {
    ws[nameCell].l = { Target: ws[urlCell].v, Tooltip: ws[urlCell].v };
  }
}

// Remove the URL column since we're hyperlinking names
const dataWithoutURL = rows.map(({ URL, ...rest }) => rest);
const ws2 = XLSX.utils.json_to_sheet(dataWithoutURL);

// Set column widths for the new sheet
ws2['!cols'] = [
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

// Add hyperlinks to Name column in the new sheet
const range2 = XLSX.utils.decode_range(ws2['!ref']);
for (let R = range2.s.r + 1; R <= range2.e.r; ++R) {
  const nameCell = XLSX.utils.encode_cell({ r: R, c: 0 });
  const url = rows[R - 1].URL;

  if (ws2[nameCell] && url) {
    ws2[nameCell].l = { Target: url, Tooltip: url };
  }
}

// Add worksheet to workbook
XLSX.utils.book_append_sheet(wb, ws2, 'AI Tools Database');

// Write to file
XLSX.writeFile(wb, 'AI_Tools_Database.xlsx');

console.log(`✓ Excel file created successfully!`);
console.log(`✓ Total rows: ${rows.length}`);
console.log(`✓ File: AI_Tools_Database.xlsx`);
