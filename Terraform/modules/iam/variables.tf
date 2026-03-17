variable "cluster_role_name" {
    description = "IAM role for EKS cluster"
    type = string
}

variable "node_role_name" {
    description = "IAM role for Worker Nodes"
    type = string
}