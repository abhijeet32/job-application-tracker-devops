variable "cluster_name" {
    description = "Name of the cluster"
    type = string
}

variable "cluster_role_arn" {
    description = "Cluster role ARN"
    type = string
}

variable "subnet_ids" {
    description = "Subnet ids for EKS"
    type = list(string)
}

variable "cluster_sg_ids" {
    description = "IDs of EKS Security groups"
    type = string
}