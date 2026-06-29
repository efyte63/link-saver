From node:22-alpine
WORKDIR /app
Copy .package.json .package.json
Copy .package-lock.json .packagte-lock.json 
Run npm install
Copy . . 
Expose 5173:5173
CMD ["npm" , "run" , "dev","--","--host"]