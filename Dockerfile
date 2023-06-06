FROM ubuntu 

RUN apt update 
RUN apt install -y apache2 apache2-utils && apt clean

CMD ["apache2ctl", "-D", "FOREGROUND"]