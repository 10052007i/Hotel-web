# 🏨 Cuadrape Web — Landing Page Comercial e Interactiva para Hospedajes

[![Astro](https://img.shields.io/badge/Astro-v5.1-orange.svg)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.4-38bdf8.svg)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict_Mode-blue.svg)](https://www.typescriptlang.org/)
[![Audit Status](https://img.shields.io/badge/Content_Audit-PASSED-emerald.svg)](#-script-de-auditor%C3%ADa-de-contenido)

Sitio web comercial y landing page interactiva para **Cuadrape para Hospedajes** (`cuadrape.com`), construida con **Astro 5**, **Tailwind CSS** y **TypeScript en modo estricto (`strict: true`)**. 

Diseñada bajo los principios de *Mobile-First* estricto (a partir de 360px de ancho) y alimentada por la **Fuente Única de Verdad (Single Source of Truth)** para garantizar cero datos duplicados (*hardcoding*) y máximo rendimiento en dispositivos móviles.

---

## ✨ Características Principales

- **🎨 Identidad de Marca Oficial:** Utiliza la paleta oficial de Cuadrape (`#023F72` azul y `#E8AF2F` dorado), el logotipo oficial en SVG (`/logo.svg`) y la tipografía variable `@fontsource-variable/archivo`.
- **📱 Mobile-First Estricto:** Adaptado a pantallas pequeñas, con soporte para safe-area insets (`pb-safe`) y menú hamburguesa responsivo.
- **⚡ Simulador Interactivo del Tablero (`TableroDemo.astro`):** Demostración interactiva en vivo que muestra el bloqueo automático de reasignación en la **Habitación 5** y el recálculo inmediato de caja.
- **📊 Comparativo Visual "Del Cuaderno al Tablero" (`CuadernoVSVisual.astro`):** Demostración visual de las fugas invisibles en el cuaderno frente al control digital en tiempo real.
- **🟢 Botones de Acción Oficiales con Ícono de WhatsApp:** Integración del verde de WhatsApp y el ícono oficial en todos los llamados a la acción (CTA).
- **🚀 Rutas Multi-Página Organizadas:**
  - `/` (Página Principal)
  - `/problema` (El Problema del Cuaderno)
  - `/solucion` (Bloqueo de Reasignación)
  - `/panel` (Panel de Control del Dueño)
  - `/piloto` (Resultados del Piloto en Pucallpa)
  - `/como-trabajas` (Tarifas, Yape/POS y Friobar)
  - `/precios` (Plan Único S/ 119 al mes + Implementación S/ 300)
  - `/faq` (Preguntas Frecuentes y Soporte)
  - `/privacidad`, `/terminos`, `/reclamaciones` (Sección Legal)

---

## 💻 Guía Paso a Paso para Clonar y Ejecutar en Otra PC (Desde Cero)

Sigue estas instrucciones si vas a descargar o ejecutar el proyecto en una **nueva computadora**:

### 📋 Requisitos Previos

Antes de empezar, asegúrate de tener instalado en la nueva PC:
1. **Node.js**: Versión `v20.11.0` o superior (Recomendada: `v20.18.0`). [Descargar Node.js](https://nodejs.org/)
2. **Git**: Para clonar el repositorio. [Descargar Git](https://git-scm.com/)
3. **Editor de Código (Opcional):** [VS Code](https://code.visualstudio.com/) con la extensión oficial de **Astro**.

---

### 🚀 Pasos de Ejecución en la Nueva PC

#### Paso 1: Clonar o Descargar el Proyecto
Abre la terminal o PowerShell en la nueva computadora y ejecuta:

```bash
git clone <URL_DE_TU_REPOSDirectorio>
```
*O descarga y extrae el archivo ZIP del proyecto en la carpeta deseada.*

#### Paso 2: Entrar a la carpeta del proyecto

```bash
cd Hotel-proyect
```

#### Paso 3: Verificar la versión de Node.js

```bash
node -v
```
*(Debe mostrar v20.11.0 o superior)*.

#### Paso 4: Instalar las dependencias de Node

```bash
npm install
```
Este comando descargará e instalará todas las librerías necesarias (`astro`, `tailwindcss`, `@fontsource-variable/archivo`, `typescript`, etc.).

#### Paso 5: Iniciar el Servidor de Desarrollo en Vivo

```bash
npm run dev
```
La terminal mostrará:
```text
  🚀 astro v5.1.0 started in 450ms
  ┃ Local    http://localhost:4321/
```
Abre tu navegador y entra a: `http://localhost:4321`

#### Paso 6: Compilar para Producción (Crear carpeta `dist/`)

```bash
npm run build
```
Genera los archivos estáticos HTML/CSS/JS compilados listos para subir a cualquier servidor.

#### Paso 7: Ejecutar la Auditoría de Contenido

```bash
npm run audit
```
Garantiza que el proyecto no contenga frases prohibidas o errores de contenido antes de publicar.

---

## 🛠️ Stack Tecnológico

| Tecnología | Rol en el Proyecto |
|---|---|
| **Astro 5** | Framework SSG para la generación de artefactos HTML estáticos ultrarrápidos. |
| **Tailwind CSS 3** | Framework CSS utility-first para el sistema de diseño responsivo. |
| **TypeScript (Strict)** | Modo estricto (`strict: true`) para garantizar la inmutabilidad de los datos. |
| **Node.js** | Runtime para scripts de compilación y auditorías de calidad pre-despliegue. |

---

## 📂 Arquitectura de Carpetas

```
Hotel-proyect/
├── .gitignore
├── .nvmrc
├── package.json
├── tsconfig.json
├── astro.config.mjs
├── tailwind.config.mjs
├── amplify.yml
├── README.md
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   └── images/               # Fondos reales de desarrollo web e imágenes de marca
├── scripts/
│   ├── check-contenido.mjs   # Script de auditoría de frases prohibidas
│   └── frases-prohibidas.json
└── src/
    ├── config/               # FUENTE ÚNICA DE VERDAD (RUC, Precios, WhatsApp, Sitio)
    │   ├── site.ts
    │   ├── precios.ts
    │   ├── whatsapp.ts
    │   └── productos.ts
    ├── data/                 # Arreglos estructurados tipados (FAQs, Piloto, Características)
    │   └── hospedajes/
    │       ├── faq.ts
    │       ├── caracteristicas.ts
    │       └── testimonios.ts
    ├── components/
    │   ├── ui/               # Componentes visuales (Button, Badge, TableroDemo, WhatsAppFijo)
    │   └── sections/         # Secciones de la landing (Header, Portada, Precios, Footer, etc.)
    ├── layouts/
    │   └── BaseLayout.astro  # Layout global con metadata OpenGraph y SEO
    ├── pages/                # Rutas estáticas multi-página (/problema, /precios, /faq, etc.)
    ├── styles/
    │   └── global.css        # Estilos globales y fuentes
    └── views/
        └── HospedajesLanding.astro
```

---

## 🛡️ Script de Auditoría de Contenido

El archivo `scripts/check-contenido.mjs` inspecciona los archivos estáticos HTML generados en `dist/` para prevenir la publicación accidental de contenido no autorizado o términos prohibidos (*PMS, SaaS, IA, 24/7, optimiza, lorem ipsum, etc.*).

---

## 🌐 Despliegue en Producción

El proyecto incluye el archivo de configuración `amplify.yml` listo para despliegues continuos en **AWS Amplify**:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
        - node scripts/check-contenido.mjs
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

---

## 📄 Licencia y Propiedad

© 2026 **Cuadrape Web** (JSP Operaciones Hospedajes - Pucallpa, Ucayali). Todos los derechos reservados.
