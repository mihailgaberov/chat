# syntax=docker/dockerfile:1
FROM ubuntu:latest

WORKDIR /server

# Install necessary dependencies
RUN apt-get update && apt-get install -y ca-certificates curl gnupg

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
ENV NODE_MAJOR=20
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list
RUN apt-get update && apt-get install -y nodejs

# Install Yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# Add Yarn to the PATH
ENV PATH="/root/.yarn/bin:$PATH"

# Copy the application files
COPY . .

# Set executable permissions for the start script
RUN chmod +x start.sh

# Define the command to run your application
CMD ./start.sh
