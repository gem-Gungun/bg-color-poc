# Use an official Nginx image as the base
FROM nginx:alpine

# Copy the build output to the Nginx html directory
COPY build /usr/share/nginx/html 

# Expose port 80
EXPOSE 5173

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
