locals {
  event_bucket_name = "${var.stage}_events"
}

module "bucket_tags" {
  source = "../core/tags"
  resource_name = "EventBucket"
  application_name = "TherifyAnalytics"
}

module "event_bucket" {
  source = "../storage/bucket"
  bucket_name = local.event_bucket_name
  tags = module.bucket_tags.value
}