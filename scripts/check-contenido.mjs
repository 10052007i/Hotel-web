import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('./dist');
const PROHIBITED_WORDS = JSON.parse(fs.readFileSync(path.resolve('./scripts/frases-prohibidas.json'), 'utf-8'));

function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = `${dir}/${file}`;
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else if (name.endsWith('.html')) {
      files.push(name);
    }
  }
  return files;
}

console.log('🔍 Auditando archivos estáticos generados en /dist...');
if (!fs.existsSync(DIST_DIR)) {
  console.error('❌ Error: El directorio dist/ no existe. Ejecuta npm run build primero.');
  process.exit(1);
}

const htmlFiles = getFiles(DIST_DIR);
let errorsCount = 0;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8').toLowerCase();
  PROHIBITED_WORDS.forEach(word => {
    if (content.includes(word.toLowerCase())) {
      console.error(`❌ Frase prohibida encontrada "${word}" en: ${file}`);
      errorsCount++;
    }
  });
});

if (errorsCount > 0) {
  console.error(`\n🚨 Fallo de validación: Se encontraron ${errorsCount} infracciones de contenido.`);
  process.exit(1);
} else {
  console.log('✅ Auditoría exitosa: Contenido limpio y listo para producción.');
}
