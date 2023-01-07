FROM openjdk:18

WORKDIR /app

COPY . .

RUN javac Fibonacci.java

ENTRYPOINT [ "java", "Fibonacci" ]
