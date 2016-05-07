FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy Source
COPY . /usr/src/app/

# Install app dependencies
RUN npm install

# Run CI
RUN npm test

EXPOSE 8080
CMD [ "npm", "start" ]
