#!/bin/bash

go run . -listen=:8001 &
go run . -listen=:8002 &
go run . -listen=:8003 &
go run . -listen=:8080 -proxy=localhost:8001,localhost:8002,localhost:8003

for s in foo bar baz ; do curl -d"{\"s\":\"$s\"}" localhost:8080/uppercase ; done