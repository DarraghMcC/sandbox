provider "aws" {
  profile = "darraghmc"
  region  = "ap-southeast-2"
}

resource "aws_instance" "example" {
  ami           = "ami-09b42976632b27e9b"
  instance_type = "t2.micro"
}
