provider "aws" {
  region = ""
}

terraform {
  backend "s3" {
    as
  }
}