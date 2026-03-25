{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "avoid",
  "endOfLine": "lf",
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "proseWrap": "preserve"
}

// ignore patterns (from .prettierignore):
# Dependencies
node_modules/
.pnpm-store/

# Build outputs
dist/
build/
*.dist

# Generated files
*.tsbuildinfo
coverage/

# Package files
package-lock.json
pnpm-lock.yaml

# Database
*.db
*.sqlite
*.sqlite3

# Logs
*.log

# Environment files
.env*

# IDE files
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db
