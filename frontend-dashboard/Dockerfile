FROM nginx:alpine

# Copy the static website
COPY index.html /usr/share/nginx/html/index.html

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80