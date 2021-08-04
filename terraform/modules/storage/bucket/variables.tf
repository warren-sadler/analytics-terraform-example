variable "bucket_name" {
  type = string
  description = "The name of the storage bucket for event"
}

variable "tags" {
  type = map(string)
}