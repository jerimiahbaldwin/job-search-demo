FROM node:13.12.0-alpine

# add app
COPY . /app
RUN chown -R 1000:1000 /app
USER 1000

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
RUN npm install

# start app
CMD ["npm", "start"]