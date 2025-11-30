FROM ubuntu:22.04

# Install a minimal Nginx to serve the static site
RUN apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends nginx ca-certificates \
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf /var/www/html/*

# Copy site files into the web root
COPY --chown=www-data:www-data . /var/www/html

EXPOSE 80

# Keep Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
