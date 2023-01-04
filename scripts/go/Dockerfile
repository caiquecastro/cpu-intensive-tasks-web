FROM golang:1.19 as build

WORKDIR /usr/src/app

COPY main.go ./

RUN CGO_ENABLED=0 GOOS=linux go build main.go


FROM scratch

WORKDIR /app

COPY --from=build /usr/src/app/main ./

ENTRYPOINT ["./main"]
