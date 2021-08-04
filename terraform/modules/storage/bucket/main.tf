resource "aws_s3_bucket" "event_bucket" {
  bucket = var.bucket_name
  tags = var.tags
}