#!/bin/bash
pwd &&
/home/ubuntu/.nvm/versions/node/v20.9.0/bin/npm run build &&
 /home/ubuntu/.nvm/versions/node/v20.9.0/bin/pm2 restart portafolio-app || /home/ubuntu/.nvm/versions/node/v20.9.0/bin/pm2 start npm --name "portafolio-app" -- run start