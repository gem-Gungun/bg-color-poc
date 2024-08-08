# Use an official Nginx image as the base
FROM nginx:alpine

# Copy the build output to the Nginx html directory
COPY ./dist /usr/share/nginx/html 


EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
