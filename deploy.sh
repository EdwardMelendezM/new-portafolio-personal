#!/bin/bash
pwd
# Cargar NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Verificar versiones
npm -v
pm2 -v

/home/ubuntu/.nvm/versions/node/v20.9.0/bin/npm run build &&
 /home/ubuntu/.nvm/versions/node/v20.9.0/bin/pm2 restart portafolio-app || /home/ubuntu/.nvm/versions/node/v20.9.0/bin/pm2 start npm --name "portafolio-app" -- run start
