output "name" {
  value = aws_s3_bucket.event_bucket.bucket
}

output "arn" {
  value = aws_s3_bucket.event_bucket.arn
}