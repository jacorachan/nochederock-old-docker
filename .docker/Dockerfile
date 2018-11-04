FROM php:7.2-apache

COPY . /app
COPY ./.docker/vhosts.conf /etc/apache2/sites-available/000-default.conf

WORKDIR /app
# RUN apt-get update
# RUN apt-get upgrade -y
RUN a2enmod rewrite
