FROM gcc:12.2

WORKDIR /app

COPY . .

RUN gcc -o fibonacci.x fibonacci.c

ENTRYPOINT [ "./fibonacci.x" ]
