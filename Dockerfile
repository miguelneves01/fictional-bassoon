# Etapa 1: Build da aplicação
FROM node:23 AS builder

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos para o contêiner
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos
COPY . .

# Build da aplicação Next.js
RUN npm run build

# Etapa 2: Servir a aplicação usando uma imagem leve
FROM node:23-alpine

# Definir diretório de trabalho
WORKDIR /app

# Instalar dependências de produção
COPY package.json package-lock.json ./
RUN npm install --production

# Copiar os arquivos buildados
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./

# Expor a porta padrão do Next.js
EXPOSE 3001

# Iniciar a aplicação
CMD ["npm", "start"]
