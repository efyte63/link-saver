From node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
Run npm install
Copy . . 
Expose 5173:5173
CMD ["npm" , "run" , "dev","--","--host"]