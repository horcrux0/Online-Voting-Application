# Online-Voting-Application

This is an evoting system using hyperledger fabric


# Prerequisites: (Git, Curl, Docker, Docker-compose)

# Install Hyperledger Fabric, Vs Code, Webstorm 


# Starting Blockchain Test Network and Install Online-Voting-Application Chaincode

cd $HOME/fabric-samples/test-network

# Start Test Network
./network.sh down && ./network.sh createChannel -ca -c mychannel -s couchdb


# Downloading Online-Voting-Application

cd $HOME/fabric-samples

git clone https://github.com/horcrux0/Online-Voting-Application

# necessary library installation

cd $HOME/fabric-samples/Online-Voting-Application/chaincode-javascript
npm install

cd $HOME/fabric-samples/Online-Voting-Application/application-javascript
npm install

cd $HOME/fabric-samples/Online-Voting-Application/application-javascript 
 npm i cookie-parser --save

cd $HOME/fabric-samples/Online-Voting-Application/application-javascript

npm install -g nodemon

cd $HOME/fabric-samples/Online-Voting-Application/application-javascript 

npm install --save express



# Deleting the existing wallet from previous test network
rm -rf $HOME/fabric-samples/Online-Voting-Application/application-javascript/wallet

# Install Chaincode
./network.sh deployCC -ccn evoting -ccp $HOME/fabric-samples/Online-Voting-Application/chaincode-javascript/ -ccl javascript

# Starting Online-Voting-Application API

cd $HOME/fabric-samples/Online-Voting-Application/application-javascript

npx nodemon index.js

# Viewing Blockchain State in CouchDB

You can view the current state at http://localhost:5984/_utils/.

Username: admin
Password: adminpw






# For frontend

cd $HOME/fabric-samples/Online-Voting-Application/frontend-javascript

npm run dev -- -p 3001

open the browser & go to http://localhost:3001 to view the UI.

A bachelor's final year project done by Amitav Das. 


